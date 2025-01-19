import React from "react";

function ProductMenuPopUp() {
  return (
    <div>
      <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Product 1
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Product 2
        </a>
      </div>
    </div>
  );
}

export default ProductMenuPopUp;
