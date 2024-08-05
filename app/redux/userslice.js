// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userid:null,
    isLoggedIn:false,
  },
  reducers: {
    setUserid: (state, action) => {
      state.userid = action.payload;
      state.isLoggedIn=true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('userid', action.payload);
        localStorage.setItem('status', state.isLoggedIn);
      }
      
    },
    loadUserid: (state) => {
      if (typeof window !== 'undefined') {
        const userid= localStorage.getItem('userid');
        state.userid = userid;
        const status= localStorage.getItem('status');
        state.isLoggedIn = status;
      }
    },
    clearUserid: (state) => {
      state.userid = null;
    },
  },
});

export const { setUserid, clearUserid,loadUserid } = userSlice.actions;

export default userSlice.reducer;
