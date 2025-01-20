'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { list } from "@data/carausel"
import { getEvent } from "@lib/api"
import { useQuery } from "@tanstack/react-query";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Activity = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"], 
    queryFn: getEvent, 
    refetchInterval: 5000, 
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  const list = data.data; 
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3.75}
      // navigation = {true}
      pagination = {{clickable : true}}
      scrollbar = {{draggable : true}}
      className= 'w-[80%] h-[100%]'
      loop = {true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides = {true}
      
    >
      {list.map((el, i) => (
      <SwiperSlide key={el.id || i} className='max-w-xl bg-white border border-gray-200 rounded-lg shadow'>
        <a href="#">
              <img className="rounded-t-lg object-cover object-top w-full max-h-32" src={el.img || "img.jpg"} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">{el.event}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">{el.address}</p>
            </div>
      </SwiperSlide>
      ))}

      {/* <div className='flex gap-5'>
        {list.map((el, i) => (
          <div key={el.id || i} className="max-w-xl bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg object-cover w-full max-h-32" src={el.img} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{el.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">{el.desc}</p>
            </div>
          </div>
        ))}
      </div> */}
    </Swiper>
  )
}

export default Activity
