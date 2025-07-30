import axios from "axios";

export const movieApi = axios.create({
    baseURL :"https://api.themoviedb.org/3/movie",
    params : {
        language:"es-MX",
        api_key: "924d64ec0ec79c5df6ab6d4e5fd0aae1"
    }
})