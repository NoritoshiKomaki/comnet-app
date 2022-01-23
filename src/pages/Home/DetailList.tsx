import { Card, CardContent } from '@mui/material';
import { FC } from 'react';
import DetailText from './DetailText';

const DetailList: FC = () => {
    return (
        <Card>
            <CardContent>
                <DetailText title={'出張名'} body={'2022全日本選手権'} />
                <DetailText
                    title={'出張場所'}
                    body={'さいたまスーパーアリーナ'}
                />
                <DetailText title={'用件'} body={'支援'} />
                <DetailText title={'出発日'} body={'2022年5月7日'} />
                <DetailText title={'帰還日'} body={'2022年5月7日'} />
                <DetailText title={'前受金'} body={'50000円'} />
                <DetailText title={'受領日'} body={'2022年5月7日'} />
            </CardContent>
        </Card>
    );
};
export default DetailList;
