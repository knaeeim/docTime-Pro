import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import { useLoaderData } from 'react-router';
import Blog from '../Components/Blog';

const Blogs = () => {
    const [loading, setLoading] = useState(true);
    const data = useLoaderData();

    useEffect(()=> {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div>
            <div>
                {
                    data.questions_and_answers.map((blog, index) => {
                        return <Blog key={index} blog={blog}></Blog>
                    })
                }
            </div>
        </div>
    );
};

export default Blogs;