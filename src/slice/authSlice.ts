import {
    createAsyncThunk,
    createSlice,
    SerializedError,
} from '@reduxjs/toolkit';
import { ApiError, Provider, Session, User } from '@supabase/supabase-js';
import { supabase } from '../supabase/supabase';

export interface AuthState {
    session: Session | null;
    user: User | null;
    error: ApiError | null;
    apiError?: SerializedError;
}

interface SignInRequest {
    email: string;
    password: string;
}

const initialState: AuthState = {
    session: null,
    user: null,
    error: null,
    apiError: undefined,
};

interface SignInResponse {
    session: Session | null;
    user: User | null;
    provider?: Provider | undefined;
    url?: string | null | undefined;
    error: ApiError | null;
}

export const fetchSignIn = createAsyncThunk<SignInResponse, SignInRequest>(
    'fetchSignIn',
    async (loginForm) => {
        const { email, password } = loginForm;
        const response = await supabase.auth.signIn({ email, password });
        return response;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSignIn.fulfilled, (state, action) => {
            state.session = action.payload.session;
            state.user = action.payload.user;
            state.error = action.payload.error;
        });
        builder.addCase(fetchSignIn.rejected, (state, action) => {
            state.apiError = action.error;
        });
    },
});
