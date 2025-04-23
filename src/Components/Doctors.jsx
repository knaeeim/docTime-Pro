import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import DoctorCard from "./DoctorCard";
import NoDoctorFound from "./NoDoctorFound";

const Doctors = forwardRef(({ doctors }, searchRef) => {
    const [displayDoctors, setDisplayDoctors] = useState(doctors.slice(0, 6));
    const [showAll, setShowAll] = useState(false);
    const [hasUserInteracted, setUserInteracted] = useState(false);
    const bottomRef = useRef(null);
    const topRef = useRef(null);
    const initialRender = useRef(true);


    useEffect(()=> {
        if(showAll){
            setDisplayDoctors(doctors);
        }
        else{
            setDisplayDoctors(doctors.slice(0, 6));
        }
    }, [showAll, doctors]);

    useLayoutEffect(()=> {

        if(initialRender.current){
            initialRender.current = false;
            return;
        }

        if(hasUserInteracted){
            if(showAll && bottomRef.current){
                bottomRef.current.scrollIntoView({ behavior: "smooth" });
                setTimeout(()=> {
                    window.scrollBy(0, -400);
                }, 600)
            }
            if(!showAll && topRef.current) {
                topRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }

    }, [displayDoctors, showAll, hasUserInteracted])

    const handleToggole = () => {
        setShowAll(prev => !prev)
        setUserInteracted(true);
    }

    return (
        <div className="md:py-10 md:px-20 py-6" ref={(el) => {searchRef.current = el, topRef.current = el}} >
            <div className="text-center mb-10 space-y-4">
                <h1 className="md:text-4xl text-3xl font-bold text-center">Our Best Doctors</h1>
                <p className="text-gray-500 w-3/4 mx-auto text-xs md:text-xl">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            <div>
                {
                    displayDoctors.length > 0 ? <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {displayDoctors?.map((doctor) => (
                                <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
                            ))}
                        </div>
                        <div className="flex items-center justify-center" ref={bottomRef}>
                            <button onClick={handleToggole} className="btn btn-primary rounded-4xl mt-10">{showAll ? "See Less Doctors" : "See All Doctors"}</button>
                        </div>
                    </> : 
                    <>
                        <NoDoctorFound />
                    </>
                }
            </div>
        </div>
    );
});

export default Doctors;
