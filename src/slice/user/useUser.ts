import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { fetchGetUser, fetchSetUser } from './userSlice';
import { GetUserRequest, SetUserRequest, UserAction, UserState } from './types';

export const useUser = (): UserState & UserAction => {
    const dispatch = useAppDispatch();
    const { user_id, name, belongs, apiError } = useAppSelector(
        (state: RootState) => state.user
    );
    const setUser = async (req: SetUserRequest) => {
        await dispatch(fetchSetUser(req));
    };
    const getUser = async (req: GetUserRequest) => {
        await dispatch(fetchGetUser(req));
    };

    return { user_id, name, belongs, apiError, setUser, getUser };
};
