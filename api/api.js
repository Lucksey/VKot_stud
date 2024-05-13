import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4a49b376-f3be-45d0-91cf-951637ecb086'
    }
});


export const usersAPI = {
    authUser() {
        return instance.get(`auth/me`)
            .then(responce => {
                return responce.data;
            });
    },

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            });
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => {
                return responce.data;
            });
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(responce => {
                return responce.data;
            });
    }
}


