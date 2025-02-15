import { useState } from "react";
import { Building2, Calendar, MapPin, Package, Search } from "lucide-react";
import Dropdown from "../../../components/Dropdown";

const SearchProperties = () => {
  const [propertiesList, setPropertiesList] = useState("");

  return (
    <section className="grid grid-cols-12 px-5 lg:px-0">
      <section className="col-start-1 col-end-13 lg:col-start-2 lg:col-end-12">
        <section className="flex justify-start items-stretch flex-col gap-4">
          <div className="shadow-lg shadow-[#262626] bg-[#141414] flex justify-start items-center relative h-16 py-2 -mt-5 w-full max-w-[850px] mx-auto rounded-lg">
            <input
              type="text"
              name="properties"
              placeholder="Search For A Property"
              className="grow px-4 h-full outline-none text-white/90 placeholder:text-white/60 hover:placeholder:text-white/80"
              value={propertiesList}
              onChange={(event) => setPropertiesList(event.target.value)}
            />
            <button className="flex justify-start items-center gap-1 bg-[#703bf7] hover:bg-[#703bff]/70 text-white py-2 px-4 rounded-lg w-fit h-full mr-6">
              <Search width={18} height={18} className="shrink-0" />{" "}
              <span className="hidden md:block text-[14px]">Find Property</span>
            </button>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-4 max-w-5xl mx-auto bg-[#262626] p-5 rounded-lg">
            <Dropdown
              icon={<MapPin className="w-4 h-4 text-[#999999]" />}
              placeholder="Location"
              options={[
                { value: "new-york", label: "New York" },
                { value: "london", label: "London" },
                { value: "paris", label: "Paris" },
              ]}
            />

            <Dropdown
              icon={<Building2 className="w-4 h-4 text-[#999999]" />}
              placeholder="Property Type"
              options={[
                { value: "house", label: "House" },
                { value: "apartment", label: "Apartment" },
                { value: "condo", label: "Condo" },
              ]}
            />

            <Dropdown
              icon={<span className="text-[#999999]">$</span>}
              placeholder="Pricing Range"
              options={[
                { value: "0-100k", label: "$0 - $100,000" },
                { value: "100k-500k", label: "$100,000 - $500,000" },
                { value: "500k+", label: "$500,000+" },
              ]}
            />

            <Dropdown
              icon={<Package className="w-4 h-4 text-[#999999]" />}
              placeholder="Property Size"
              options={[
                { value: "small", label: "Small" },
                { value: "medium", label: "Medium" },
                { value: "large", label: "Large" },
              ]}
            />

            <Dropdown
              icon={<Calendar className="w-4 h-4 text-[#999999]" />}
              placeholder="Build Year"
              options={[
                { value: "2020+", label: "2020+" },
                { value: "2010-2020", label: "2010-2020" },
                { value: "2000-2010", label: "2000-2010" },
              ]}
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default SearchProperties;
