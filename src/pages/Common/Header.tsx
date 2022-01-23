import { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useUser } from '../../slice/user/useUser';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabase';
import LoadingView from './Backdrop';

type Props = {
    setIsOpenDrawer: (inVal: boolean) => void;
};

const Header: FC<Props> = ({ setIsOpenDrawer }) => {
    const navigate = useNavigate();
    const { name, belongs } = useUser();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signOut = async () => {
        setIsLoading(true);
        await supabase.auth.signOut();
        setIsLoading(false);
        navigate('/');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setIsOpenDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="span"
                        sx={{
                            flexGrow: 1,
                            fontSize: 16,
                        }}
                    >
                        {belongs}：{name}
                    </Typography>
                    <Button color="inherit" onClick={signOut}>
                        ログアウト
                    </Button>
                </Toolbar>
            </AppBar>
            <LoadingView isLoading={isLoading} />
        </Box>
    );
};
export default Header;
