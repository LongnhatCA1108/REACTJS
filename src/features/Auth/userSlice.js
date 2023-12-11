import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const register = createAsyncThunk(  'user/register',
async (payload) => {
    //call API to register
    const data = await userApi.register(payload);

    //save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    //return
    return data.user;
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled, (state, action) => {
            state.current = action.payload;
        })
        
    },
  });

 const { reducer } = usersSlice;
 export default reducer;