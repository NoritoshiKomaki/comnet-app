import { useAppDispatch, useAppSelector } from '../../store';
import { fetchSignIn, fetchSignUp } from './signSlice';
import { SignAction, SignRequest, SignState, SignUpRequest } from './types';

export const useSign = (): SignState & SignAction => {
    const dispatch = useAppDispatch();
    const { session, user, error, apiError } = useAppSelector(
        (state) => state.sign
    );
    const signUp = async (req: SignUpRequest) => {
        const resultAction = await dispatch(fetchSignUp(req));
        if (fetchSignUp.rejected.match(resultAction)) {
            return false;
        }
        return resultAction.payload;
    };
    const signIn = async (req: SignRequest) => {
        await dispatch(fetchSignIn(req));
        const resultAction = await dispatch(fetchSignIn(req));
        if (fetchSignIn.rejected.match(resultAction)) {
            return false;
        }
        return resultAction.payload;
    };

    return { session, user, error, apiError, signUp, signIn };
};
