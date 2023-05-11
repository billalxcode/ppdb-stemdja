import axios from "axios";

const base_url = "http://localhost:8000/api/v1/auth"

const authLogin = (email, password) => {
    return axios.post(base_url + '/login', {
        "email": email,
        "password": password
    }, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
}

export default authLogin