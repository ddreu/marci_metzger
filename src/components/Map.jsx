function Map() {
  return (
    <section className="bg-neutral-50 px-6 py-6 md:px-8 lg:px-12 lg:py-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-200">
        <div className="relative h-[450px] md:h-[550px]">
          <iframe
            title="Marci Metzger office location"
            src="https://www.google.com/maps?q=3190+HW-160,+Pahrump,+NV+89048&output=embed"
            className="absolute inset-0 h-full w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Map Label */}
          <div className="absolute bottom-6 left-6 bg-neutral-50 px-6 py-5 shadow-lg md:bottom-8 md:left-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
              Visit Us
            </p>

            <p className="mt-2 font-serif text-2xl text-neutral-900">
              Pahrump, Nevada
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=3190+HW-160,+Pahrump,+NV+89048"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-opacity hover:opacity-50"
            >
              Get Directions ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
