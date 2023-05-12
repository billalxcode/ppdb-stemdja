import axios from "axios";
import config from '../config.json'

const base_url = `${config.API_HOST}/api/v1/auth`

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