import { PropertyProps } from "@/interfaces";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyDetail({ property }: { property: PropertyProps }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero image */}
      <img
        src={property.imageUrl || property.image}
        alt={property.title || property.name}
        className="w-full h-80 object-cover rounded-lg shadow-md"
      />

      {/* Basic info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">
          {property.title || property.name}
        </h1>
        <p className="text-gray-600">
          {property.location?.city || property.address?.city},{" "}
          {property.location?.country || property.address?.country}
        </p>

        {property.rating !== undefined && (
          <p className="mt-2 text-yellow-500">⭐ {property.rating}</p>
        )}

        {property.price !== undefined && (
          <p className="mt-2 text-blue-600 font-bold">
            ${property.price}/night
          </p>
        )}
      </div>

      {/* Offers section */}
      {property.offers && (
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="border rounded p-3 text-center">
            🛏️ {property.offers.bed} Beds
          </div>
          <div className="border rounded p-3 text-center">
            🚿 {property.offers.shower} Showers
          </div>
          <div className="border rounded p-3 text-center">
            👥 {property.offers.occupants} Occupants
          </div>
        </div>
      )}

      {/* Discount */}
      {property.discount && (
        <div className="mt-4 text-green-600 font-semibold">
          Special Offer: {property.discount}
        </div>
      )}

      {/* Reviews */}
      <div className="mt-10">
        <ReviewSection propertyId={property.id !== undefined ? String(property.id) : ""} />
      </div>
    </div>
  );
}
