import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice/userSlice';


export const store = configureStore({
  reducer:{
    user: userReducer
  },
  //adding middleware to save from getting error in serializable
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false
    })
})