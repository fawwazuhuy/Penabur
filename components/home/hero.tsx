import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiExpandHorizontal } from "react-icons/bi"
import { list } from "@data/carausel"
// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section>
            {/* section atas */}
            <div className='bg-gradient-to-b from-secondary rounded-lg w-full'>
                <div className='flex justify-center py-52 '>
                    <div className='flex flex-col text-center justify-center'>
                        <h1 className='text-8xl font-bold mb-20'>Tempat Berkumpul IT<br />Komunitas Penabur</h1>
                        <p className='font-medium text-2xl'>Penabur Dev merupakan komunitas IT yang berdomisili di Kota Pochinki </p>
                        <div className='flex gap-3 font-bold mt-20 justify-center'>
                            <Link href="#" className='rounded-3xl text-secondary bg-primary p-4 hover:drop-shadow-xl'>Lorem Ipsum</Link>
                            <Link href="#" className='rounded-3xl text-primary bg-white p-4 hover:drop-shadow-xl'>Lorem Ipsum</Link>
                        </div>
                        <div className='mt-52 w-full'>
                            <p className='font-medium text-xl' >Trusted By</p>
                            <div className='flex justify-between'>
                                <div className='p-1 bg-primary rounded-md aspect-square mt-5'>
                                    <BiExpandHorizontal
                                        size={125}
                                        className='p-3'
                                    />
                                </div>
                                <div className='p-1 bg-primary rounded-md aspect-square mt-5'>
                                    <BiExpandHorizontal
                                        size={125}
                                        className='p-3'
                                    />
                                </div>
                                <div className='p-1 bg-primary rounded-md aspect-square mt-5'>
                                    <BiExpandHorizontal
                                        size={125}
                                        className='p-3'
                                    />
                                </div>
                                <div className='p-1 bg-primary rounded-md aspect-square mt-5'>
                                    <BiExpandHorizontal
                                        size={125}
                                        className='p-3'
                                    />
                                </div>
                                <div className='p-1 bg-primary rounded-md aspect-square mt-5'>
                                    <BiExpandHorizontal
                                        size={125}
                                        className='p-3'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section isi */}
            <div className='p-24'>
                <div className="flex flex-col gap-3">
                    <p className="text-8xl font-bold">Eksplorasi
                        <br />Kegiatan Kami</p>
                    <div className='flex justify-between'>
                        <p className="font-medium text-2xl mt-3">Lorem Ipsum has been the industry`s standard</p>
                        <Link href="#" className='rounded-md text-secondary bg-primary p-4 hover:drop-shadow-xl'>Explore More</Link>
                    </div>
                    <div className='flex flex-row justify-between mt-10'>
                        <div className='text-center justify-center flex mx-auto'>
                            <p className="font-bold text-lg mt-3">Activity</p>
                        </div>
                        <div className='w-3/4'>
                            {/* <Slider {...settings}> */}
                            <div className='flex gap-5'>
                                {list.map((el, i) => (
                                    <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow">
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
                            </div>
                            {/* </Slider> */}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-3 mt-52 text-center">
                        <p className="text-8xl font-bold">Alur Kegiatan Kami</p>
                        <p className="font-medium text-2xl mt-3">Lorem Ipsum has been the industry`s standard</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-20 p-5'>
                        <div className='p-20 flex flex-col'>
                            <div className='rounded-xl bg-black p-5'>
                                <img src="#" alt="email" />
                                <p className='font-bold  text-2xl text-white'>Constructive and Destructive waves</p>
                                <p className='text-lg text-white'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </div>
                            <div className='rounded-xl bg-slate-100 p-5'>
                                <p className='text-2xl'>+ <br />Constructive and Destructive waves</p>
                            </div>
                            <div className='rounded-xl bg-slate-100 p-5'>
                                <p className='text-2xl'>+ <br />Constructive and Destructive waves</p>
                            </div>
                            <div className='rounded-xl bg-slate-100 p-5'>
                                <p className='text-2xl'>+ <br />Constructive and Destructive waves</p>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <img src="shiina.jpg" alt="Image" className="w-full h-90% object-cover rounded-xl aspect-square" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-2 rounded-b-xl">
                                <div className='flex gap-4'>
                                    <div className='flex justify-center items-center align-center p-5'>
                                        <img src="shiina.jpeg" alt="" className='rounded-full max-w-12 object-cover aspect-square' />
                                    </div>
                                    <div>
                                        <p>Jonathan liandi</p>
                                        <p className='text-2xl'>Constructive and Destructive waves</p>
                                        <p className='text-white/50'>100 years ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-24 mt-32'>
                    <div className="flex flex-col gap-3">
                        <p className="text-8xl font-bold">Top
                            <br />Developer Kami</p>
                        <p className="font-medium text-2xl mt-3">Lorem Ipsum has been the industry`s standard</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero
