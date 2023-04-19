import axios from 'axios';


const instance = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
});

export const setAxiosAuthToken = token => {
    if (typeof token !== 'undefined' && token) {
        instance.defaults.headers.common["Authorization"] = `Token ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

export default instance;