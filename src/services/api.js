import axios from "axios";

export const apiFilmes = axios.create({

    baseURL: 'https://626ad7d26a86cd64adb409f7.mockapi.io/',

    headers: {
        'Content-Type': 'application/Json'
    }
})