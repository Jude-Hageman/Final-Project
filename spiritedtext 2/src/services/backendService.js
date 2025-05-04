// src/services/backendService.js
import axios from 'axios';

const BACKEND_API_URL = 'http://localhost:8081/api/llama/process';

const backendService = async (prompt) => {
    try {
        const response = await axios.post(
            BACKEND_API_URL,
            prompt, // Sending the prompt as raw text
            {
                headers: {
                    'Content-Type': 'text/plain'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Backend API Error:', error);
        return 'Sorry, an error occurred while processing your query.';
    }
};

export default backendService;
