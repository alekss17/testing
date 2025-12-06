import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import DialogsPageR from './DialogsPageReducer';
import ProfilePage from './ProfilePageReducer';
import slideBarR from './SideBarReducer';
import UserPage from './UsersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    DialogsReducer: DialogsPageR,
    ProfileReducer: ProfilePage,
    slideBarReducer: slideBarR,
    UserPageReducer: UserPage,
    auth: authReducer,
    app: appReducer
})

let store = configureStore({reducer: reducers}, applyMiddleware(thunk))

window.store = store

export default store;