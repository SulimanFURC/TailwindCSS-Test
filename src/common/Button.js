import React from 'react';
import '../App.css';

export default function Button({ btntxt }) {
  return (
    <button className="btn-lightgreen px-3 py-2 rounded-lg font-semibold absolute top-3 right-3">
      {btntxt}
    </button>
  );
}
