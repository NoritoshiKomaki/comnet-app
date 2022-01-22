import { FC } from 'react';
import { useForm } from 'react-hook-form';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';
import { useNavigate } from 'react-router-dom';
import { useSign } from '../../slice/sign/useSign';
import UserProperty from './UserPropertyForm';
import { SignUpProps } from '../../type/types';
import SignAuthForm from '../Common/SignComponent/SignAuthForm';

const SignUp: FC = () => {
    const navigate = useNavigate();
    const { signUp } = useSign();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpProps>({
        mode: 'onChange',
    });

    const handleSignUp = async (req: SignUpProps) => {
        await signUp(req);
    };

    return (
        <SignContainer>
            <SignAuthForm register={register} errors={errors} />
            <UserProperty register={register} errors={errors} />
            <SignButton
                handleSubmit={handleSubmit(handleSignUp)}
                title={'新規登録'}
            />
            <SignLink
                navigate={() => {
                    navigate('/');
                }}
                title={'サインイン'}
            />
        </SignContainer>
    );
};

export default SignUp;
