import { FieldError } from 'react-hook-form';

export type SignUpProps = {
    email: string;
    password: string;
    name?: string;
    belongs?: string;
};

export type SignInProps = {
    email: string;
    password: string;
};

export type SignErrors = {
    email?: FieldError;
    password?: FieldError;
    name?: FieldError;
    belongs?: FieldError;
};
