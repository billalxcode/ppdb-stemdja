import axios from "axios"

const base_url = "http://localhost:8000/api/v1/berita"

const getAllBerita = () => {
    return axios.get(base_url, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
}

export { getAllBerita }