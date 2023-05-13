import axios from "axios"
import config from '../config.json'

let base_url
if (process.env.NODE_ENV === "production") {
    base_url = `${config.API_HOST_PRODUCTION}/api/v1/berita`
} else if (process.env.NODE_ENV === "development") {
    base_url = `${config.API_HOST_DEVELOPMENT}/api/v1/berita`
}

const getAllBerita = () => {
    return axios.get(base_url, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
}

export { getAllBerita }