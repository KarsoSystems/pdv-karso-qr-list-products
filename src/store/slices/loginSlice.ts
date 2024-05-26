import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
  user:{
    iat:number;
    username:string
  } | null
}

const initialState: IUserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserLogin:(state, payload:PayloadAction<IUserState>)=>{
      return {...payload.payload};
    },
    logoutUser:()=>{
      return {user: null};
    }
  },
})

export const { getUserLogin, logoutUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user.user
export default userSlice.reducer