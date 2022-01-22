import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../supabase/supabase';
import { fetchSetUser } from '../user/userSlice';
import { SignUpRequest, SignResponse, SignState, SignRequest } from './types';

const initialState: SignState = {
    session: null,
    user: null,
    error: null,
    apiError: undefined,
};

export const fetchSignUp = createAsyncThunk<SignResponse, SignUpRequest>(
    'fetchSignUp',
    async ({ email, password, name, belongs }, { dispatch }) => {
        const res = await supabase.auth.signUp({ email, password });
        if (!res.user) return res;
        const user_id = res.user.id;
        if (!name) return res;
        if (!belongs) return res;
        dispatch(
            fetchSetUser({
                user_id,
                name,
                belongs,
            })
        );
        return res;
    }
);

export const fetchSignIn = createAsyncThunk<SignResponse, SignRequest>(
    'fetchSignIn',
    async (req) => {
        const res = await supabase.auth.signIn(req);
        return res;
    }
);

export const signSlice = createSlice({
    name: 'sign',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSignUp.fulfilled, (state, action) => {
            state.session = action.payload.session;
            state.user = action.payload.user;
            state.error = action.payload.error;
        });
        builder.addCase(fetchSignUp.rejected, (state, action) => {
            state.apiError = action.error;
        });
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

export default signSlice.reducer;
