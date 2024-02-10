import axios from 'axios';

const ins = axios.create({baseURL: 'http://localhost:3000/users'})

const getUser = () => ins.get('/');
    

export const api = { getUser };


