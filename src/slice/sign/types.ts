import { SerializedError } from '@reduxjs/toolkit';
import { ApiError, Session, User } from '@supabase/supabase-js';

export interface SignState {
    session: Session | null;
    user: User | null;
    error: ApiError | null;
    apiError?: SerializedError;
}

export type SignAction = {
    signUp: (req: SignUpRequest) => Promise<void>;
    signIn: (req: SignInRequest) => Promise<void>;
};

export type SignUpRequest = {
    email: string;
    password: string;
    name?: string;
    belongs?: string;
};

export type SignInRequest = {
    email: string;
    password: string;
};

export type SignResponse = {
    session: Session | null;
    user: User | null;
    error: ApiError | null;
};
