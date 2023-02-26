// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';
import LogOutItem from './Navigation/LogOutItem';
// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
    <SimpleBar
        sx={{
            '& .simplebar-content': {
                display: 'flex',
                flexDirection: 'column'
            }
        }}
        className="py-5"
    >
        <Navigation />
        <NavCard />
        <LogOutItem />
    </SimpleBar>
);

export default DrawerContent;
