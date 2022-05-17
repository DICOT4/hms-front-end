import axios from "axios";

const BASE_URI = "https://c288-2400-adc5-17e-3500-20e0-f67d-1085-e51d.in.ngrok.io/dev";

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

export const getDoctors = () => {
    return axios.get(`${BASE_URI}/users/doctors`);
}

export const admitPatients = (payload) => {
    return axios.post(`${BASE_URI}/patients/assign`, payload);
}

export const getDoctorData = (id) => {
    return axios.get(`${BASE_URI}/users/doctors/patients?doctorId=${id}`);
}

export const setPatientData = (payload) => {
    return axios.post(`${BASE_URI}/web3`,payload);
}