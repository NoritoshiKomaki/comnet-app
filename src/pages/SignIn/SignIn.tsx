import { FC } from 'react';
import { useForm } from 'react-hook-form';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';
import { useNavigate } from 'react-router-dom';
import { useSign } from '../../slice/sign/useSign';
import { SignInProps } from '../../type/types';
import SignInForm from './SignInForm';

const SignIn: FC = () => {
    const navigate = useNavigate();
    const { signIn } = useSign();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInProps>({
        mode: 'onChange',
    });

    const handleSignIn = async (req: SignInProps) => {
        await signIn(req);
        navigate('home');
    };

    return (
        <SignContainer>
            <SignInForm register={register} errors={errors} />
            <SignButton
                handleSubmit={handleSubmit(handleSignIn)}
                title={'ログイン'}
            />
            <SignLink navigate={() => navigate('/signUp')} title={'新規登録'} />
        </SignContainer>
    );
};

export default SignIn;
