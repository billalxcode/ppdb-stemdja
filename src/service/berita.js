import axios from "axios"
import config from '../config.json'

const base_url = `${config.API_HOST}/api/v1/berita`

const getAllBerita = () => {
    return axios.get(base_url, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
}

export { getAllBerita }