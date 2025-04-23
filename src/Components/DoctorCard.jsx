import React from "react";
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import { Link } from "react-router";

const DoctorCard = ({ doctor }) => {
  const { name, image, education, experience, registrationNumber, available } = doctor;
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl rounded-3xl p-4">
        <figure className="overflow-hidden rounded-2xl">
          <img
            className="w-full h-80 object-cover object-top"
            src={image}
            alt="doctor"
          />
        </figure>
        <div className="pt-4 space-y-3">
            <div className="flex gap-2">
                <p className={`btn btn-xs btn-outline ${available.includes(currentDay) ? "bg-green-200" : "bg-amber-400"} rounded-2xl`}>{available.includes(currentDay) ? "Available" : "Not Available"}</p>
                <p className="btn btn-xs btn-outline bg-blue-300 rounded-2xl">{experience} of Experience</p>
            </div>
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="font-medium text-gray-500">{education}</p>
            <p className="font-medium border-t-2 border-dashed border-gray-400 flex items-center gap-2 pt-3">
                <PiTrademarkRegisteredBold size={25}/> {registrationNumber}
            </p>
          <div className="w-full">
            <Link to={`user/${doctor.id}`}><button className="btn btn-primary btn-outline rounded-2xl w-full">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
