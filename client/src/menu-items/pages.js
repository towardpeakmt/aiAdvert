// assets
import AnalyticsIcon from 'icons/menu/AnalyticsIcon';
import DashBoardIcon from 'icons/menu/DashBoardIcon';
import ReportsIcon from 'icons/menu/ReportsIcon';
import SearchIcon from 'icons/menu/SearchIcon';
import VisitorsIcon from 'icons/menu/VisitorsIcon';

const pages = {
    id: 'pages',
    type: 'group',
    title: 'pages',
    children: [
        {
            id: 'visitors',
            title: 'Visitiors',
            type: 'item',
            url: '/visitors',
            icon: VisitorsIcon
        },
        {
            id: 'analytics',
            title: 'Analytics',
            type: 'item',
            url: '/analytics',
            icon: AnalyticsIcon
        },
        {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            url: '/reports',
            icon: ReportsIcon
        }
    ]
};

export default pages;
