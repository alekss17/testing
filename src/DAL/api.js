import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a933888c-0740-4c7d-a535-0736ae8e67d5"
    }
})

// 🔐 interceptor — подставляет token автоматически
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

/* ================= USERS ================= */
export const UsersApi = {
    GetUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    Follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(res => res.data)
    },

    UnFollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(res => res.data)
    },
}

/* ================= PROFILE ================= */
export const ProfileApi = {
    GetProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(res => res.data)
    },

    GetProfileStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(res => res.data)
    },

    UpdateProfileStatus(status) {
        return instance
            .put(`profile/status`, { status })
            .then(res => res.data)
    },

    SavePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)

        return instance
            .put(`profile/photo`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(res => res.data)
    }
}

/* ================= AUTH ================= */
export const AuthApi = {
    GetMe() {
        return instance
            .get('auth/me')
            .then(res => res.data)
    },

    Login(email, password, rememberMe = false) {
        return instance
            .post('auth/login', { email, password, rememberMe })
            .then(res => res.data)
    },

    Logout() {
        return instance
            .delete('auth/login')
            .then(res => res.data)
    }
}
