import { FC } from 'react';
import Drawer from '@mui/material/Drawer';

type Props = {
    isOpenDrawer: boolean;
    setIsOpenDrawer: (inVal: boolean) => void;
};

const DrawerView: FC<Props> = ({ isOpenDrawer, setIsOpenDrawer }) => {
    return (
        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
            I am Drawer
        </Drawer>
    );
};
export default DrawerView;
