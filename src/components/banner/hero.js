import React from 'react';
import bg from '../../assets/images/BG.png';
import Input from '../../common/input';
import Button from '../../common/Button';
import searchIcon from '../../assets/images/Icon.png';

export default function Hero() {
  return (
    <div className="container heroBG mx-auto bg-center bg-no-repeat mt-10 h-452 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black-500 w-30 text-white">
          Where leading company <br /> find the the best software
        </h1>
        <div className="mt-10 flex items-center justify-center">
          <label class="relative block w-96">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src={searchIcon} />
            </span>
            <Input
              type="text"
              placeholder="Enter product, categories, service name"
              name="search"
            />
            <Button btntxt="Search" />
          </label>
        </div>
      </div>
    </div>
  );
}
