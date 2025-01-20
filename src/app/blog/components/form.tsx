"use client";
import { getBlog, getUser } from '@lib/api';
import { useQuery } from "@tanstack/react-query";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useState } from 'react';

export default function form() {
  const { data: blog, isLoading: blogsLoading, error: blogsError } = useQuery({ queryKey: ["blogs"], queryFn: getBlog, refetchInterval: 5000, });
  const { data: user, isLoading: usersLoading, error: usersError } = useQuery({ queryKey: ["users"], queryFn: getUser, refetchInterval: 5000, });
  
  if (blogsLoading || usersLoading) return <div>Loading...</div>;
  if (blogsError || usersError) return <div>Error fetching data</div>;
  
  const blogs = blog.data; 
  const users = user.data; 

const blogdata = blogs.map(blog => {
    const user = users.find(user => user.id === blog.user_id);
    return {
      ...blog,
      user_name: user ? user.name : 'Unknown',
      user_email: user ? user.email : 'Unknown',
    };
  });
    
  return (
    <div className='grid grid-cols-3 gap-y-10'>
        {blogdata.map((blog,i) => (        
        <div key={blog.id || i} className="rounded-lg border bg-white shadow-md max-w-md">
            <div className="p-3 flex items-center space-x-3">
                <img src={blog.img || "SHIINAMAHIRU(2).jpeg"} alt="Profile Picture" className="w-10 h-10 rounded-full"/>
                <div>
                <p className="font-bold text-gray-900 text-sm">{blog.user_name}</p>
                <p className="text-xs text-gray-500">{blog.user_email}</p>
                </div>
            </div>
            <img src={blog.img || "img.jpg"} alt="Card Image" className="w-full h-64 object-cover"/>
            <div className="p-4">
                <h2 className="font-bold text-gray-800 text-lg mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                Write an amazing description in this dedicated card section. Each word counts.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Lihat Detail
                </button>
            </div>
        </div>
        ))}
    </div>
  )
}
