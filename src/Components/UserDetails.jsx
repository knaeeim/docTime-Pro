import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import { LuCircleAlert } from "react-icons/lu";
import { BookingContext } from '../Provider/context';
import toast from 'react-hot-toast';
import { getLocalStorage, setLoaclStorage } from '../utilities/addLoacl';
import { IoMdHappy } from "react-icons/io";

const UserDetails = () => {
    const doctor = useLoaderData();
    const { name, image, education, speciality, workingAt, registrationNumber, fees, available, designation} = doctor;
    const { booking, setBooking } = useContext(BookingContext);
    const navigate = useNavigate();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];

    const handleBooking = () => {
        const localData = getLocalStorage();
        const isExist = booking.find(booking => booking.id === doctor.id);
        const isExistLocal = localData.find(booking => booking.id === doctor.id);

        if(available.includes(currentDay) === false){
            return toast.error("Not Available Today", {
                style: {
                    fontSize: '18px',  
                    padding: '16px 24px',
                    borderRadius: '12px'
                }
            });
        }

        if(isExist || isExistLocal){
            return toast.error("Already Booked", {
                style: {
                    fontSize: '18px',  
                    padding: '16px 24px',
                    borderRadius: '12px'
                }
            });
        }
            
        setBooking(prev => [...prev, doctor]);
        setLoaclStorage(doctor);
        toast.success(`You have successfully Booked session of ${doctor.name} 😊`, {
            style: {
                fontSize: '18px',  
                padding: '16px 24px',
                borderRadius: '12px'
            }
        });
        navigate('/appointment');
    }

    
    return (
        <div className='space-y-5'>
            <div className='bg-white shadow-xl rounded-lg px-10 py-10 text-center space-y-5 md:w-4/5 mx-auto'>
                <h1 className='text-4xl font-bold'>Doctor’s Profile Details</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <div className='bg-white shadow-xl rounded-lg px-8 py-10 md:w-4/5 mx-auto flex flex-col md:flex-row justify-center items-center md:gap-20 gap-10'>
                <div className=''>
                    <img src={image} alt="" className='w-full h-80 rounded-xl'/>
                </div>
                <div className='space-y-5 md:w-3/5'>
                    <h1 className='text-4xl font-bold'>{name}</h1>
                    <div>
                        <p className='text-gray-500'>{education}</p>
                        <p className='text-gray-500'>{speciality}</p>
                        <p className='text-gray-500'>{designation}</p>
                    </div>
                    <p className='text-gray-500 text-xl'>Working at: <br /> <span className='font-bold text-black'>{workingAt}</span></p>
                    <p className='text-gray-500 border-b-2 border-t-2 border-dashed flex justify-start items-center py-3 gap-2'><PiTrademarkRegisteredBold size={25}/> Reg No:  {registrationNumber}</p>
                    <p className='flex flex-wrap items-center'> <span className='font-bold text-black'>Available :</span> {
                        available.map((day, index) => {
                            return (
                                <span key={index} className='btn btn-xs btn-outline bg-green-200 rounded-2xl m-1'>{day}</span>
                            )
                        })}

                    </p>
                    <p> <span className='text-black font-bold'>Cosultation Fee:</span> <span className='text-blue-800 font-bold'>{fees} BDT </span> <span className='text-gray-500'>(incl. VAT)</span> <span className='font-bold text-blue-800'>Per Consultation</span></p>
                </div>
            </div>
            <div className='bg-white shadow-xl rounded-lg px-10 py-10 text-center space-y-5 md:w-4/5 mx-auto'>
                <h1 className='text-2xl font-bold border-b-2 border-dashed border-gray-500 pb-4'>Book An Appointment</h1>
                <h1 className='flex justify-between border-b-2 border-dashed border-gray-500 pb-4'><span className='text-black font-bold'>Availability:</span> <span className={`btn btn-xs btn-outline ${available.includes(currentDay) ? "bg-green-400" : "bg-amber-400"} rounded-2xl`}>{available.includes(currentDay) ? "Available" : "Not Available"}</span> </h1>
                <div className='space-y-3'>
                    <p className='border-2 rounded-2xl py-1.5 text-xs w-4/5 mx-auto text-amber-400 flex justify-center items-center gap-3'><LuCircleAlert /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                    <button onClick={handleBooking} className='btn btn-primary w-full text-white'>Book Appointment Now</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;