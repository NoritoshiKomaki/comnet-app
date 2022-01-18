import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextField } from '@mui/material';
import { setRegister } from '../../../util/setRegister';
import AlertMessage from './AlertMessage';
import { SignErrors } from '../../../type/types';
import { SignRequest } from '../../../slice/types';

type Props = {
    register: UseFormRegister<SignRequest>;
    errors: SignErrors;
};

const EmailForm: FC<Props> = ({ register, errors }) => {
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <TextField
                id="standard-email-input"
                label="メールアドレス"
                type="text"
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
    );
};

export default EmailForm;
