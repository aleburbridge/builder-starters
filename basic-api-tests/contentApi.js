const API_KEY = 'YOUR_API_KEY';
const MODEL_NAME = 'page';
const BASE_URL = 'https://cdn.builder.io/api/v3/content';

async function getBuilderContent(modelName, options = {}) {
    const queryParams = new URLSearchParams({
        apiKey: API_KEY,
        ...options
    });
    
    const url = `${BASE_URL}/${modelName}?${queryParams}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Builder.io content:', error);
        throw error;
    }
}

getBuilderContent(MODEL_NAME)
    .then(data => console.log(data))
    .catch(error => console.error(error));  