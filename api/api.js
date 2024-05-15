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
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
}
