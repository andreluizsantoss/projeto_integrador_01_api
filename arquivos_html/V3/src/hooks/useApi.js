import { useState, useEffect } from 'react';

// Configuração da API
const API_BASE_URL = 'http://localhost:3001';

// Hook para consumir API real
export function useApi(endpoint, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const makeRequest = async (url, config = {}) => {
        try {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...config.headers
            };

            const response = await fetch(`${API_BASE_URL}${url}`, {
                ...config,
                headers
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (endpoint) {
            makeRequest(endpoint, options);
        }
    }, [endpoint]);

    return { 
        data, 
        loading, 
        error, 
        refetch: () => makeRequest(endpoint, options),
        makeRequest 
    };
}

// Hook específico para pacientes
export function usePatients() {
    const { data, loading, error, refetch, makeRequest } = useApi('/patients');

    const createPatient = async (patientData) => {
        return makeRequest('/patients', {
            method: 'POST',
            body: JSON.stringify(patientData)
        });
    };

    const updatePatient = async (id, patientData) => {
        return makeRequest(`/patients/${id}`, {
            method: 'PUT',
            body: JSON.stringify(patientData)
        });
    };

    const deletePatient = async (id) => {
        return makeRequest(`/patients/${id}`, {
            method: 'DELETE'
        });
    };

    return {
        patients: data,
        loading,
        error,
        refetch,
        createPatient,
        updatePatient,
        deletePatient
    };
}

// Hook para autenticação
export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            // Verificar se token é válido
            validateToken(token);
        } else {
            setLoading(false);
        }
    }, []);

    const validateToken = async (token) => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/me`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem('token');
                setIsAuthenticated(false);
            }
        } catch (error) {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    const login = async (username, password) => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Credenciais inválidas');
            }

            const { token, user } = await response.json();
            localStorage.setItem('token', token);
            setUser(user);
            setIsAuthenticated(true);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated,
        user,
        loading,
        login,
        logout
    };
}