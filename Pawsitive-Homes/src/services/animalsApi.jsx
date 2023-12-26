import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
});

const getAnimals = await api.get('/animals');

const addAnimal = async (newAnimal) => {
    const response = await api.post('/animals', newAnimal);
    return response.data;
};

const updateAnimal = async (id, updatedAnimal) => {
    const response = await api.put(`/animals/${id}`, updatedAnimal);
    return response.data;
};

const deleteAnimal = async (id) => {
    const response = await api.delete(`/animals/${id}`);
    return response.data;
};

const animalsApi = {
    getAnimals,
    addAnimal,
    updateAnimal,
    deleteAnimal,
};

export default animalsApi;
