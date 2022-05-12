import axios from "axios";

const BASE_URI = "https://9b72-2400-adc5-17e-3500-1afa-5a06-1a6f-947a.in.ngrok.io/dev";

export const login = (payload) => {
    return axios.post(`${BASE_URI}/auth/login`, payload);
}

export const getUsers = () => {
    return axios.get(`${BASE_URI}/users`);
}

export const createUser = (payload) => {
    return axios.post(`${BASE_URI}/users`, payload);
}

export const getReceptionPatients = () => {
    return axios.get(`${BASE_URI}/patients`);
}

export const createPatient = (payload) => {
    return axios.post(`${BASE_URI}/patients`, payload);
}