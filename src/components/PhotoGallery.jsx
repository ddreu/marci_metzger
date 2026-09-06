import { useState } from "react";

import imageOne from "../assets/img/p1.png";
import imageTwo from "../assets/img/p2.png";
import imageThree from "../assets/img/p3.png";
import imageFour from "../assets/img/p4.png";
import imageFive from "../assets/img/p5.png";
import imageSix from "../assets/img/p6.png";
import imageSeven from "../assets/img/p1.png";

const gallery = [
  {
    image: imageOne,
    title: "4787 E Beacon Ridge",
  },
  {
    image: imageTwo,
    title: "4460 Roseworthy",
  },
  {
    image: imageThree,
    title: "5570 Ailanto",
  },
  {
    image: imageFour,
    title: "Featured Property",
  },
  {
    image: imageFive,
    title: "Featured Property",
  },
  {
    image: imageSix,
    title: "Featured Property",
  },
  {
    image: imageSeven,
    title: "Featured Property",
  },
];

function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = gallery[currentIndex];

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-neutral-50 px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
              Photo Gallery
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-neutral-900 md:text-7xl lg:text-8xl">
              Places worth
              <span className="block text-neutral-400">coming home to.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-neutral-500">
            Explore a selection of homes and properties represented by The Ridge
            Realty Group.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative overflow-hidden rounded-[2rem] bg-neutral-200">
          <div className="relative aspect-[16/9] md:aspect-[21/10]">
            <img
              key={currentImage.image}
              src={currentImage.image}
              alt={currentImage.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Property Info */}
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                Property
              </p>

              <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">
                {currentImage.title}
              </h3>
            </div>

            {/* Counter */}
            <div className="absolute bottom-8 right-8 text-xs tracking-[0.2em] text-white md:bottom-10 md:right-10">
              {String(currentIndex + 1).padStart(2, "0")}
              <span className="mx-2 text-white/40">/</span>
              {String(gallery.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
          {gallery.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`View ${item.title}`}
              className={`group relative shrink-0 overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-neutral-900 ring-offset-2 ring-offset-neutral-50"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={item.image}
                alt=""
                className="h-20 w-28 object-cover transition-transform duration-500 group-hover:scale-105 md:h-24 md:w-36"
              />

              {index === currentIndex && (
                <div className="absolute inset-0 bg-black/10" />
              )}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-lg text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-lg text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
            >
              →
            </button>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            Select a photo
          </span>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
