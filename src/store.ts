import { configureStore } from '@reduxjs/toolkit';
import {
    useSelector as rawUseSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { signSlice } from './slice/signSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        sign: signSlice.reducer,
    },
});

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
