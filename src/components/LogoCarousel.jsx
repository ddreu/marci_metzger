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
    <section className="border-y border-neutral-200 bg-neutral-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="mb-10 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400">
          Affiliations & Credentials
        </p>

        <div className="flex items-center justify-between gap-12 overflow-x-auto md:gap-16 md:overflow-visible">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex min-w-[140px] flex-1 items-center justify-center"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-16 w-auto max-w-[150px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel;
