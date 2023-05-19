import React from 'react';
import PopularDropdown from './PopularDropdown';
import PopularAccordian from './PopularAccordian';

export default function PopularMain() {
  return (
    <>
    <div className='container mx-auto mt-5 flex items-center justify-between'>
      <h3 className='text-black font-bold text-3xl'>Popular products</h3>
      <div className='flex items-center justify-between'>
      <PopularDropdown btnTxt='Categories'/>
      <PopularDropdown btnTxt='Servies'/>
      <PopularDropdown btnTxt='Budget'/>
      <PopularDropdown btnTxt='Rated'/>
      <PopularDropdown btnTxt='Industry'/>
      </div>
    </div>
    <div className='container mx-auto border mt-3 rounded-md mb-3 p-2'>
        <PopularAccordian />
        <PopularAccordian />
        <PopularAccordian />
        <PopularAccordian />
      </div>
      </>
  );
}
