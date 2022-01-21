import { FC } from 'react';
import { useForm } from 'react-hook-form';
import EmailForm from '../Common/SignComponent/EmailForm';
import PasswordForm from '../Common/SignComponent/PasswordForm';
import NameForm from './NameForm';
import BelongsForm from './BelongsForm';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';
import { useNavigate } from 'react-router-dom';
import { useSign } from '../../slice/sign/useSign';
import { SignUpRequest } from '../../slice/sign/types';

const SignUp: FC = () => {
    const navigate = useNavigate();
    const { signUp } = useSign();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpRequest>({
        mode: 'onChange',
    });

    const handleSignUp = async ({
        email,
        password,
        name,
        belongs,
    }: SignUpRequest) => {
        await signUp({ email, password, name, belongs });
        navigate('/');
    };

    return (
        <SignContainer>
            <EmailForm register={register} errors={errors} />
            <PasswordForm register={register} errors={errors} />
            <NameForm register={register} errors={errors} />
            <BelongsForm register={register} errors={errors} />
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
