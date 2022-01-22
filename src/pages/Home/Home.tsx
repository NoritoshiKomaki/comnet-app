import { FC, useEffect } from 'react';
import { useSign } from '../../slice/sign/useSign';
import { useUser } from '../../slice/user/useUser';

const Home: FC = () => {
    const { session } = useSign();
    const { getUser, name, belongs } = useUser();

    useEffect(() => {
        (async () => {
            if (!session?.user) return;
            await getUser({ user_id: session.user.id });
        })();
    }, [getUser, session]);
    return (
        <div>
            {name}
            {belongs}
        </div>
    );
};

export default Home;
