import React, { useEffect, useState } from 'react';
import { Link, useRouteError } from 'react-router';
import { MdOutlineError } from "react-icons/md";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const ErrorPage = () => {
    const error = useRouteError();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [])

    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-200px)] flex items-center justify-center flex-col space-y-6'>
                <MdOutlineError size={40}/>
                <h1 className='md:text-4xl text-xl font-bold'>{error.data}</h1>
                <h1 className='text-2xl font-bold'>{error.status}</h1>
                <div>
                    <Link to='/'><button className='btn btn-primary'>Go Back to HomePage</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;