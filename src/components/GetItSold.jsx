import imageOne from "../assets/img/s1.png";
import imageTwo from "../assets/img/s2.png";
import imageThree from "../assets/img/s_3.png";

function GetItSold() {
  return (
    <section className="bg-neutral-900 px-6 py-24 text-white md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Get It Sold
          </p>

          <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Don't Just List It...
            <span className="block text-white/40">Get It SOLD.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Composition */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image */}
            <div className="row-span-2 overflow-hidden rounded-[1.5rem]">
              <img
                src={imageOne}
                alt="Property"
                className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Small Images */}
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={imageTwo}
                alt="Property"
                className="h-60 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={imageThree}
                alt="Property"
                className="h-60 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Stats + Copy */}
          <div className="flex flex-col justify-center">
            <div className="border-t border-white/20 py-8">
              <p className="font-serif text-6xl md:text-7xl">$28.5M</p>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/50">
                In Sales
              </p>
            </div>

            <div className="border-t border-white/20 py-8">
              <p className="font-serif text-6xl md:text-7xl">90</p>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/50">
                Clients Helped in 2021
              </p>
            </div>

            <p className="mt-4 text-sm leading-8 text-white/60">
              We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales! Our team works hard everyday to grow and learn, so that we
              may continue to excel in our market. Our clients deserve our best,
              & we want to make sure our best is better every year.
            </p>
          </div>
        </div>

        {/* Supporting Copy */}
        <div className="mt-20 grid gap-10 border-t border-white/20 pt-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
              Don't Just List It
            </p>

            <p className="text-lg leading-8 text-white/80">
              Don't Just List it... Get it SOLD! We exhaust every avenue to
              ensure our listings are at the fingertips of every possible buyer,
              getting you top dollar for your home.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
              Guide to Buyers
            </p>

            <p className="text-lg leading-8 text-white/80">
              Nobody knows the market like we do. Enjoy having a pro at your
              service. Market analysis, upgrades lists, contractors on speed
              dial, & more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetItSold;
