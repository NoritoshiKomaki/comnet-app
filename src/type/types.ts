import { FieldError } from 'react-hook-form';

export type SignErrors = {
    email?: FieldError;
    password?: FieldError;
    name?: FieldError;
    belongs?: FieldError;
};
