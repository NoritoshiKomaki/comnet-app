import { Link } from '@mui/material';
import { FC } from 'react';

type Props = {
    navigate: () => void;
    title: string;
};

const SignLink: FC<Props> = ({ navigate, title }) => {
    return (
        <Link
            style={{ marginTop: 56 }}
            component="button"
            variant="body2"
            onClick={navigate}
        >
            {title}
        </Link>
    );
};

export default SignLink;
