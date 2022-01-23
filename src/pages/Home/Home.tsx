import { FC, useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DrawerView from '../Common/DrawerView';
import Header from '../Common/Header';

const Home: FC = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <Header setIsOpenDrawer={setIsOpenDrawer} />
            <DrawerView
                isOpenDrawer={isOpenDrawer}
                setIsOpenDrawer={setIsOpenDrawer}
            />
            <Fab
                style={{ position: 'absolute', bottom: 24, right: 24 }}
                color="primary"
                aria-label="add"
            >
                <AddIcon />
            </Fab>
        </div>
    );
};

export default Home;
