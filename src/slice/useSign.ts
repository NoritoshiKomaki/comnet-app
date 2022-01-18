import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchSignIn, fetchSignUp } from './signSlice';
import { SignAction, SignRequest, SignState } from './types';

export const useSign = (): SignState & SignAction => {
    const dispatch = useDispatch();
    const { session, user, error, apiError } = useSelector(
        (state: RootState) => state.sign
    );
    const signUp = async (req: SignRequest) => {
        await dispatch(fetchSignUp(req));
    };
    const signIn = async (req: SignRequest) => {
        await dispatch(fetchSignIn(req));
    };

    return { session, user, error, apiError, signUp, signIn };
};
