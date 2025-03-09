import { configureStore } from "@reduxjs/toolkit"; 
import taskReducer from "./slices/taskSlice"
import weatherReducer from "./slices/weatherSlice"
import authReducer from "./slices/authSlice"

const store = configureStore({
    reducer:{
        auth:authReducer,
        tasks:taskReducer,
        weather:weatherReducer,
    }
})

export default store;