import { SerializedError } from '@reduxjs/toolkit';
import { ApiError } from '@supabase/supabase-js';

export interface UserState {
    user_id?: string;
    name?: string;
    belongs?: string;
    apiError?: SerializedError;
}

export type UserAction = {
    setUser: (req: SetUserRequest) => Promise<boolean>;
    getUser: (req: GetUserRequest) => Promise<boolean>;
};

export type SetUserRequest = {
    user_id: string;
    name: string;
    belongs: string;
};

export type GetUserRequest = { user_id: string };

export type SetUserResponce = {
    error: ApiError | null;
    status: number;
};

export type GetUserResponce = {
    user_id: string;
    name: string;
    belongs: string;
};
