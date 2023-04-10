import UserContext from "../utils/UserContext";
import {useContext} from "react"


const Footer = () => {

    const{user} = useContext(UserContext);

    return(
        <div>
            <h1 className="m-10 text-black">This site is developed by {user.name} & {user.email}</h1>
        </div>
    )
}
export default Footer;