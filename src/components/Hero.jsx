import hero from "../assets/img/hero.png";
import { Phone, ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="px-4 pb-4 md:px-6 md:pb-6">
      <div
        className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-[2rem] bg-cover bg-center md:min-h-[calc(100vh-3rem)]"
        style={{
          //   backgroundImage: "url('/hero.png')",
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Hero Text */}
        <div className="relative z-10 px-6 pt-10 md:px-12 md:pt-14 lg:px-16 lg:pt-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/80">
              Marci Metzger
            </p>

            <h1 className="font-serif text-6xl leading-[0.9] tracking-tight text-white md:text-8xl lg:text-9xl">
              Pahrump Realtor
            </h1>

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/80 md:text-base">
              The Ridge Realty Group
            </p>

            <a
              href="tel:+12069196886"
              className="group mt-10 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-white"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-neutral-900 transition-all duration-300 group-hover:scale-105 group-hover:bg-neutral-200">
                <Phone size={18} strokeWidth={1.8} />
              </span>

              <span className="border-b-2 border-white pb-1.5">Call Marci</span>
            </a>
          </div>
        </div>

        {/* Property Search Quick Link */}
        <a
          href="#property-search"
          className="group absolute bottom-8 right-8 z-20 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-60 md:bottom-12 md:right-12"
        >
          <span>Find your Dream Home</span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 transition-all duration-300 group-hover:translate-y-1 group-hover:bg-white group-hover:text-neutral-900">
            <ArrowDown size={16} strokeWidth={1.5} />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
