import { useState,useEffect } from "react";

const useOnline = () => {
    const[isOnline,SetIsOnline] = useState(true);

    useEffect(()=> {

        const handleOnline = () => {
            SetIsOnline(true)
        }
        const handleOffline = () => {
            SetIsOnline(false)
        }

        window.addEventListener("Online",handleOnline);
        window.addEventListener("Offline",handleOffline);
        
        // clear EventListener
        return () => {
            window.removeEventListener("Online",handleOnline)
            window.removeEventListener("Offline",handleOffline);
        }
    },[]);
    return isOnline; //true or false;
}
export default useOnline;
