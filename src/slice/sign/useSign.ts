import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchSetUser } from '../user/userSlice';
import { fetchSignIn, fetchSignUp } from './signSlice';
import { SignAction, SignRequest, SignState, SignUpRequest } from './types';

export const useSign = (): SignState & SignAction => {
    const dispatch = useDispatch();
    const { session, user, error, apiError } = useSelector(
        (state: RootState) => state.sign
    );
    const signUp = async ({
        email,
        password,
        name,
        belongs,
    }: SignUpRequest) => {
        try {
            await dispatch(fetchSignUp({ email, password }));
        } catch {
            return;
        } finally {
            if (!user) return;
            await dispatch(
                fetchSetUser({
                    user_id: user.id,
                    name,
                    belongs,
                })
            );
        }
    };
    const signIn = async (req: SignRequest) => {
        await dispatch(fetchSignIn(req));
    };

    return { session, user, error, apiError, signUp, signIn };
};
