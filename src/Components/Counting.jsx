import React from 'react';
import CountUp from 'react-countup';
import doctor from '../assets/success-doctor.png';
import patient from '../assets/success-patients.png';
import staff from '../assets/success-staffs.png';
import review from '../assets/success-review.png';

const Counting = () => {
    return (
        <div className='w-5/5 mx-auto rounded-2xl md:px-20 md:py-10 mt-10'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold'>We Provide Best Medical Services</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
                <div className='bg-white px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3'>
                    <img src={doctor} alt="" />
                    <span className='font-bold text-4xl'><CountUp start={0} end={199} duration={2.75} separator="" enableScrollSpy={true}/>+</span>
                    <h1>Total Doctors</h1>
                </div>

                <div className='bg-white px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3'>
                    <img src={review} alt="" />
                    <span className='font-bold text-4xl'><CountUp start={0} end={467} duration={2.75} separator="" enableScrollSpy={true}/>+</span>
                    <h1>Total Reviews</h1>
                </div>

                <div className='bg-white px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3'>
                    <img src={patient} alt="" />
                    <span className='font-bold text-4xl'><CountUp start={0} end={1900} duration={2.75} separator="" enableScrollSpy={true}/>+</span>
                    <h1>Total Patient</h1>
                </div>

                <div className='bg-white px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3'>
                    <img src={staff} alt="" />
                    <span className='font-bold text-4xl'><CountUp start={0} end={300} duration={2.75} separator="" enableScrollSpy={true}/>+</span>
                    <h1>Total Staffs</h1>
                </div>
            </div>
        </div>
    );
};

export default Counting;