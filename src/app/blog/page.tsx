'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import React from 'react'
// import Link from 'next/link'
// import { list } from "@data/carausel"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Form from "./components/Form"

const Blog = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
    <section>
        <div className='w-full'>
                <div className='flex justify-center py-36 '>
                    <div className='flex flex-col text-center justify-center'>
                        <h1 className='text-8xl font-bold mb-16'>Eksplor cerita Kami</h1>
                        <p className='font-medium text-2xl'>Penabur Dev merupakan komunitas IT yang berdomisili di Kota Pochinki </p>
                    </div>
                </div>
        </div>
        <div className='p-24'>
            <div className="flex flex-col gap-3">
                <div className='flex justify-between'>
                    <p className="font-bold text-2xl mt-3">cerita Terbaru</p>
                </div>
                    <Form/>
            </div>
        </div>
    </section>
    </QueryClientProvider>
  )
}

export default Blog
