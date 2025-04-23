import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-screen-2xl mx-auto px-5 md:px-12 py-10 bg-zinc-200'>
                <ScrollToTop />
                <Outlet /> 
            </div>
            <Footer />
        </div>
    );
};

export default Root;