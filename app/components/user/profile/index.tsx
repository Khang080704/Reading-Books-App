import { faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function User({name, avatar}: {name: string, avatar: string}) {
    return (
        <div className="flex items-center justify-end px-5">
            <img src={avatar} className="w-10"/>
            <span className="mr-5 text-[0.8rem]">{name}</span>
            <FontAwesomeIcon icon={faBell} className="text-10"/>
        </div>
    )
}

export default User