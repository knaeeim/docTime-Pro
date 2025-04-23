import { CgLogOff } from 'react-icons/cg';
import Bannar from '../Components/Bannar';
import Doctors from '../Components/Doctors';
import { useLoaderData } from 'react-router';
import Counting from '../Components/Counting';
import { useEffect, useRef, useState } from 'react';
import Loading from '../Components/Loading';

const Home = () => {
    const data = useLoaderData();
    const [doctors, setDoctors] = useState(data);
    const searchRef = useRef(null);
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

    const handleSearch = (e, searchText) => {
        e.preventDefault();
        if(!searchText){
            setDoctors(data);
            searchRef.current.scrollIntoView({ behavior: "smooth" });
            return;
        }
        const searchResult = data.filter(doctor => doctor.name.toLowerCase().includes(searchText.toLowerCase()));
        setDoctors(searchResult);
        searchRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
           <Bannar handleSearch={handleSearch} />
           <Doctors doctors={doctors} ref={searchRef}/>
           <Counting></Counting>
        </div>
    );
};

export default Home;