import axios from 'axios';

const animalsApi = axios.create({
    baseURL: 'http://localhost:3001',
});

export default animalsApi;
