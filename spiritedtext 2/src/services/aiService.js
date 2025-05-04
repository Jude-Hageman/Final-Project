// src/services/aiService.js
import axios from 'axios';

// Replace with your actual AI API endpoint and model if needed
const API_URL = 'https://api.openai.com/v1/chat/completions';

const AIService = async (query) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: query }],
            },
            {
                headers: {
                    "Authorization": `Bearer YOUR_OPENAI_API_KEY`, // Replace with your API key
                    "Content-Type": "application/json",
                },
            }
        );
        // Return the AI response text
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("AI Query Error:", error);
        return "Sorry, an error occurred while processing your query.";
    }
};

export default AIService;
