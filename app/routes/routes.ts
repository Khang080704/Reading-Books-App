import { faBook, faBookmark, faClock, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const publicRoutes: {icon: any, path: string, name: string}[] = [
    {
        icon: faHome,
        path: './Home',
        name: 'Home Page'
    },
    {
        icon: faBook,
        path: './Book',
        name: 'Your Books'
    },
    {
        icon: faBookmark,
        path: './BookMark',
        name: 'Bookmarks'
    },
    {
        icon: faGear,
        path: './Settings',
        name: 'Setting'
    },
    {
        icon: faClock,
        path: './Time',
        name: 'Time'
    }
]