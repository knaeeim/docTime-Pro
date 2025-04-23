import React, { useContext } from 'react';
import bannarImg from '../assets/banner-img-1.png'
import { SearchContext } from '../Provider/context';

const Bannar = ({handleSearch}) => {
    const {searchText, setSearchText} = useContext(SearchContext);

    return (
        <div className='bg-zinc-100 rounded-3xl md:py-10 py-5 md:px-10 px-5'>
            <div className='flex flex-col items-center md:w-4/6 w-full mx-auto space-y-5'>
                <h1 className='md:text-5xl text-3xl text-center font-bold'>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className='text-sm text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <form onSubmit={(e) => handleSearch(e, searchText)} className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>
                    <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} className='md:w-2/3 w-full px-4 py-2 border-2 border-gray-500 rounded-2xl focus:outline-none shadow-xl' placeholder='Search by Doctor Name'/>
                    <button className='btn btn-primary rounded-4xl'>Search Now</button>
                </form>

                <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                    <img src={bannarImg} className='w-full' alt="" />
                    <img src={bannarImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Bannar;