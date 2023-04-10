import { createContext } from "react";

const UserContext = createContext({
    user:{
        name : "Vrutik Surti",
        email : "surtivrutik18@gmail.com",
    }
})

export default UserContext;