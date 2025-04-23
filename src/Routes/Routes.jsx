import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Appointment from "../Pages/Appointment";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Loading from "../Components/Loading";
import UserDetails from "../Components/UserDetails";
import DoctorError from "../Pages/DoctorError";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage/>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true, 
                element: <Home />,
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('../doctors.json')
            }, 
            {
                path: 'user/:id',
                element: <UserDetails></UserDetails>,
                loader: async ({ params }) => {
                    return fetch('../doctors.json')
                    .then(res => res.json())
                    .then(data => {
                        const userDetails = data.find(user => user.id === parseInt(params.id));
                        return userDetails;
                    })

                }, 
                hydrateFallbackElement: <Loading></Loading>,
                errorElement: <DoctorError></DoctorError>
            },
            {
                path: '/appointment', 
                hydrateFallbackElement: <Loading></Loading>,
                element: <Appointment />,
            }, 
            {
                path: "/blogs", 
                loader: () => fetch('/question.json'),
                hydrateFallbackElement: <Loading></Loading>,
                element: <Blogs />,
            }
        ]
    }
])