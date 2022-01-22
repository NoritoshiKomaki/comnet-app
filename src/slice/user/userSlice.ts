import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    PostgrestResponse,
    PostgrestSingleResponse,
} from '@supabase/supabase-js';
import { supabase } from '../../supabase/supabase';
import {
    GetUserRequest,
    GetUserResponce,
    SetUserRequest,
    SetUserResponce,
    UserState,
} from './types';

const initialState: UserState = {
    user_id: undefined,
    name: undefined,
    belongs: undefined,
    apiError: undefined,
};

export const fetchSetUser = createAsyncThunk<
    PostgrestResponse<SetUserResponce>,
    SetUserRequest
>('fetchSetUser', async ({ user_id, name, belongs }) => {
    const res = await supabase.from('users').insert([
        {
            user_id,
            name,
            belongs,
        },
    ]);
    return res;
});

export const fetchGetUser = createAsyncThunk<
    PostgrestSingleResponse<GetUserResponce>,
    GetUserRequest
>('fetchSignIn', async ({ user_id }) => {
    const res = await supabase
        .from('users')
        .select('*')
        .eq('user_id', user_id)
        .single();
    return res;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSetUser.rejected, (state, action) => {
            state.apiError = action.error;
        });
        builder.addCase(fetchGetUser.fulfilled, (state, action) => {
            state.user_id = action.payload.data?.user_id;
            state.name = action.payload.data?.name;
            state.belongs = action.payload.data?.belongs;
        });
        builder.addCase(fetchGetUser.rejected, (state, action) => {
            state.apiError = action.error;
        });
    },
});

export default userSlice.reducer;
