import { SerializedError } from '@reduxjs/toolkit';
import { ApiError, Session, User } from '@supabase/supabase-js';

export interface SignState {
    session: Session | null;
    user: User | null;
    error: ApiError | null;
    apiError?: SerializedError;
}

export type SignAction = {
    signUp: (req: SignUpRequest) => Promise<false | SignResponse>;
    signIn: (req: SignRequest) => Promise<false | SignResponse>;
};

export type SignRequest = {
    email: string;
    password: string;
};

export type SignUpRequest = {
    email: string;
    password: string;
    name?: string;
    belongs?: string;
};

export type SignResponse = {
    session: Session | null;
    user: User | null;
    error: ApiError | null;
};
