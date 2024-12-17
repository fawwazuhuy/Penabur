'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { list } from "@data/carausel"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Developer = () => {
  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={4}
        // navigation = {true}
        pagination = {{clickable : true}}
        scrollbar = {{draggable : true}}
        className= 'w-[90%] h-[100%]'
        loop = {true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides = {true}
    >
    {list.map((el, i) => (
    <SwiperSlide key={el.id || i} className="w-[300] bg-white border rounded-lg shadow">
        <div className="h-64 bg-gray-300 rounded-t-lg">
            <img className="rounded-t-lg object-cover object-top w-full max-h-64" src={el.img} alt="" />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-bold">Nama Pengguna</h3>
            <p className="text-gray-600 text-sm mb-2">SubJudul</p>
            <p className="text-gray-500 text-sm mb-4">Lorem Ipsum Hitam Dolor Sit Amet Alhamdulillah</p>
            <p className="text-sm font-semibold mb-2">Title</p>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2 py-1">UI/UX</span>
                <span className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2 py-1">FullStack</span>
                <span className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2 py-1">Cloud</span>
                <span className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2 py-1">Lorem</span>
            </div>   
            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 rounded">
                Ini Tombol
            </button>
        </div>
    </SwiperSlide>
    ))}


    {/* <div className="w-[300] bg-white border rounded-lg shadow">
        <div className="h-64 bg-gray-300 rounded-t-lg">
            <img className="rounded-t-lg object-cover object-top w-full max-h-64" src="./SHIINAMAHIRU(1).Jpeg" alt="" />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-bold">Headline</h3>
            <p className="text-gray-600 text-sm mb-2">Subhead</p>
            <p className="text-gray-500 text-sm mb-4">Please add your content here. Keep it short and simple. And smile :)</p>
            <p className="text-sm font-semibold mb-2">Title</p>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2 py-1">Tag 1</span>
                <span className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2 py-1">Tag 2</span>
                <span className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2 py-1">Tag 3</span>
                <span className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2 py-1">Tag 4</span>
            </div>   
            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 rounded">
                Primary Button
            </button>
        </div>
    </div> */}

    </Swiper>
  )
}

export default Developer
