import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { fetchGetUser, fetchSetUser } from './userSlice';
import { GetUserRequest, SetUserRequest, UserAction, UserState } from './types';

export const useUser = (): UserState & UserAction => {
    const dispatch = useAppDispatch();
    const { user_id, name, belongs, apiError } = useAppSelector(
        (state: RootState) => state.user
    );
    const setUser = async (req: SetUserRequest) => {
        const resultAction = await dispatch(fetchSetUser(req));
        if (fetchSetUser.rejected.match(resultAction)) {
            return false;
        }
        const { error } = resultAction.payload;
        if (error !== null) return false;
        return true;
    };

    const getUser = async (req: GetUserRequest) => {
        await dispatch(fetchGetUser(req));
    };

    return { user_id, name, belongs, apiError, setUser, getUser };
};
