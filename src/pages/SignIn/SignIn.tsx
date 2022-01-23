import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';
import { useNavigate } from 'react-router-dom';
import { useSign } from '../../slice/sign/useSign';
import { SignInProps } from '../../type/types';
import SignAuthForm from '../Common/SignComponent/SignAuthForm';
import LoadingView from '../Common/Backdrop';
import { useUser } from '../../slice/user/useUser';

const SignIn: FC = () => {
    const navigate = useNavigate();
    const { signIn } = useSign();
    const { getUser } = useUser();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInProps>({
        mode: 'onChange',
    });

    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSignIn = async (req: SignInProps) => {
        setIsLoading(true);
        const resultSignIn = await signIn(req);
        if (!resultSignIn) {
            setIsLoading(false);
            setIsError(true);
            return;
        }
        const user_id = resultSignIn.user.id;
        const resultGetUser = await getUser({ user_id });
        if (!resultGetUser) {
            setIsLoading(false);
            setIsError(true);
            return;
        }
        setIsLoading(false);
        setIsError(false);
        navigate('home');
    };

    return (
        <SignContainer>
            <SignAuthForm
                register={register}
                errors={errors}
                setIsError={setIsError}
            />
            <SignButton
                handleSubmit={handleSubmit(handleSignIn)}
                title={'ログイン'}
                isError={isError}
            />
            <SignLink navigate={() => navigate('/signUp')} title={'新規登録'} />
            <LoadingView isLoading={isLoading} />
        </SignContainer>
    );
};

export default SignIn;
