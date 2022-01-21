import { FC } from 'react';
import { useForm } from 'react-hook-form';
import EmailForm from '../Common/SignComponent/EmailForm';
import PasswordForm from '../Common/SignComponent/PasswordForm';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';
import { useNavigate } from 'react-router-dom';
import { useSign } from '../../slice/sign/useSign';
import { SignInRequest } from '../../slice/sign/types';

const SignIn: FC = () => {
    const navigate = useNavigate();
    const { signIn } = useSign();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInRequest>({
        mode: 'onChange',
    });

    const handleSignIn = async ({ email, password }: SignInRequest) => {
        await signIn({ email, password });
        navigate('home');
    };

    return (
        <SignContainer>
            <EmailForm register={register} errors={errors} />
            <PasswordForm register={register} errors={errors} />
            <SignButton
                handleSubmit={handleSubmit(handleSignIn)}
                title={'ログイン'}
            />
            <SignLink navigate={() => navigate('/signUp')} title={'新規登録'} />
        </SignContainer>
    );
};

export default SignIn;
