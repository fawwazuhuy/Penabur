"use client";
import { getEvent } from '@lib/api';
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useState } from 'react';

export default function EventDetails() {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term



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

  const events = data?.data || [];

  const filteredData = events.filter((event: {id: number; img: string; event: string; address: string; price: string}) =>
    `${event.event ?? ""} ${event.price ?? ""} ${event.address ?? ""}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (

    <div>
      <div style={{ maxWidth: "400px", margin: "0 auto 2rem", textAlign: "center" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          placeholder="Search by name, price, or address"
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
            color: "#333",
            boxShadow: "inset 0px 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <div className='grid grid-cols-3 gap-5 gap-y-10'>
        {filteredData.map((event: {id: number; img: string; event: string; address: string; price: string}, i: number) => (
          <div key={event.id || i} className="bg-white border rounded-lg shadow">
            <div className="h-64 bg-gray-300 rounded-t-lg">
              <img className="rounded-t-lg object-cover object-top w-full max-h-64" src={event.img || "image.png"} alt="" />
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
    </div>
  );
}
