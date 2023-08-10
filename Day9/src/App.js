import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import HeaderComponent from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantDetails from './components/RestaurantDetails';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
// import Instamart from './components/Instamart';

const Instamart = lazy(()=> import('./components/Instamart'));
const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            {/* <Body /> */}
            {/*Outlet*/}
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:<About />,
                children:[
                    {
                        path:'profile',
                        element:<Profile />
                    }
                ]
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantDetails />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/instamart',
                element:<Suspense fallback={<h1>Loading...</h1>}> <Instamart /> </Suspense>
            }
        ]

    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);