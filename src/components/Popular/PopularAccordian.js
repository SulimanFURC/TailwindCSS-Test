import {React, useState} from 'react';
import companyLogo from '../../assets/images/accordian_1.png'
import messageIcon from '../../assets/images/message.png';
import globeIcon from '../../assets/images/glob.png';
import buildingIcon from '../../assets/images/building.png';
import cheveronIcon from '../../assets/images/cheveron.png';

export default function PopularAccordian() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
   <div className='mb-3 bg-gray-700'>
    <div className='w-full bg-white text-black  text-left font-bold' onClick={toggle}>
        
        <div className='flex items-center bg-gray-100 justify-between py-2 px-4'>
        <div className='flex items-center gap-3'>
            <div><p>1</p></div>
            <div className='flex gap-3'>
            <div>
                <img src={companyLogo} alt='logo_img'/>
            </div>
                <div>
                    <span>Zendesk</span>
                    
                    <span className='text-semibold'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg></span>4.4</span>
                    <span className='text-sm underline text-gray-700 ml-2'>3.6k reviewes</span>
                </div>
            </div>


        </div>
        <div>
            <span>$1 - 49 / Month</span>
        </div>
        <div>
            <span>CRM, Customer Service & Sales</span>
        </div>
        <div className='flex'>
            <img src={messageIcon} style={{height: '20px', width: '20px' }} alt='Icon' />
            <img src={buildingIcon} style={{height: '20px', width: '20px' }} alt='Icon' />
            <img src={globeIcon} style={{height: '20px', width: '20px' }} alt='Icon' />
            <img src={cheveronIcon} style={{height: '20px', width: '20px' }} alt='Icon' />
        </div>
        </div>
    </div>
    {
        isOpen && (
            <div className='bg-gray-100 p-4 mt-2'>
                <p>The best customer experiences are built with Zendesk. Our customer service and engagement products are powerful and flexible, and scale to meet the needs of any business. Zendesk serves over 165,000 businesses across hundreds of industries and all company sizes, offering service and support in over 60 languages.</p>
            </div>
        )
    }
   </div>
  )
}
