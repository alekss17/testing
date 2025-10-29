import { combineReducers, configureStore } from '@reduxjs/toolkit';
import DialogsPageR from './DialogsPageReducer';
import ProfilePage from './ProfilePageReducer';
import slideBarR from './SideBarReducer';

let reducers = combineReducers({
    DialogsReducer: DialogsPageR,
    ProfileReducer: ProfilePage,
    slideBarReducer: slideBarR
})

let store = configureStore({reducer: reducers})

export default store;