import toast from "react-hot-toast";

export const getLocalStorage = () => {
    const doctors = localStorage.getItem('doctors');
    if(doctors){
        return JSON.parse(doctors);
    }
    return [];
}

export const setLoaclStorage = (doctors) => {
    const prev = getLocalStorage();
    const isExits = prev.find(doctor => doctor.id === doctors.id)
    if(isExits){
        return toast.error("Already Booked");
    }
    const newDoctors = [...prev, doctors];
    localStorage.setItem('doctors', JSON.stringify(newDoctors));
}

export const removeLocalStorage = (id) => {
    const doctors = getLocalStorage();
    const remainingDoctors = doctors.filter(doctor => doctor.id !== id);
    localStorage.setItem('doctors', JSON.stringify(remainingDoctors)); 
}
