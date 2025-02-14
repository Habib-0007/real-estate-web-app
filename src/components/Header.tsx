import { useState } from "react";
import { Menu, Star, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showBanner, setShowBanner] = useState<Boolean>(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex flex-col sticky">
      {showBanner && (
        <section className="flex justify-start md:justify-between items-center flex-row gap-4 py-3 px-4 twirling-lines">
          <p className="hidden md:block"></p>
          <div className="flex flex-row justify-start items-center gap-1">
            <Star color="yellow" size={16} />
            <p className="text-[11px] md:text-[14px]">
              Discover Your Dream Property With Estatein
            </p>
            <button className="bg-transparent ml-2 text-[11px] md:text-[14px] border-b-1 border-b-transparent transitiion-all duration-300 hover:border-b-white cursor-pointer">
              Learn More
            </button>
          </div>
          <button
            className="bg-transparent flex justify-center py-2 px-2 items-center rounded-full cursor-pointer transition-all duration-300 hover:bg-[#141414]"
            onClick={() => setShowBanner(false)}
          >
            <X size={16} />
          </button>
        </section>
      )}
      <section className="grid grid-cols-12 px-5 py-3 lg:px-0 bg-[#1a1a1a]">
        <section className="col-start-1 col-end-13 lg:col-start-2 lg:col-end-12 relative z-50">
          <section className="flex justify-between items-center gap-4">
            <Link
              to="/"
              className="flex justify-start items-center flex-row gap-2"
            >
              <img
                src="/assets/estatein-logo.svg"
                alt="estatein-logo"
                width={28}
                height={28}
              />
              <h1 className="text-xl">Estatein</h1>
            </Link>

            <nav className="space-x-6 hidden md:flex items-center">
              <Link
                to="/"
                className="text-sm text-white/80 transition-colors duration-300 ease-linear hover:text-white hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-sm text-white/80 transition-colors duration-300 ease-linear hover:text-white hover:underline hover:underline-offset-4"
              >
                About Us
              </Link>
              <Link
                to="/properties"
                className="text-sm text-white/80 transition-colors duration-300 ease-linear hover:text-white hover:underline hover:underline-offset-4"
              >
                Properties
              </Link>
              <Link
                to="/services"
                className="text-sm text-white/80 transition-colors duration-300 ease-linear hover:text-white hover:underline hover:underline-offset-4"
              >
                Services
              </Link>
            </nav>
            <button
              className="md:hidden block bg-transparent"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X width={32} height={32} />
              ) : (
                <Menu width={32} height={32} />
              )}
            </button>
            <Link
              to="/contact-us"
              className="hidden bg-[#141414] hover:bg-[#262626] py-2 px-4 rounded-sm md:block"
            >
              Contact Us
            </Link>
          </section>
        </section>
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-4 space-y-4">
            {[
              { name: "Find Jobs", link: "/jobs" },
              { name: "About Us", link: "/about-us" },
              { name: "Career Advice", link: "/career-advice" },
              { name: "Post a Job", link: "/jobs/create" },
            ].map((item, index) => (
              <Link
                key={item.name}
                to={item.link}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 delay-${
                  index * 100
                } ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[-20px] opacity-0"
                }
              `}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;

// #262626

// #141414

// #703bf7

// #1a1a1a

// #666666
