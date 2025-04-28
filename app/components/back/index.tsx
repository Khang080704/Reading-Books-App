import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

function BackButton() {
    const route = useRouter()

    return (
        <button className="rounded-[50] px-4 py-3 border border-black hover:cursor-pointer hover:bg-gray-300" onClick={() => route.back()}>
            <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
    )
}
export default BackButton