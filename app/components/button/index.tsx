import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({
    comp,
    href = '',
    content,
    icon,
    onClick,
    primary = false,
    width,
}: {
    comp: any;
    href?: string;
    content: string;
    icon?: any;
    onClick?: any;
    primary?: boolean,
    width?: string
}) {
    let Comp = comp;

    let props: any = {
        onClick,
    };

    if (href) {
        props.href = href;
    }

    return (
        <Comp
            className={`text-white rounded-[50] min-w-[200px] min-h-[50px] hover:cursor-pointer
        max-md:min-w-[150px] max-md:text-[0.8rem] mr-2 ${primary ? 'bg-black': 'bg-white hover:bg-gray-300'}
        flex justify-center items-center w-[${width}]`}
            {...props}
            
        >
            
            <p className={`${primary ? 'text-white' : 'text-black'}`}>{content}</p>
            {icon ? <FontAwesomeIcon icon={icon} className="ml-4" /> : <></>}
        </Comp>
    );
}
export default Button;
