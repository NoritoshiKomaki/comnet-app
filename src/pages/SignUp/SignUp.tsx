import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../../supabase/supabase';
import EmailForm from '../Common/SignComponent/EmailForm';
import PasswordForm from '../Common/SignComponent/PasswordForm';
import NameForm from './NameForm';
import BelongsForm from './BelongsForm';
import { SignAuth } from '../../type/types';
import SignContainer from '../Common/SignComponent/SignContainer';
import SignButton from '../Common/SignComponent/SignButton';
import SignLink from '../Common/SignComponent/SignLink';

const SignUp: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignAuth>({
        mode: 'onChange',
    });

    const handleSignUp = async ({
        email,
        password,
        name,
        belongs,
    }: SignAuth) => {
        const req = await supabase.auth.signUp({ email, password });
        if (req.user !== null) {
            await supabase.from('users').insert([
                {
                    user_id: req.user.id,
                    name,
                    belongs,
                },
            ]);
        }
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
            <SignLink path={'/'} title={'サインイン'} />
        </SignContainer>
    );
};

export default SignUp;
