import React from 'react'
import { prog } from "@data/program"

const form = () => {
  return (
    <div className='flex grid grid-cols-3 gap-10 gap-y-20'>
    {prog.map((prog, i) => (
    <div key={prog.id || i} className="bg-gray-200 rounded-lg overflow-hidden flex w-full">
      {/* Bagian kiri dengan teks */}
      <div className="flex flex-col p-6 w-1/2 py-12">
        <h2 className="text-8xl font-bold mb-2">{prog.title}</h2>
        <p className="text-gray-700 text-2xl mb-4">{prog.desc}</p>
        <button className="bg-green-500 text-white px-4 py-2 mt-auto rounded">Cek Program</button>
      </div>

      {/* Bagian kanan dengan gambar */}
      <div className="w-1/2 ">
        <img
          src="./oranghitam.png"
          alt="Card Image"
          width={300}
          height={400}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
    ))}
    </div> 
  )
}

export default form
