import React from 'react'

const form = () => {
  return (
    <div className='grid grid-cols-3 gap-y-10'>
        <div className="rounded-lg border bg-white shadow-md max-w-md">
            <div className="p-3 flex items-center space-x-3">
                <img src="https://via.placeholder.com/40" alt="Profile Picture" className="w-10 h-10 rounded-full"/>
                <div>
                <p className="font-bold text-gray-900 text-sm">Anjay Fawwaz</p>
                <p className="text-xs text-gray-500">3 Jam yang lalu</p>
                </div>
            </div>
            <img src="https://via.placeholder.com/600x400" alt="Card Image" className="w-full h-64 object-cover"/>
            <div className="p-4">
                <h2 className="font-bold text-gray-800 text-lg mb-2">Headline</h2>
                <p className="text-sm text-gray-600 mb-4">
                Write an amazing description in this dedicated card section. Each word counts.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Lihat Detail
                </button>
            </div>
        </div>
        <div className="rounded-lg border bg-white shadow-md max-w-md">
            <div className="p-3 flex items-center space-x-3">
                <img src="https://via.placeholder.com/40" alt="Profile Picture" className="w-10 h-10 rounded-full"/>
                <div>
                <p className="font-bold text-gray-900 text-sm">Anjay Fawwaz</p>
                <p className="text-xs text-gray-500">3 Jam yang lalu</p>
                </div>
            </div>
            <img src="https://via.placeholder.com/600x400" alt="Card Image" className="w-full h-64 object-cover"/>
            <div className="p-4">
                <h2 className="font-bold text-gray-800 text-lg mb-2">Headline</h2>
                <p className="text-sm text-gray-600 mb-4">
                Write an amazing description in this dedicated card section. Each word counts.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Lihat Detail
                </button>
            </div>
        </div>
        <div className="rounded-lg border bg-white shadow-md max-w-md">
            <div className="p-3 flex items-center space-x-3">
                <img src="https://via.placeholder.com/40" alt="Profile Picture" className="w-10 h-10 rounded-full"/>
                <div>
                <p className="font-bold text-gray-900 text-sm">Anjay Fawwaz</p>
                <p className="text-xs text-gray-500">3 Jam yang lalu</p>
                </div>
            </div>
            <img src="https://via.placeholder.com/600x400" alt="Card Image" className="w-full h-64 object-cover"/>
            <div className="p-4">
                <h2 className="font-bold text-gray-800 text-lg mb-2">Headline</h2>
                <p className="text-sm text-gray-600 mb-4">
                Write an amazing description in this dedicated card section. Each word counts.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Lihat Detail
                </button>
            </div>
        </div>
    </div>
  )
}

export default form
