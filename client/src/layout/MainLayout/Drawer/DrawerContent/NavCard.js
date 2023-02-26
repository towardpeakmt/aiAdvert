// material-ui
import { Button, CardMedia, Link, Stack, Typography, Avatar } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-1.png';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
    <MainCard sx={{ m: 3 }} className="py-5 mt-10 bg-white border-0 rounded-none border-y-2">
        <Stack spacing={2}>
            <Avatar alt="profile user" src={avatar} sx={{ width: 32, height: 32 }} />
            <Stack>
                <Typography variant="h5">Sam Wheeler</Typography>
                <Typography variant="h6" color="secondary">
                    samwheeler@example.com
                </Typography>
            </Stack>
        </Stack>
    </MainCard>
);

export default NavCard;
