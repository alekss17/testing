import axios from "axios";
export const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
        "API-KEY": "a933888c-0740-4c7d-a535-0736ae8e67d5",
        "Authorization": "Bearer 26e57185-1403-48e4-b718-699f835f5d2e"
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
