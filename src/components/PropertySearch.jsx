import propertySearchImage from "../assets/img/bg2.png";
import { ArrowUpRight } from "lucide-react";

function PropertySearch() {
  return (
    <section
      id="property-search"
      className="relative overflow-hidden px-6 py-24 text-white md:py-32 lg:px-12"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${propertySearchImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Find Your Dream Home
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Find your
            <span className="block text-white/50">dream home.</span>
          </h2>
        </div>

        {/* Search Panel */}
        <div className="rounded-[1.5rem] border border-white/20 bg-black/20 p-6 backdrop-blur-sm md:p-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Location */}
            <div>
              <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                Location
              </label>

              <select className="w-full appearance-none border-b border-white/30 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors focus:border-white">
                <option className="text-neutral-900">Any</option>
                <option className="text-neutral-900">Alamo</option>
                <option className="text-neutral-900">Alton</option>
                <option className="text-neutral-900">Amargosa Valley</option>
                <option className="text-neutral-900">Beatty</option>
                <option className="text-neutral-900">Boulder City</option>
                <option className="text-neutral-900">Henderson</option>
                <option className="text-neutral-900">Las Vegas</option>
                <option className="text-neutral-900">Mesquite</option>
                <option className="text-neutral-900">North Las Vegas</option>
                <option className="text-neutral-900">Pahrump</option>
                <option className="text-neutral-900">Other</option>
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                Type
              </label>

              <select className="w-full appearance-none border-b border-white/30 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors focus:border-white">
                <option className="text-neutral-900">Any</option>
                <option className="text-neutral-900">Land</option>
                <option className="text-neutral-900">Residential Lease</option>
                <option className="text-neutral-900">High Rise</option>
                <option className="text-neutral-900">Residential</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                Sort By
              </label>

              <select className="w-full appearance-none border-b border-white/30 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors focus:border-white">
                <option className="text-neutral-900">Newest</option>
                <option className="text-neutral-900">Oldest</option>
                <option className="text-neutral-900">
                  Least Expensive to Most
                </option>
                <option className="text-neutral-900">
                  Most Expensive to Least
                </option>
                <option className="text-neutral-900">
                  Bedrooms Low to High
                </option>
                <option className="text-neutral-900">
                  Bedrooms High to Low
                </option>
                <option className="text-neutral-900">
                  Bathrooms Low to High
                </option>
                <option className="text-neutral-900">
                  Bathrooms High to Low
                </option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                Bedrooms
              </label>

              <select className="w-full appearance-none border-b border-white/30 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors focus:border-white">
                <option className="text-neutral-900">Any Number</option>
                <option className="text-neutral-900">Studio</option>
                <option className="text-neutral-900">1+</option>
                <option className="text-neutral-900">2+</option>
                <option className="text-neutral-900">3+</option>
                <option className="text-neutral-900">4+</option>
                <option className="text-neutral-900">5+</option>
                <option className="text-neutral-900">6+</option>
              </select>
            </div>

            {/* Baths */}
            <div>
              <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                Baths
              </label>

              <select className="w-full appearance-none border-b border-white/30 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors focus:border-white">
                <option className="text-neutral-900">Any Number</option>
                <option className="text-neutral-900">1+</option>
                <option className="text-neutral-900">2+</option>
                <option className="text-neutral-900">3+</option>
                <option className="text-neutral-900">4+</option>
                <option className="text-neutral-900">5+</option>
                <option className="text-neutral-900">6+</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                Price
              </label>

              <div className="flex items-center gap-4 border-b border-white/30">
                <input
                  type="number"
                  placeholder="Min Price"
                  className="w-full bg-transparent py-4 text-sm text-white placeholder:text-white/30 outline-none"
                />

                <span className="text-white/30">—</span>

                <input
                  type="number"
                  placeholder="Max Price"
                  className="w-full bg-transparent py-4 text-sm text-white placeholder:text-white/30 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-10 flex justify-end">
            <button
              type="button"
              className="flex rounded-lg items-center gap-4 bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-200"
            >
              Search Now
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertySearch;
