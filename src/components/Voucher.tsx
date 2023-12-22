import React from "react";
import voucherImage from "../assets/images/voucher.jpeg";

interface CardProps {
  imageUrl: string;
  name: string;
}

const Voucher: React.FC<CardProps> = ({ imageUrl, name }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-[200px] object-contain"
        src={voucherImage}
        alt={name}
      />
      <hr className="border-t border-gray-300 my-1 w-full" />
      <div className="text-center">
        <span className="text-gray-500">{name}</span>
      </div>
      <hr className="border-t border-gray-300 my-1 w-full" />
      <div className="px-6 py-4">
        <button className="text-gray-500 w-[150px] border border-gray-500">
          CANJEAR
        </button>
        <button className="text-white bg-gray-600 w-[150px]">
          7.500 PUNTOS
        </button>
      </div>
      <div className="px-6 py-4">
        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Me gusta Facebook
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Twitter
        </button>
      </div>
    </div>
  );
};

export default Voucher;
