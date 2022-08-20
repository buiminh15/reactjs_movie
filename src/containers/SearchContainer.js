import React from "react";
import { toast } from "react-toastify";
function SearchContainer() {
  return (
    <div className="grid place-items-center h-screen">
      <button
        onClick={() => toast.warn("teast")}
        className="text-white px-8 py-4 bg-blue-500"
      >
        Toast
      </button>
    </div>
  );
}

export default SearchContainer;
