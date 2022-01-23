import { Backdrop, CircularProgress } from '@mui/material';
import { FC } from 'react';

type Props = {
    isLoading: boolean;
};

const LoadingView: FC<Props> = ({ isLoading }) => {
    return (
        <Backdrop sx={{ color: '#fff' }} open={isLoading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
export default LoadingView;
