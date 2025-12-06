import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
        "API-KEY": "894c36cc-d5e9-47ef-8916-145a2b3c4209",
        "Authorization": "Bearer ce807806-548b-4811-a4a2-2d8fa4013cf3"
    }
})

export const UsersApi = {
    GetUsers(currentPage = 1, pageSize = 5) {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`,)
        .then(response => response.data)
    )},
    UnFollow(userId = 32664) {
        return (
            instance.delete(`follow/${userId}`)
            .then(response => response.data)
        )
    },
    Follow(userId = 32664) {
        return (
            instance.post(`follow/${userId}`, {})
            .then(response => response.data)
        )
    }
}

export const ProfileApi = {
    GetProfile(userId = 32664) {
        return (
            instance.get(`profile/${userId}`)
            .then(response => response.data)
        )
    },
    GetProfileStatus(userId = 32664) {
        return (
            instance.get(`profile/status/${userId}`)
            .then(response => response.data)
        )
    },
    UpdateProfileStatus(status) {
        return instance.put('profile/status', {status})
        .then( response => response.data)
    }
}

export const AuthApi = {
    GetMe() {
        return (
            instance.get('auth/me')
            .then(response => response.data)
        )
    },
    Login(email, password, rememberMe = false) {
        return (
            instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
        )},
    Logout() {
        return (
            instance.delete('auth/login')
            .then(response => response.data)
        )
     }
}
