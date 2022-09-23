import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { cartSlice } from "./cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  product: productSlice.reducer,
  cart: cartSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)