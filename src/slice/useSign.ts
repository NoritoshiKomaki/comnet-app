import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchSignIn, fetchSignUp } from './signSlice';
import { SignAction, SignInRequest, SignState, SignUpRequest } from './types';

export const useSign = (): SignState & SignAction => {
    const dispatch = useDispatch();
    const { session, user, error, apiError } = useSelector(
        (state: RootState) => state.sign
    );
    const signUp = async (req: SignUpRequest) => {
        await dispatch(fetchSignUp(req));
    };
    const signIn = async (req: SignInRequest) => {
        await dispatch(fetchSignIn(req));
    };

    return { session, user, error, apiError, signUp, signIn };
};
