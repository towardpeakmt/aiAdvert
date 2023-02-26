import NavItem from './NavItem';
import { logout } from 'menu-items/logout';

const LogOutItem = () => {
    return <NavItem item={logout} level={1} />;
};

export default LogOutItem;
