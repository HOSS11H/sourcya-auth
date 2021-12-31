import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sourcya-connect.herokuapp.com/auth',
});

export default instance;
