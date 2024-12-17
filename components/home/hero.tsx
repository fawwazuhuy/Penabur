import React from 'react'
import Link from 'next/link'
import { BiExpandHorizontal } from "react-icons/bi"
import { list } from "@data/carausel"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Activity from "./components/Activity"
import Developer from "./components/Developer"


const hero = () => {
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
                    <div className='flex flex-row justify-between mt-10 h-[300px]'>
                        <div className='text-center justify-center flex mx-auto'>
                            <p className="font-bold text-lg mt-3">Activity</p>
                        </div>
                        <div className='w-3/4 h-[250px]'>
                            {/* <Slider {...settings}> */}
                            <Activity/>
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
                    <div className="flex flex-col gap-3 mb-32">
                        <p className="text-8xl font-bold">Top
                            <br />Developer Kami</p>
                        <p className="font-medium text-2xl mt-3">Lorem Ipsum has been the industry`s standard</p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Developer/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero


