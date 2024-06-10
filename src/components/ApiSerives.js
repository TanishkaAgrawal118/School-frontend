import axios from 'axios';

export function adminLogin(data){
    return axios.post("http://localhost:3700/adminLogin", data);

}

export function studentLogin(data){
    return axios.post('http://localhost:3700/studentLogin', data);
}