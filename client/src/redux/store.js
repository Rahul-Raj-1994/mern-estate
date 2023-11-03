import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './user/userSlice.js';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({ user: userReducer });

// We need to persist the store so that the data or the user information is not lost when the page is refreshed.
// Hemce,the user information is persisted in the localStoage of the browser.
const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure or create a store and then provide this store to the enire react application in index.js file
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
