import { FC } from 'react';

const SignContainer: FC = ({ children }) => {
    return (
        <div
            style={{
                height: '100vh',
                width: '75%',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {children}
        </div>
    );
};

export default SignContainer;
