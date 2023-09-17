import axios from 'axios';

// Create a new Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your API root URL
  // You can also specify other Axios configuration options here
});

export default api;