"use client";
import { getEvent } from '@lib/api';
import { useQuery } from "@tanstack/react-query";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useState } from 'react';

export default function EventDetails() {
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

  const events = data.data; 

  return (
    // <QueryClientProvider client={queryClient}>
    <div className='grid grid-cols-3 gap-5 gap-y-10'>
          {events.map((event,i) => (            
            <div key={event.id || i} className="bg-white border rounded-lg shadow">
              <div className="h-64 bg-gray-300 rounded-t-lg">
                  <img className="rounded-t-lg object-cover object-top w-full max-h-64" src="./SHIINAMAHIRU(1).Jpeg" alt="" />
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-bold">{event.event}</h3>
                  <p className="text-gray-600 text-sm mb-2">{event.price}</p>
                  <p className="text-gray-500 text-sm mb-4">{event.address}</p>
                    
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 rounded">
                      Cek Lebih Lanjut
                  </button>
              </div>
            </div>
          ))}
    </div>
    // </QueryClientProvider>
  );
}
