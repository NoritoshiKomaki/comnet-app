import { configureStore } from '@reduxjs/toolkit';
import {
    useSelector as rawUseSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { authSlice } from './slice/authSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
