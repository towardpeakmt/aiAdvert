// assets
import FeedBackIcon from 'icons/menu/FeedBackIcon';
import HelpIcon from 'icons/menu/HelpIcon';
import SettingsIcon from 'icons/menu/SettingsIcon';

const support = {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/settings',
            icon: SettingsIcon
        },
        {
            id: 'help',
            title: 'Help',
            type: 'item',
            url: '/help',
            icon: HelpIcon
        },
        {
            id: 'feedback',
            title: 'Feedback',
            type: 'item',
            url: '/feedback',
            icon: FeedBackIcon
        }
    ]
};

export default support;
