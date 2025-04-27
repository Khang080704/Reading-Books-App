import { faBook, faBookmark, faClock, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const publicRoutes: {icon: any, path: string, name: string}[] = [
    {
        icon: faHome,
        path: '/user/Home',
        name: 'Home Page'
    },
    {
        icon: faBook,
        path: '/user/Book',
        name: 'Your Books'
    },
    {
        icon: faBookmark,
        path: '/user/BookMark',
        name: 'Bookmarks'
    },
    {
        icon: faGear,
        path: '/user/Settings',
        name: 'Setting'
    },
    {
        icon: faClock,
        path: '/user/Time',
        name: 'Time'
    }
]