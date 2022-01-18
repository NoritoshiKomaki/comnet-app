import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { Alert } from '@mui/material';
import { SignErrors } from '../../../type/types';

type Props = {
    alertType: 'email' | 'password' | 'name' | 'belongs';
    errors: SignErrors;
};

const AlertMessage: FC<Props> = ({ alertType, errors }) => {
    return !errors[alertType] ? null : (
        <Alert style={{ marginTop: 8 }} severity="error">
            <ErrorMessage
                errors={errors}
                name={alertType}
                message={errors[alertType]?.message}
            />
        </Alert>
    );
};

export default AlertMessage;
