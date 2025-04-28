import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Search() {
    return (
        <div className="flex items-center px-4 py-2 rounded-[50] justify-between focus-within:bg-amber-50 w-full">
            <input className="outline-none w-full placeholder:text-[0.8rem]" placeholder="Search book name, author, edition,..."/>
            <FontAwesomeIcon icon={faSearch} className="hover:cursor-pointer"/>
        </div>
    )
}

export default Search