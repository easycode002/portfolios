import React, { ReactNode } from "react";

// Update the interface to accept ReactNode for image
interface ICard {
  image: string | ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<ICard> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col w-[200px] h-[130px] justify-center items-center space-y-2 border-[1px] border-gray-900 rounded-2xls shadow-xl hover:border-1 hover:border-blue-600 hover:duration-150">
      {/* Icon card */}
      <div className="flex justify-center items-center">{image}</div>
      {/* Title card */}
      <h2 className="text-title font-ubuntubold">{title}</h2>
      <p className="text-subtitle font-ubunturegular">{description}</p>
    </div>
  );
};

export default Card;
