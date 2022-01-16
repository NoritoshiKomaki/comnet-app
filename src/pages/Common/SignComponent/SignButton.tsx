import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
    handleSubmit: () => void;
    title: string;
};

const SignButton: FC<Props> = ({ handleSubmit, title }) => {
    return (
        <Button
            style={{ textTransform: 'none', marginTop: 16 }}
            onClick={handleSubmit}
            variant="contained"
            fullWidth
        >
            {title}
        </Button>
    );
};

export default SignButton;
