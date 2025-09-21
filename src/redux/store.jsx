import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice/userSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,persistReducer 
} from 'redux-persist';



const persistConfig = {
  key: 'root',
  storage,
  version:1,
};
const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer,
  //adding middleware to save from getting error in serializable
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false
    })
})

export const persistor = persistStore(store);