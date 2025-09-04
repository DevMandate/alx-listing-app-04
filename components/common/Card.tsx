import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  rating,
  location,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>

        {location && (
          <p className="text-sm text-gray-500">
            {location.city}, {location.country}
          </p>
        )}

        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}

        {rating !== undefined && (
          <div className="text-yellow-500 mt-1">⭐ {rating}</div>
        )}

        {price !== undefined && (
          <div className="mt-2 font-bold text-blue-600">${price}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
