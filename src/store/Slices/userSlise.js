import { createSlice } from "@reduxjs/toolkit";
import fetchAllUsers from "../Reducers/UserReducer";

const initialState = {
    users: [],
    isLoading: false,
    errorUser: '',
    UsersListStatus: 'pending',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchAllUsers.pending, (state) =>{
            state.isLoading = true;
            state.errorUser = '';
            state.users = [];
        });
        builder.addCase(fetchAllUsers.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.errorUser = '';
            state.users = action.payload;
        });
        builder.addCase(fetchAllUsers.rejected, (state, action) =>{
            state.isLoading = false;
            state.errorUser = action.payload;
            state.users = [];
        })
    }
});

const usersReducer = usersSlice.reducer;

export const { setUsers, setLoading, setError } = usersSlice.actions;
export default usersReducer;
