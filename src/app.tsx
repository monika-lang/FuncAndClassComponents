import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import HomePage from "./pages/home.js";
import ProfilePage from "./pages/profile.js";
import RootLayout from "./root_layout.js";
import React from "react";
import TestPage from "./pages/test.js";
import ClickerPage from "./pages/clicker.js";
import TimerPage from "./pages/timer.js";
import LocalStoragePage from "./pages/localStorage.js";
import FocusFieldPage from "./pages/focusOnField.js";
import AutoImageSlider from "./pages/ImageSlider.js";


const NotFoundPage = ()=><div>
    <h1 className="text-7xl text-red-950 uppercase font-bold">404 Not Found. </h1>
    <Link to='/'>Go gome</Link>
</div>

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'profile/:id',
                element: <ProfilePage/>
            },
            {
                path: 'profile',
                element: <ProfilePage/>
            },
            {
                path: 'test',
                element: <TestPage/>
            },
            {
                path: "clicker",
                element: <ClickerPage/>
            },
            {
                path: "timer",
                element: <TimerPage/>
            },
            {
                path: "local-storage",
                element: <LocalStoragePage/>
            },
            {
                path: "focus-field",
                element: <FocusFieldPage/>
            },
            {
                path: "auto-image-slider",
                element: <AutoImageSlider/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

const App:React.FC = ()=>{
    return <RouterProvider router={router}/>
}
export default App;