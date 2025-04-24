import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Loading from '../Components/Loading';

const DoctorError = () => {
    const doctor = useParams();
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
        <div className='flex flex-col justify-center items-center h-[calc(100vh-550px)] space-y-5'>
            <div className='space-y-5'>
                <h1 className='text-4xl font-bold'>You have entered an Invalid Id: {doctor.id}</h1>
                <p className='text-2xl font-bold text-center'>Please check the URL</p>
            </div>
            <div className='flex justify-center items-center flex-col space-y-5'>
                <Link to='/'><button className='btn btn-primary'>Visit Our all Doctors</button></Link>
            </div>
        </div>
    );
};

export default DoctorError;