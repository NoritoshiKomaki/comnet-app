import { FC, useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { useSign } from '../../../slice/sign/useSign';

type Props = {
    isError: boolean;
};

const ButtonAlertMessage: FC<Props> = ({ isError }) => {
    const { error } = useSign();
    const [errorMessage, setErrorMessage] = useState<string>('');
    useEffect(() => {
        if (error?.status === 400) {
            setErrorMessage('既に登録されたユーザーです');
            return;
        }
        setErrorMessage('通信環境を確認してください');
    }, [error]);
    return !isError ? null : (
        <Alert style={{ marginTop: 8 }} severity="error">
            {errorMessage}
        </Alert>
    );
};

export default ButtonAlertMessage;
