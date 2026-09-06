import marciImage from "../assets/img/person.png";

function MeetMarci() {
  return (
    <section id="about" className="px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center lg:gap-20">
        {/* Image */}
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={marciImage}
            alt="Marci Metzger"
            className="h-[500px] w-full object-cover md:h-[650px]"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Meet Marci
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            Marci Metzger
          </h2>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Realtor for nearly 3 decades
          </p>

          <div className="mt-10 h-px w-16 bg-neutral-300" />

          <p className="mt-8 text-base leading-8 text-neutral-600">
            With nearly three decades of experience, Marci Metzger brings deep
            market knowledge, dedication, and a commitment to helping clients
            make confident real estate decisions.
          </p>

          <a
            href="tel:+12069196886"
            className="mt-8 inline-block text-sm font-medium uppercase tracking-[0.15em] text-neutral-900 transition-opacity hover:opacity-50"
          >
            206-919-6886
          </a>
        </div>
      </div>
    </section>
  );
}

export default MeetMarci;
