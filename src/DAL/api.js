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
    GetProfile(userId = 2) {
        return (
            instance.get(`profile/${userId}`)
            .then(response => response.data)
        )
    },
    UnFollow(userId = 2) {
        return (
            instance.delete(`follow/${userId}`)
            .then(response => response.data)
        )
    },
    Follow(userId = 2) {
        return (
            instance.post(`follow/${userId}`, {})
            .then(response => response.data)
        )
    }
}

export const AuthApi = {
    GetMe() {
        return (
            instance.get('auth/me')
            .then(response => response.data)
        )
    }
}
