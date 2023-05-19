import React from 'react';
import HeroImg from '../../assets/images/logo.png';
import './header.css';

export default function Header() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img src={HeroImg} alt="Image" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4 h-16">
                <a
                  href="#"
                  className="text-black-300 hover:text-black-500 px-3 py-2 "
                >
                  Software Categories
                </a>
                <a
                  href="#"
                  className="text-black-300 hover:text-black-500 px-3 py-2 "
                >
                  Updates
                </a>
                <a
                  href="#"
                  className="text-black-300 hover:text-black-500 px-3 py-2 "
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-black-300 hover:text-black-500 px-3 py-2 "
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 h-16">
              <button className="font-semibold">login</button>
              <button className="btn-lightgreen px-3 py-2 rounded-lg font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
