import axios from "axios";
import Account from "./utils/helpers/Account";

const API_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    const token = Account.getToken();
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (e) => Promise.reject(e))


class Api {
    static url = API_URL;

    static updateAbout(id) {
        return api.put('/admin/about', { id })
    }

    static updateService(id) {
        return api.put('/admin/service', { id })
    }

    static updateContacts(id) {
        return api.put('/admin/contacts', { id })
    }

    static login(email, password) {
        return api.post('/login', {email,password})
    }

    static register(data) {
        return api.post('/register', data)
    }
}


export default Api;
