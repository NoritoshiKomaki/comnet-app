import { Button, Dialog, Slide, SlideProps } from '@mui/material';
import { FC, forwardRef } from 'react';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

type Props = {
    isComplete: boolean;
    handleDialogClose: () => void;
};
const CompleteDialog: FC<Props> = ({ isComplete, handleDialogClose }) => {
    const Transition = forwardRef(function Transition(props: SlideProps, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <Dialog
            TransitionComponent={Transition}
            keepMounted
            onClose={handleDialogClose}
            open={isComplete}
        >
            <div
                style={{
                    margin: 64,
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
                        marginTop: 2,
                        marginBottom: 2,
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
