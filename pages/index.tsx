import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly"];

const Pill = ({ label }: { label: string }) => (
  <span className="px-3 py-1 rounded-full border text-sm text-gray-600 hover:bg-blue-100 cursor-pointer">
    {label}
  </span>
);

const IndexPage = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="bg-cover bg-center text-white py-32 px-4 text-center"
        style={{
          backgroundImage: "url('/hero.jpg')", // Ensure image is in public folder
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3 justify-center p-4">
        {filters.map((f) => (
          <Pill key={f} label={f} />
        ))}
      </section>

      {/* Listings */}
      <section className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {PROPERTYLISTINGSAMPLE.map((prop, idx) => (
          <div key={idx} className="border rounded-xl overflow-hidden shadow-sm">
            <img
              src={prop.image}
              alt={prop.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{prop.name}</h2>
              <p className="text-sm text-gray-500">{prop.address.city}, {prop.address.country}</p>
              <div className="text-yellow-500">⭐ {prop.rating}</div>
              <div className="mt-2 font-bold text-blue-600">${prop.price}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default IndexPage;
