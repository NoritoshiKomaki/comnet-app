import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';
import { useNavigate } from 'react-router-dom';
import { useSign } from '../../slice/sign/useSign';
import UserProperty from './UserPropertyForm';
import { SignUpProps } from '../../type/types';
import SignAuthForm from '../Common/SignComponent/SignAuthForm';
import { useUser } from '../../slice/user/useUser';
import CompleteDialog from './CompleteDialog';
import LoadingView from '../Common/Backdrop';

const SignUp: FC = () => {
    const navigate = useNavigate();
    const { signUp } = useSign();
    const { setUser } = useUser();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpProps>({
        mode: 'onChange',
    });

    const [isError, setIsError] = useState<boolean>(false);
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSignUp = async ({
        email,
        password,
        name,
        belongs,
    }: SignUpProps) => {
        setIsLoading(true);
        const resultSignUp = await signUp({ email, password });
        if (!resultSignUp) {
            setIsLoading(false);
            setIsError(true);
            return;
        }
        if (!name || !belongs) return;
        const user_id = resultSignUp.user.id;
        const resultSetUser = await setUser({
            user_id,
            name,
            belongs,
        });
        if (!resultSetUser) {
            setIsLoading(false);
            setIsError(true);
            return;
        }
        setIsLoading(false);
        setIsError(false);
        setIsComplete(true);
    };

    const handleDialogClose = () => {
        setIsComplete(false);
        navigate('/');
    };

    return (
        <SignContainer>
            <SignAuthForm
                register={register}
                errors={errors}
                setIsError={setIsError}
            />
            <UserProperty
                register={register}
                errors={errors}
                setIsError={setIsError}
            />
            <SignButton
                handleSubmit={handleSubmit(handleSignUp)}
                title={'????????????'}
                isError={isError}
            />
            <SignLink
                navigate={() => {
                    navigate('/');
                }}
                title={'????????????'}
            />
            <CompleteDialog
                handleDialogClose={handleDialogClose}
                isComplete={isComplete}
            />
            <LoadingView isLoading={isLoading} />
        </SignContainer>
    );
};

export default SignUp;
