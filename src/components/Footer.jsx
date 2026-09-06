function Footer() {
  return (
    <footer className="bg-neutral-900 px-6 py-12 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-serif text-3xl tracking-tight text-white"
            >
              Marci Metzger
            </a>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
              The Ridge Realty Group
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-white/40">
              Pahrump Realtor
            </p>

            <a
              href="tel:+12069196886"
              className="mt-3 inline-block text-sm text-white/80 transition-opacity hover:opacity-60"
            >
              (206) 919-6886
            </a>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-1 lg:col-span-2 lg:justify-self-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/30">
                Explore
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#listings"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Listings
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/30">
                Company
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="#move"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Let's Move
                </a>

                <a
                  href="#about"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  About Us
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/30">
                Social
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Facebook
                </a>

                <a
                  href="#"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Yelp
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/30">
                Office
              </p>

              <p className="text-sm leading-6 text-white/60">
                3190 HW-160, Suite F
                <br />
                Pahrump, Nevada 89048
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 pt-8 text-[10px] uppercase tracking-[0.15em] text-white/30 md:flex-row md:items-center">
          <p>Copyright © 2026 Marci METZGER - All Rights Reserved</p>

          <p>The Ridge Realty Group</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
