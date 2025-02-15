"use client";

import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedSingle,
  ChartArea,
  MapPin,
  ZapIcon,
} from "lucide-react";
import { useState } from "react";

interface PropertyImage {
  id: number;
  url: string;
  alt: string;
}

const images: PropertyImage[] = [
  {
    id: 1,
    url: "showcase-img-one",
    alt: "Modern villa exterior with pool",
  },
  {
    id: 2,
    url: "/showcase-img-two",
    alt: "Living room interior",
  },
  {
    id: 3,
    url: "/showcase-img-three",
    alt: "Pool area",
  },
  {
    id: 4,
    url: "/showcase-img-one",
    alt: "Bedroom",
  },
  {
    id: 5,
    url: "/showcase-img-two",
    alt: "Kitchen",
  },
  {
    id: 6,
    url: "/showcase-img-three",
    alt: "Bathroom",
  },
  {
    id: 7,
    url: "/showcase-img-one",
    alt: "Terrace",
  },
  {
    id: 8,
    url: "/showcase-img-two",
    alt: "Garden view",
  },
];

const features = [
  "Expansive oceanfront terrace for outdoor entertaining",
  "Gourmet kitchen with top-of-the-line appliances",
  "Private beach access for morning strolls and sunset views",
  "Master suite with a spa-inspired bathroom and ocean-facing balcony",
  "Private garage and ample storage space",
];

const PropertyShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <h1 className="text-xl md:ext-2xl font-semibold">
              Seaside Serenity Villa
            </h1>
            <div className="flex items-center gap-2 rounded-md border border-[#262626] p-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm text-[#999999]">Malibu, California</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#999999]">Price</p>
            <p className="text-lg md:text-xl font-semibold">$1,250,000</p>
          </div>
        </div>

        <section>
          {/* Thumbnail Gallery */}
          <section className="bg-[#1a1a1a] p-10 rounded-lg mb-5 flex justify-start items-stretch flex-col">
            <div className="mb-4 flex gap-2.5 flex-nowrap px-[10px] bg-[#141414]">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveSlide(index)}
                  className={`relative h-18.5 w-auto overflow-hidden grow-1 rounded-lg transition-opacity ${
                    activeSlide === index
                      ? "opacity-100 ring-2 ring-[#703bf7]"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <img
                    src={`/assets/${image.url}.svg`}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image Display */}
            <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {[0, 1].map((offset) => (
                <div
                  key={offset}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <img
                    src={`/assets/${
                      images[(activeSlide + offset) % images.length].url
                    }.svg`}
                    alt={images[(activeSlide + offset) % images.length].alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-2 mx-auto bg-[#141414] self-center p-2 rounded-[100px]">
              <button
                onClick={prevSlide}
                className="rounded-full bg-black/50 text-white/50 backdrop-blur-sm transition-colors hover:bg-black/70 p-2.5 hover:text-white"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-1 w-3 rounded-full transition-all ${
                      activeSlide === index ? "bg-[#703bf7]" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="rounded-full bg-black/50 p-2.5 text-white/50 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
                aria-label="Next image"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </section>
          {/* Property Details */}
          <section className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5 border-[#262626] border rounded-md p-10 self-start">
              <div>
                <h2 className="mb-4 text-xl font-semibold">Description</h2>
                <p className="text-[#999999]">
                  Discover your own piece of paradise with the Seaside Serenity
                  Villa. With an open floor plan, breathtaking ocean views from
                  every room, and direct access to a pristine sandy beach, this
                  property is the epitome of coastal living.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-5 border-t border-t-[#262626] pt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-[#999999]">
                    <Bath className="h-5 w-5" />
                    Bedrooms
                  </div>
                  <p className="text-xl font-semibold">04</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-[#999999]">
                    <BedSingle className="h-5 w-5" />
                    Bathrooms
                  </div>
                  <p className="text-xl font-semibold">03</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-[#999999]">
                    <ChartArea className="h-5 w-5" />
                    Area
                  </div>
                  <p className="text-xl font-semibold">2,500 Square Feet</p>
                </div>
              </div>
            </div>

            <div className="p-10">
              <h2 className="mb-4 text-xl font-semibold">
                Key Features and Amenities
              </h2>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-sm border-l-2 border-l-[#703bf7] bg-[#141414] p-4 text-[#999999]"
                  >
                    <ZapIcon
                      fill="#fff"
                      className="h-5 w-5 shrink-0 text-[#fff]"
                    />
                    <span className="w-full">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default PropertyShowcase;
