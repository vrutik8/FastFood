import React, { useState } from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
// import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./Components/Instamart";
import {Provider} from "react-redux"
import store from "./utils/store";


const Instamart = lazy(() => import("./Components/Instamart"))

const About = lazy(()=> import("./Components/About"))

const AppLayout = () => {
    const[user,setUser] = useState({
        name:"vrutik real ",
        email:"supportvrutiksoftwareengineer@gmail.com"
    })

    return(
        <>
        <div className="container">
        <Provider store={store}>
    <UserContext.Provider value={{
        user: user,
        setUser : setUser,
    }}>
        <Header/>   
    <Outlet/>
    <Footer/>
    </UserContext.Provider>
    </Provider>
    </div>
    </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:
                (<Suspense fallback={<h1>Loading.....</h1>}>
                <About/>
                </Suspense>),
                children:[{
                    path:"profile",
                    element:<profile/>,
                }]
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:iid",
                element:<RestaurantMenu/>,
            },
            {
                path:"/instamart",
                element:
                (<Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                    </Suspense>),
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);  