import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/usersSlice"
// import mobileReducer from "../features/mobile/mobileSlice";
import productsReducer from "../features/products/productsSlice"
export const store = configureStore({
    
    reducer: {
        // counter: counterReducer
        posts: postsReducer,
        users: usersReducer,
        // mobiles: mobileReducer
        products: productsReducer
    }
}) 