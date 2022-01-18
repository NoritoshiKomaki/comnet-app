import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { supabase } from '../../supabase/supabase';

const Home: FC = () => {
    const [user, setUser] = useState<any>(null);
    const session = useSelector((state: RootState) => state.sign.session);

    useEffect(() => {
        const setupUser = async () => {
            if (session?.user) {
                const { data: user } = await supabase
                    .from('users')
                    .select('*')
                    .eq('user_id', session.user.id)
                    .single();
                setUser(user);
            }
        };
        setupUser();
    }, [session]);
    return !user ? null : <div>{user.name}</div>;
};

export default Home;
