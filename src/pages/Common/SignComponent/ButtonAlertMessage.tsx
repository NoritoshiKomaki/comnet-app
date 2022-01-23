import { FC, useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { useSign } from '../../../slice/sign/useSign';
import { createSignErrorMessage } from '../../../util/createSignErrorMessage';

type Props = {
    isError: boolean;
};

const ButtonAlertMessage: FC<Props> = ({ isError }) => {
    const { error } = useSign();
    const [errorMessage, setErrorMessage] = useState<string>('');
    useEffect(() => {
        const signErrorMessage = createSignErrorMessage(error);
        setErrorMessage(signErrorMessage);
    }, [error]);
    return !isError ? null : (
        <Alert style={{ marginTop: 8 }} severity="error">
            {errorMessage}
        </Alert>
    );
};

export default ButtonAlertMessage;
