interface Photos {
    small: string | null;
    large: string | null;
}

export interface Contacts {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}

export interface UserProfile {
    aboutMe: string | null;
    contacts: Contacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    userId: number;
    photos: Photos;
}    

export interface ProfileTypeProps {
    profile: UserProfile | null;
    profileStatus: string;
    UpdateProfileStats: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    ProfileLoading: boolean;
    saveProfile: (profile: UserProfile) => Promise<any>
}

export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
      small: null | string, 
      large: null | string  
    },
    status: null | string,
    followed: boolean
}