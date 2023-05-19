import React from 'react';
import { useState } from 'react';
import { ChevronDownIcon} from '@heroicons/react';
export default function PopularDropdown(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  return (
   <div className='relative'>
    <button className='bg-gray-200 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-lg ml-4 flex items-center'
    onClick={toggleDropdown}>
      {props.btnTxt}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
    {
      isOpen && (
        <div className='absolute mt-2 w-48 rounded-md bg-white shadow-lg '>
          <ul className='py-1'>
            <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
              Option 1
            </li>
            <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
              Option 2
            </li>
            <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
              Option 3
            </li>
          </ul>
        </div>
      )
    }
   </div>
  );
}
