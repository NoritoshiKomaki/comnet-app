import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../../supabase/supabase';
import { SignAuth } from '../../type/types';
import EmailForm from '../Common/SignComponent/EmailForm';
import PasswordForm from '../Common/SignComponent/PasswordForm';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';

const SignIn: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignAuth>({
        mode: 'onChange',
    });

    const handleSignIn = async ({ email, password }: SignAuth) => {
        console.log(await supabase.auth.signIn({ email, password }));
    };

    return (
        <SignContainer>
            <EmailForm register={register} errors={errors} />
            <PasswordForm register={register} errors={errors} />
            <SignButton
                handleSubmit={handleSubmit(handleSignIn)}
                title={'サインイン'}
            />
            <SignLink path={'/signUp'} title={'新規登録'} />
        </SignContainer>
    );
};

export default SignIn;
