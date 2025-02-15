import Inquiry from "./components/Inquiry";
import Pricing from "./components/Pricing";
import PropertyShowcase from "./components/PropertyShowcase";

const PropertyDetails = () => {
  return (
    <section className="bg-[#141414] text-white pt-10 pb-6">
      <section className="container mx-auto px-4">
        <PropertyShowcase />
        <Inquiry />
        <Pricing />
      </section>
    </section>
  );
};

export default PropertyDetails;
