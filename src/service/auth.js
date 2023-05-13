import axios from "axios";
import config from '../config.json'

let base_url
if (process.env.NODE_ENV === "production") {
    base_url = `${config.API_HOST_PRODUCTION}/api/v1/auth`
} else if (process.env.NODE_ENV === "development") {
    base_url = `${config.API_HOST_DEVELOPMENT}/api/v1/auth`
}

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