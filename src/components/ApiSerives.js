import axios from 'axios';

export function adminLogin(data){
    return axios.post("http://localhost:3700/adminLogin", data);

}

export function studentLogin(data){
    return axios.post('http://localhost:3700/studentLogin', data);
}

export function facultyLogin(data){
    return axios.post('http://localhost:3700/facultyLogin', data);
}

export function getStudents(data){
    return axios.get('http://localhost:3700/studentDetail', data);
}
export function saveAttendance(data){
    return axios.post('http://localhost:3700/saveAttendance', data);
}
export function studentRegister(data){
    return axios.post('http://localhost:3700/studentRegister', data);
}

export function facultyRegister(data){
    return axios.post('http://localhost:3700/facultyRegister', data);
}
