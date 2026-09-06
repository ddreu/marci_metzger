function Contact() {
  return (
    <section
      id="move"
      className="bg-neutral-900 px-6 py-24 text-white md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Call or Visit
            </p>

            <h2 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Let's talk about
              <span className="block text-white/40">your next move.</span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="tel:+12069196886"
              className="inline-flex items-center gap-4 border border-white/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-neutral-900"
            >
              Call (206) 919-6886
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid gap-16 pt-16 lg:grid-cols-2 lg:gap-24">
          {/* Message Form */}
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/40">
              Send a Message
            </p>

            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-white/20 bg-transparent py-4 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/70"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-b border-white/20 bg-transparent py-4 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/70"
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-4 bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-200"
              >
                Send
                <span>↗</span>
              </button>

              <p className="text-[10px] leading-5 text-white/30">
                This form is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </form>
          </div>

          {/* Office Information */}
          <div className="lg:pt-2">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                The Ridge Realty Group
              </p>

              <h3 className="mt-5 font-serif text-4xl text-white md:text-5xl">
                Marci Metzger
              </h3>
            </div>

            {/* Address */}
            <div className="border-t border-white/15 py-7">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
                Address
              </p>

              <p className="max-w-sm text-base leading-7 text-white/80">
                3190 HW-160, Suite F
                <br />
                Pahrump, Nevada 89048
                <br />
                United States
              </p>
            </div>

            {/* Phone */}
            <div className="border-t border-white/15 py-7">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
                Phone
              </p>

              <a
                href="tel:+12069196886"
                className="text-lg text-white transition-opacity hover:opacity-60"
              >
                (206) 919-6886
              </a>
            </div>

            {/* Hours */}
            <div className="border-y border-white/15 py-7">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
                Office Hours
              </p>

              <p className="text-base leading-7 text-white/80">
                Open daily 8:00 am - 7:00 pm
                <br />
                <span className="text-white/50">
                  Appointments outside office hours by request
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
