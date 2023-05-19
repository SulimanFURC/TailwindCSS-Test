import React from 'react';

export default function Input(props) {
  return (
    <input
      className="w-96 h-16 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
    />
  );
}
