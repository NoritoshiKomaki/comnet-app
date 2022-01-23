import { Divider } from '@mui/material';
import { FC } from 'react';

type Props = {
    title: string;
    body: string;
};

const DetailText: FC<Props> = ({ title, body }) => {
    return (
        <>
            <div style={{ padding: 8, display: 'flex', alignItems: 'center' }}>
                <div style={{ fontSize: 14, width: 96 }}>{title}</div>
                <div style={{ fontSize: 14, flex: 1 }}>{body}</div>
            </div>
            <Divider />
        </>
    );
};
export default DetailText;
