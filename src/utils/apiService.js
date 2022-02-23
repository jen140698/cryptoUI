import axios from 'axios';
require('dotenv').config()
export class APIService {
    host;
    method;
    headers;
    body;
    constructor(host, method, headers, body) {
        this.host = host;
        this.method = method;
        this.headers = headers;
        this.body = body;
    }
    makeCall() {
        var request;
        if (['post', 'patch', 'delete'].includes(this.method) || this.body) {
            const form_data = new FormData()
            Object.keys(this.body).forEach(key => {
                form_data.append(key, this.body[key])
            })
            request = axios({
                url: process.env.REACT_APP_BASE_URL+this.host,
                headers: this.headers,
                method: this.method,
                data: form_data
            })

        }
        return new Promise((resolve, reject) => {
            request.then(response => resolve(response))
                .catch(err => reject(err))
        })

    }
}
