import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    fullName: 'Jintu Sharma',
    email: 'jintu@example.com',
    phone: '+91 98765 43210',
    address: '123 Comic Lane, Guwahati, Assam, India',
  },
  reducers: {
    updateProfile(state, action) {
      state.fullName = action.payload.fullName
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.address = action.payload.address
    },
  },
})

export const { updateProfile } = profileSlice.actions
export default profileSlice.reducer