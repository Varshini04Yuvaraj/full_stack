// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers: {
        addUser: (state, action) => {
            state.list.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.list = state.list.filter(user => user.id !== action.payload);
        }
    }
});

export const { addUser,deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
