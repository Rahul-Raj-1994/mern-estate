import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './user/userSlice.js';

// configure or create a store and then provide this store to the enire react application in index.js file
export const store = configureStore({
    reducer: { user: userReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
