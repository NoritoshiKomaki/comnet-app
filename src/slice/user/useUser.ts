import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchGetUser, fetchSetUser } from './userSlice';
import { GetUserRequest, SetUserRequest, UserAction, UserState } from './types';

export const useUser = (): UserState & UserAction => {
    const dispatch = useDispatch();
    const { user_id, name, belongs, apiError } = useSelector(
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
