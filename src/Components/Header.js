import { useState , useContext} from "react";
import foodvilla from "../assets/imgs/foodvilla.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

       const Header = () => {
        const[isLogin,setIsLogin] = useState(false);

        const {user} = useContext(UserContext)        
    
        const isOnline = useOnline();
        return (
            <>
            <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-green-50 md:bg-blue-50">
            <div className="logo">
            <a><img className="h-28 p-2" src={foodvilla} alt="logo" /></a>
            </div>
            <div className="flex">
                <ul className="flex py-10  ">
                    <Link to="/"><li className="px-2">Home</li></Link>
                    <Link to="/about"><li className="px-2">About</li></Link>
                    <Link to="/contact"><li className="px-2">Contact</li></Link>
                    <Link to="/cart"><li className="px-2">Cart</li></Link>
                    <Link to="/instamart"><li className="px-2">Instamart</li></Link>
                </ul>
            </div>
            <span className="text-blue-300">{user.name}&{user.email}</span>
            <h1>{isOnline ? "🎶":"😂"}</h1>
            {(isLogin) ? ( 
            <button onClick={()=> {
                setIsLogin(false)
            }}>Log Out</button>): (
            <button onClick={()=> {
                setIsLogin(true)
            }}>Log IN</button>)}
            </div>
        </>
        );
    };

export default Header;
