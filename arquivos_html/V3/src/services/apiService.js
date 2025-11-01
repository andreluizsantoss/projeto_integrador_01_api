// Serviços da API
const API_BASE_URL = 'http://localhost:3001';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
    }

    async request(endpoint, options = {}) {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...options.headers
            },
            ...options
        };

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, config);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Pacientes
    async getPatients() {
        return this.request('/patients');
    }

    async getPatient(id) {
        return this.request(`/patients/${id}`);
    }

    async createPatient(data) {
        return this.request('/patients', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    async updatePatient(id, data) {
        return this.request(`/patients/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    async deletePatient(id) {
        return this.request(`/patients/${id}`, {
            method: 'DELETE'
        });
    }

    // Benefícios
    async getPatientBenefits(patientId) {
        return this.request(`/patient-benefits/${patientId}`);
    }

    async addPatientBenefit(patientId, benefitId) {
        return this.request('/patient-benefits', {
            method: 'POST',
            body: JSON.stringify({ patientId, benefitId })
        });
    }

    async getFixedBenefits() {
        return this.request('/fixed-benefits');
    }

    // Dependências
    async getPatientDependencies(patientId) {
        return this.request(`/patient-dependencies/${patientId}`);
    }

    async addPatientDependency(patientId, dependencyId) {
        return this.request('/patient-dependencies', {
            method: 'POST',
            body: JSON.stringify({ patientId, dependencyId })
        });
    }

    async getFixedDependencies() {
        return this.request('/fixed-dependencies');
    }

    // Atividades
    async getPatientActivities(patientId) {
        return this.request(`/history-activities/patient/${patientId}`);
    }

    async addPatientActivity(patientId, activityId, date) {
        return this.request('/history-activities', {
            method: 'POST',
            body: JSON.stringify({ 
                patientId, 
                activityId, 
                date: date || new Date().toISOString() 
            })
        });
    }

    async getFixedActivities() {
        return this.request('/fixed-activities');
    }

    // Autenticação
    async login(username, password) {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        });
    }

    async getMe() {
        return this.request('/users/me');
    }

    // Usuários
    async getUsers() {
        return this.request('/users');
    }

    async createUser(data) {
        return this.request('/users', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
}

export const apiService = new ApiService();