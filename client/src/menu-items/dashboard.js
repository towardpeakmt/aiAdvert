// assets
import DashBoardIcon from 'icons/menu/DashBoardIcon';
import SearchIcon from 'icons/menu/SearchIcon';

const dashboard = {
    id: 'dashboard',
    title: 'Dashboards',
    type: 'group',
    children: [
        {
            id: 'search',
            title: 'Search',
            type: 'item',
            url: '/search',
            icon: SearchIcon
        },
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: DashBoardIcon
        },
    ]
};

export default dashboard;
