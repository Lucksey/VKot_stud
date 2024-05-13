import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4a49b376-f3be-45d0-91cf-951637ecb086'
    }
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            });
    }
}


/*
export const getUsersFU = (id) => {
    return instance.get(`follow/${id}`)
        .then(responce => {
            return responce.data;
        });
}
*/

