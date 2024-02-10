import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './Slices/userSlise';


const rootReducer = combineReducers({
    users: usersReducer,
    
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export default setupStore;