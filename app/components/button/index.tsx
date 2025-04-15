import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Button({content}: {content: string}) {
    return (
        <button className="bg-black text-white rounded-[50] min-w-[200px] min-h-[50px] hover:cursor-pointer
        max-md:min-w-[150px] max-md:text-[0.8rem]">
            {content}
            <FontAwesomeIcon icon={faArrowUp} className="ml-4"/>
        </button>
    )
}
export default Button