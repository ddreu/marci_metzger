import serviceOne from "../assets/img/se1.png";
import serviceTwo from "../assets/img/se2.png";
import serviceThree from "../assets/img/se3.png";

const services = [
  {
    number: "01",
    title: "Real Estate Done Right",
    image: serviceOne,
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    number: "02",
    title: "Commercial & Residential",
    image: serviceTwo,
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
  },
  {
    number: "03",
    title: "Rely on Expertise",
    image: serviceThree,
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];

function Services() {
  return (
    <section className="bg-neutral-50 px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
              Our Services
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-neutral-900 md:text-7xl lg:text-8xl">
              Real Estate
              <span className="block text-neutral-400">Done Right.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-neutral-500">
            Whether you're buying, selling, or exploring your options, our team
            is here to make every step easier.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-[0.25em] text-neutral-400">
                    {service.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-sm text-neutral-700 transition-all duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <h3 className="font-serif text-3xl leading-tight text-neutral-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
