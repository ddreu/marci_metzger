import bigCircle from "../assets/img/lc1.png";
import equalHousing from "../assets/img/lc2.png";
import realtor from "../assets/img/lc3.png";
import chamber from "../assets/img/lc4.png";

const logos = [
  {
    name: "Big Circle 2",
    image: bigCircle,
  },
  {
    name: "Equal Housing",
    image: equalHousing,
  },
  {
    name: "REALTOR",
    image: realtor,
  },
  {
    name: "Chamber",
    image: chamber,
  },
];

function LogoCarousel() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400 md:mb-10">
          Affiliations & Credentials
        </p>

        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-10 md:grid-cols-4 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-12 w-auto max-w-[120px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:max-h-16 md:max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel;
