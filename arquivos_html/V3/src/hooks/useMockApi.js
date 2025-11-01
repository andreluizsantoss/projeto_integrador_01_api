import { apiService } from '../services/apiService.js';

const { useState, useEffect } = React;

// Hook para consumir API real
export function useApi(endpoint, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const makeRequest = async (url, config = {}) => {
        try {
            setLoading(true);
            setError(null);

            let result;
            if (url === '/patient') {
                result = await apiService.getPatients();
            } else if (url.includes('/patient/')) {
                const id = url.split('/patient/')[1];
                result = await apiService.getPatient(id);
            } else if (url.includes('/patient-benefit/')) {
                const id = parseInt(url.split('/patient-benefit/')[1]);
                result = await apiService.getPatientBenefits(id);
            } else if (url.includes('/patient-dependencie/')) {
                const id = parseInt(url.split('/patient-dependencie/')[1]);
                result = await apiService.getPatientDependencies(id);
            } else if (url.includes('/history-activitie/')) {
                const id = parseInt(url.split('id=')[1]);
                result = await apiService.getPatientActivities(id);
            }

            setData(result);
            return result;
        } catch (err) {
            setError(err.message);
            console.error('API Error:', err);
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

// Manter compatibilidade com código existente
export const useMockApi = useApi;