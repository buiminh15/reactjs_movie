import React from 'react';
import { toast } from 'react-toastify';
function SearchContainer() {
  return (
    <div className="grid h-screen place-items-center">
      <button onClick={() => toast.warn('teast')} className="bg-blue-500 px-8 py-4 text-white">
        Toast
      </button>
    </div>
  );
}

export default SearchContainer;
