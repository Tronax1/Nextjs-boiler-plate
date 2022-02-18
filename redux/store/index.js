import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { exampleReducer } from '../slices/exampleSlice';
import { persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

export const useStore = () => {
    const persistConfig = {
        key: 'root',
        storage,
    }
    const reducers = combineReducers({
        test: exampleReducer
    });
    const persistedReducer = persistReducer(persistConfig, reducers);
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
    })
    const persistor = persistStore(store);
    return {
        store,
        persistor
    };
}