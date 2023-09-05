import React from "react";
import Slider from "react-slick";

const eventImages = [
  "https://i.imgur.com/1Zd8gTh_d.webp?maxwidth=760&fidelity=grand",
  "https://i.imgur.com/1Zd8gTh_d.webp?maxwidth=760&fidelity=grand",
  "https://i.imgur.com/1Zd8gTh_d.webp?maxwidth=760&fidelity=grand",
  "https://i.imgur.com/1Zd8gTh_d.webp?maxwidth=760&fidelity=grand",
  // Add more image paths as needed
];

export default function Gallery() {
  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Event Gallery</h1>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <Slider {...carouselSettings}>
          {eventImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Event ${index}`} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Tablet and Mobile View */}
      <div className="lg:hidden">
        <Slider {...carouselSettings}>
          {eventImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Event ${index}`} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Additional Carousels */}
      {/* Add more carousels as needed */}
    </div>
  );
}
