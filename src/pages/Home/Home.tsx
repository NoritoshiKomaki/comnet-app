import { FC, useEffect, useState } from 'react';
import { useSign } from '../../slice/sign/useSign';
import { supabase } from '../../supabase/supabase';

const Home: FC = () => {
    const [user, setUser] = useState<any>(null);
    const { session } = useSign();

    useEffect(() => {
        const getUser = async () => {
            if (session?.user) {
                const { data: user } = await supabase
                    .from('users')
                    .select('*')
                    .eq('user_id', session.user.id)
                    .single();
                setUser(user);
            }
        };
        getUser();
    }, [session]);
    return !user ? null : <div>{user.name}</div>;
};

export default Home;
