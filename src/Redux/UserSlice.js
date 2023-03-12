import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload ;
    },
  },
})

export const { addUser } = UserSlice.actions

export default UserSlice.reducer