import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextField } from '@mui/material';
import AlertMessage from '../Common/SignComponent/AlertMessage';
import { setRegister } from '../../util/setRegister';
import { SignAuth, SignErrors } from '../../type/types';

type Props = {
    register: UseFormRegister<SignAuth>;
    errors: SignErrors;
};

const BelongsForm: FC<Props> = ({ register, errors }) => {
    return (
        <div
            style={{
                width: '100%',
                marginTop: 8,
            }}
        >
            <TextField
                id="standard-belongs-input"
                label="所属"
                type="text"
                fullWidth
                variant="standard"
                {...register('belongs', {
                    required: setRegister.required(),
                    maxLength: setRegister.maxLength(10),
                })}
            />
            <AlertMessage alertType={'belongs'} errors={errors} />
        </div>
    );
};

export default BelongsForm;
