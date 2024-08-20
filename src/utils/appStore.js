import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
  // Optionally, if you want to persist only specific reducers:
  // whitelist: ['cart']
};

// const appStore = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  // Add other reducers here if you have any
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(appStore);

export default appStore;
