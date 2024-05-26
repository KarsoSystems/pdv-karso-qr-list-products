import { Store, configureStore } from '@reduxjs/toolkit'
import   userSlice   from './slices/loginSlice'

export const store:Store = configureStore({
  reducer: {
    user: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch