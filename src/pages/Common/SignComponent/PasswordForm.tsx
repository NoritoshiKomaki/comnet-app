import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextField } from '@mui/material';
import { setRegister } from '../../../util/setRegister';
import AlertMessage from './AlertMessage';
import { SignErrors } from '../../../type/types';
import { SignInRequest, SignUpRequest } from '../../../slice/sign/types';

type Props = {
    register: UseFormRegister<SignUpRequest | SignInRequest>;
    errors: SignErrors;
};

const PasswordForm: FC<Props> = ({ register, errors }) => {
    return (
        <div
            style={{
                width: '100%',
                marginTop: 8,
            }}
        >
            <TextField
                id="standard-password-input"
                label="パスワード"
                type="password"
                autoComplete="current-password"
                fullWidth
                variant="standard"
                {...register('password', {
                    required: setRegister.required(),
                    maxLength: setRegister.maxLength(20),
                    minLength: setRegister.minLength(6),
                })}
            />
            <AlertMessage alertType={'password'} errors={errors} />
        </div>
    );
};

export default PasswordForm;
