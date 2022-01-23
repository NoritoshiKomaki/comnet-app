import { FC, useState } from 'react';
import { Box, Card, Fab, Tab, Tabs, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DrawerView from '../Common/DrawerView';
import Header from '../Common/Header';
import DetailList from './DetailList';

const Home: FC = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    function TabPanel(props: {
        [x: string]: any;
        children: any;
        value: number;
        index: number;
    }) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ m: 2 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = useState<number>(0);

    const handleChange = (_: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                height: '100vh',
                position: 'relative',
                background: '#eee',
            }}
        >
            <Header setIsOpenDrawer={setIsOpenDrawer} />
            <Card
                sx={{
                    m: 2,
                    background: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        style={{ marginRight: 16 }}
                        label="詳細情報"
                        {...a11yProps(0)}
                    />
                    <Tab
                        style={{ marginLeft: 16 }}
                        label="基本情報"
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Card>
            <TabPanel value={value} index={0}>
                出発日
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DetailList />
            </TabPanel>
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
