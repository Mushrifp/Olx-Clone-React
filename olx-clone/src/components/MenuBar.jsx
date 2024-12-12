import React from 'react'
import arrow from '../assets/arrow.png'

function MenuBar() {
  return (
    <div className="flex justify-between shadow-xl h-12 items-center px-4">
  <div className="flex items-center space-x-2 ml-9  hover:text-cyan-600 cursor-pointer">
    <p className="font-bold text-base">All CATEGORIES</p>
    <img className="w-5" src={arrow} alt="arrowImage" />
  </div>

  <div className="flex space-x-3 overflow-x-auto mr-4 ml-3">
    <p className="whitespace-nowrap hover:text-cyan-600 cursor-pointer">Cars</p>
    <p className="whitespace-nowrap hover:text-cyan-600 cursor-pointer">Motorcycles</p>
    <p className="whitespace-nowrap hover:text-cyan-600 cursor-pointer">Mobile Phones</p>
    <p className="whitespace-nowrap hover:text-cyan-600 cursor-pointer">For Sale: Houses & Apartments</p>
    <p className="whitespace-nowrap hover:text-cyan-600 cursor-pointer">Scooters</p>
    <p className="whitespace-nowrap hover:text-cyan-600 cursor-pointer">Commercial & Other Vehicles</p>
    <p className="whitespace-nowrap hover:text-cyan-600 cursor-pointer">For Rent: Houses & Apartments</p>
  </div>
</div>
 
  )
}

export default MenuBar