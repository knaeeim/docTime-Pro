import React, { useContext, useEffect, useState } from 'react';
import { BookingContext } from '../Provider/context';
import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import Loading from '../Components/Loading';
import { getLocalStorage, removeLocalStorage } from '../utilities/addLoacl';

const Appointment = () => {
    const { booking, setBooking } = useContext(BookingContext);

    const getFromLocalStorage = getLocalStorage();
    console.log(getFromLocalStorage);

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

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
      
    const TriangleBar = (props) => {
        const {
          fill, x, y, width, height,
        } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const handleCancelAppointment = (id, name) => {
        const updatingBooking = booking.filter(booking => booking.id !== id)
        setBooking(updatingBooking);
        removeLocalStorage(id);
        toast.error(`Appointment Cancelled of ${name}`, {
            style: {
              fontSize: '18px',  
              padding: '16px 24px',
              borderRadius: '12px'
            }
        })
    }
    return (
        <div>

            {
                getFromLocalStorage.length > 0 ? (
                    <div>
                        <div className='w-5/6 mx-auto mb-16 bg-white md:py-10 md:px-8 rounded-2xl'>
                            <ResponsiveContainer width={'100%'} height={500}>
                                <BarChart width={1400} height={500} data={getFromLocalStorage} margin={{ top: 40, right: 30, left: 20, bottom: 5 }}>
                                    <XAxis dataKey="name"/>
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="fees" fill="#8884d8"
                                    shape={<TriangleBar/>}>
                                        <LabelList value="fees" offset={0} position="top" />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className='text-center space-y-4 mb-10'>
                            <h1 className='md:text-4xl text-2xl text-center'>My Today's Appointments...</h1>
                            <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                        </div>

                        {
                            getFromLocalStorage.map((doctor, index) => {
                                return (
                                    <div className='w-5/6 mx-auto bg-white shadow-xl rounded-lg px-8 py-8 mb-5'>
                                        <div key={index} className='flex flex-col md:flex-row justify-between items-center'>
                                            <div>
                                                <h1 className='text-2xl font-bold'>{doctor.name}</h1>
                                                <h1 className='text-lg text-gray-500'>{doctor.education}</h1>
                                            </div>

                                            <div>
                                                <h1 className='text-gray-400 font-bold md:text-lg text-xs'>Appointment Fee: {doctor.fees} + VAT</h1>
                                            </div>
                                        </div>
                                        <div className='border-t-2 border-dashed border-gray-400 my-5 pt-6'>
                                            <button onClick={() => handleCancelAppointment(doctor.id, doctor.name)} className='btn btn-outline btn-warning w-full'>Cancel Appointment</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (<div className='flex flex-col justify-center items-center h-[calc(100vh-560px)] space-y-6'>
                        <h1 className='md:text-3xl text-xl text-center'>No Appointment Booked Yet</h1>
                        <Link to='/'><button className='btn btn-primary text-center text-xl font-bold'>Please Book an Appointment</button></Link>
                </div>)
            }
        </div>
    );
};

export default Appointment;