import { useEffect, useState } from "react";
import axios from "axios";
// Update the import path if Card is located elsewhere, for example:
import Card from "@/components/common/Card"; // Using your Card component
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly"];

const Pill = ({ label }: { label: string }) => (
  <span className="px-3 py-1 rounded-full border text-sm text-gray-600 hover:bg-blue-100 cursor-pointer">
    {label}
  </span>
);

const IndexPage = () => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="bg-cover bg-center text-white py-32 px-4 text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3 justify-center p-4">
        {filters.map((f) => (
          <Pill key={f} label={f} />
        ))}
      </section>

      {/* Listings */}
      <section className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading && <p className="col-span-full text-center">Loading...</p>}
        {error && <p className="col-span-full text-center text-red-500">{error}</p>}
        {!loading && !error && properties.length === 0 && (
          <p className="col-span-full text-center">No properties available.</p>
        )}
        {properties.map((prop, idx) => (
          <Card
            key={idx}
            title={prop.title || prop.name || "Untitled"}
            description={prop.description}
            imageUrl={prop.imageUrl || prop.image || ""}
            price={prop.price}
            rating={prop.rating}
            location={prop.location || prop.address}
          />
        ))}
      </section>
    </div>
  );
};

export default IndexPage;
