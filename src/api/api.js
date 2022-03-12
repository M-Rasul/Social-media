import axios from "axios";
const instance = axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
       "API-KEY" : "ebf43dba-df0d-4c9a-819b-41db2c503147"
   }
});
export const userApi = {
    getUsers(currentPage=1, pageSize=10)  {
        return instance.get
        (`users?page=${currentPage}&count=
        ${pageSize}`).then(response => {
            return response.data});
    },
    deleteUsers(userId) {
        return instance.delete('follow/' + userId).then(response => {
           return response.data
        });
    },
    postUsers(userId) {
        return instance.post('follow/' + userId, {}).then(response => {
           return response.data
        });
    }
}
export const profileApi = {
    getProfile(userId) {
        return instance.get("profile/" + userId);
    },
    getStatus(userId) {
        return instance.get("profile/status/" + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status});
    }
}
export const authApi = {
    getUserData() {
        return instance.get("auth/me").then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe=false) {
        return instance.post("auth/login", {email, password, rememberMe})
    },
    logout() {
        return instance.delete("auth/login")
    }
}
