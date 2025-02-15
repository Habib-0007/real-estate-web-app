import { useState } from "react";
import { ChevronDown } from "lucide-react";

type DropdownProps = {
  icon?: React.ReactNode;
  placeholder: string;
  bg?: string;
  options: { value: string; label: string }[];
};

const Dropdown = ({ icon, placeholder, options, bg }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="relative w-full md:w-auto min-w-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-12 bg-[${bg || "#141414"}] rounded-lg px-4 text-white flex items-center gap-4 justify-between hover:bg-[#1a1a1a] transition-colors`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[#999999]">{selected || placeholder}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-[#999999] transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-[#262626] rounded-lg shadow-lg py-2 z-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelected(option.label);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-white hover:bg-[#303030] transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
