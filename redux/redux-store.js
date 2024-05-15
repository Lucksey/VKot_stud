import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import settingReducer from "./setting-reducer";
import {thunk} from "redux-thunk";

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    repos: settingReducer // использовал при изученни useSelector, useDispatch
});

const store = createStore(rootReducers, applyMiddleware(thunk));

window.store = store;

export default store;
