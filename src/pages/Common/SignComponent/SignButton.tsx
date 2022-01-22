import { Button } from '@mui/material';
import { FC } from 'react';
import ButtonAlertMessage from './ButtonAlertMessage';

type Props = {
    handleSubmit: () => void;
    title: string;
    isError: boolean;
};

const SignButton: FC<Props> = ({ handleSubmit, title, isError }) => {
    return (
        <div style={{ width: '100%' }}>
            <Button
                style={{ textTransform: 'none', marginTop: 16 }}
                onClick={handleSubmit}
                variant="contained"
                fullWidth
            >
                {title}
            </Button>
            <ButtonAlertMessage isError={isError} />
        </div>
    );
};

export default SignButton;
