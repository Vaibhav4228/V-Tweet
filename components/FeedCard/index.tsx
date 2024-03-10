import React from 'react';
import Image from "next/image";
import { BiMessageRounded, BiUpload } from 'react-icons/bi';

import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const FeedCard: React.FC = () => {
  return (
    <div className='border border-r-0 border-l-0 border-b-0 border-gray-800 p-5 hover:bg-slate-900 transition-all   cursor-pointer'>
      <div className='grid grid-cols-12 gap-3.5'>
        <div className='col-span-1'>
        <Image 
        src= " https://avatars.githubusercontent.com/u/113096978?v=4"
        alt = "user-Image"
        height = {50} width = {50}
        />
       </div>
        <div className='col-span-10'> 
         <h5>vaibhav sharma</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas voluptatem eveniet doloribus </p>
          <div className='flex justify-between mt-5 text-xl items-center pr-10 w-[80%]'>
            <div> < BiMessageRounded/> </div>
            <div> <FaRetweet/> </div>
            <div> < AiOutlineHeart /> </div>
            <div> < BiUpload/> </div>

          </div>
         </div>
      </div>
    </div>
  );
};

export default FeedCard;
