import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7d2653d0-212d-4071-ad57-0422288ffaca'
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
        console.warn('Obsolete method. Please profileApi method.')
        return profileAPI.getProfile(userId);
    },

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus (status) {
        return instance.put('profile/status/', {status: status});
    },
    savePhoto (photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('/profile/photo', formData, {headers: {'Content-type': 'multipart/form-data'}}) ;
    },


}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})

    },
    logout() {
        return instance.delete(`auth/login`)
    },
}
