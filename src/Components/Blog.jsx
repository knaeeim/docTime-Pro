import React from 'react';
import { RiQuestionAnswerLine } from "react-icons/ri";

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div className='bg-white shadow-md rounded-lg mb-10 px-10 py-10'>
            <div className='border-b-2 border-gray-500 border-dashed pb-5'>
                <h1 className='text-2xl font-bold flex gap-4 items-center'><RiQuestionAnswerLine />
                {question}</h1>
            </div>

            <div className='space-y-5 mt-5'>
                <p className='text-xl font-semibold'>{answer.definition}</p>
                <p className='text-xl font-semibold'>{answer?.purpose}</p>
                <p className='text-xl font-semibold'>{answer?.when_to_use}</p>
                <p className='text-xl font-semibold'>{answer?.controlled}</p>
                <p className='text-xl font-semibold'>{answer?.uncontrolled}</p>
                <p className='text-xl font-semibold'>{answer?.which_is_better}</p>
                <p className='text-xl font-semibold'>{answer?.how_it_works}</p>
                <p className='text-xl font-semibold'>{answer?.example}</p>
                <p className='text-xl font-semibold'>{answer?.note}</p>
            </div>
        </div>
    );
};

export default Blog;