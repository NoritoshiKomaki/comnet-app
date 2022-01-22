import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextField } from '@mui/material';
import AlertMessage from '../Common/SignComponent/AlertMessage';
import { setRegister } from '../../util/setRegister';
import { SignErrors, SignInProps } from '../../type/types';

type Props = {
    register: UseFormRegister<SignInProps>;
    errors: SignErrors;
};

const SignInForm: FC<Props> = ({ register, errors }) => {
    return (
        <>
            <div
                style={{
                    width: '100%',
                }}
            >
                <TextField
                    id="standard-email-input"
                    label="メールアドレス"
                    type="text"
                    autoComplete="current-email"
                    fullWidth
                    variant="standard"
                    {...register('email', {
                        required: setRegister.required(),
                        maxLength: setRegister.maxLength(50),
                        pattern: setRegister.pattern(
                            RegExp(
                                '^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*.)+[a-zA-Z]{2,}$'
                            )
                        ),
                    })}
                />
                <AlertMessage alertType={'email'} errors={errors} />
            </div>
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
        </>
    );
};

export default SignInForm;
