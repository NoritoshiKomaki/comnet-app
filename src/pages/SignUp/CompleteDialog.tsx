import { Button, Dialog } from '@mui/material';
import { FC } from 'react';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

type Props = {
    isComplete: boolean;
    handleDialogClose: () => void;
};
const CompleteDialog: FC<Props> = ({ isComplete, handleDialogClose }) => {
    return (
        <Dialog onClose={handleDialogClose} open={isComplete}>
            <div
                style={{
                    margin: 48,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div>登録が完了しました</div>
                <CheckCircleOutlinedIcon
                    sx={{
                        color: '#55C500',
                        fontSize: 48,
                        marginTop: 1,
                        marginBottom: 1,
                    }}
                />
                <Button onClick={handleDialogClose} variant="contained">
                    ログイン画面
                </Button>
            </div>
        </Dialog>
    );
};
export default CompleteDialog;
