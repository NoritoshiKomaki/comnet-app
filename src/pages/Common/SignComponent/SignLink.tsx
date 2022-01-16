import { Link } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    path: '/' | '/signUp';
    title: string;
};

const SignLink: FC<Props> = ({ path, title }) => {
    const navigate = useNavigate();

    return (
        <Link
            style={{ marginTop: 56 }}
            component="button"
            variant="body2"
            onClick={() => {
                navigate(path);
            }}
        >
            {title}
        </Link>
    );
};

export default SignLink;
