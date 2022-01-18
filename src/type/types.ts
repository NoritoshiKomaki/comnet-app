import { FieldError } from 'react-hook-form';

export type SignAuth = {
    email: string;
    password: string;
    name?: string;
    belongs?: string;
};

export type SignErrors = {
    email?: FieldError;
    password?: FieldError;
    name?: FieldError;
    belongs?: FieldError;
};
