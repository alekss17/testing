import { combineReducers, configureStore } from '@reduxjs/toolkit';
import DialogsPageR from './DialogsPageReducer';
import ProfilePage from './ProfilePageReducer';
import slideBarR from './SideBarReducer';
import UserPage from './UsersReducer';

let reducers = combineReducers({
    DialogsReducer: DialogsPageR,
    ProfileReducer: ProfilePage,
    slideBarReducer: slideBarR,
    UserPageReducer: UserPage
})

let store = configureStore({reducer: reducers})

export default store;