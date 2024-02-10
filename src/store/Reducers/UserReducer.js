import {createAsyncThunk} from "@reduxjs/toolkit";
import { api } from "../../api/api";

const fetchAllUsers = createAsyncThunk('users/fetchAll', async (payload, thunkApi) => {
    try {
        const response = await api.getUser();
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
        
    }
})

export default fetchAllUsers;