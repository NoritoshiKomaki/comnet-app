import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SignAuth } from '../../type/types';
import EmailForm from '../Common/SignComponent/EmailForm';
import PasswordForm from '../Common/SignComponent/PasswordForm';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSignIn } from '../../slice/authSlice';

const SignIn: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignAuth>({
        mode: 'onChange',
    });

    const handleSignIn = async ({ email, password }: SignAuth) => {
        await dispatch(fetchSignIn({ email, password }));
        navigate('home');
    };

    return (
        <SignContainer>
            <EmailForm register={register} errors={errors} />
            <PasswordForm register={register} errors={errors} />
            <SignButton
                handleSubmit={handleSubmit(handleSignIn)}
                title={'サインインテスト'}
            />
            <SignLink navigate={() => navigate('/signUp')} title={'新規登録'} />
        </SignContainer>
    );
};

export default SignIn;
