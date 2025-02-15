import { Facebook, Linkedin, Mail, Send, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Email Section */}
          <div className="col-span-1">
            <div className="mb-8">
              <Link
                to="/"
                className="flex justify-start items-center flex-row gap-2 mb-6"
              >
                <img
                  src="/assets/estatein-logo.svg"
                  alt="estatein-logo"
                  width={28}
                  height={28}
                />
                <h1 className="text-xl">Estatein</h1>
              </Link>
              <div className="relative">
                <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-white/50" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-[#1a1a1a] text-white placeholder:text-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#703bf7] pl-10"
                />
                <button
                  className="absolute right-2 top-1/2 text-white/70 -translate-y-1/2 bg-[#141414] hover:bg-[#703bf7] hover:text-white p-2 rounded-lg transition-colors"
                  aria-label="Send email"
                >
                  <Send />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Home Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-6">Home</h3>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Hero Section
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Properties
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  FAQ's
                </Link>
              </nav>
            </div>

            {/* About Us Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-6">About Us</h3>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Our Works
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Our Clients
                </Link>
              </nav>
            </div>

            {/* Properties Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-6">Properties</h3>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </nav>
            </div>

            {/* Services Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Valuation Mastery
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Strategic Marketing
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Negotiation Wizardry
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Closing Success
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Property Management
                </Link>
              </nav>
            </div>

            {/* Contact Us Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Contact Form
                </Link>
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white transition-colors"
                >
                  Our Offices
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-[#262626] pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#999999] text-sm">
            ©{new Date().getFullYear()} Estatein. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-[#999999] text-sm hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <div className="flex items-center gap-6 ml-6">
              <Link
                to="#"
                className="text-[#999999] hover:text-white transition-colors"
              >
                <Facebook />
              </Link>

              <Link
                to="#"
                className="text-[#999999] hover:text-white transition-colors"
              >
                <Linkedin />
              </Link>
              <Link
                to="#"
                className="text-[#999999] hover:text-white transition-colors"
              >
                <Twitter />
              </Link>
              <Link
                to="#"
                className="text-[#999999] hover:text-white transition-colors"
              >
                <Youtube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
