const socials = [
  {
    name: "Facebook",
    href: "#",
  },
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
  {
    name: "Yelp",
    href: "#",
  },
];

function SocialLinks() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400">
            Stay Connected
          </p>

          <h2 className="font-serif text-4xl tracking-tight text-neutral-900 md:text-5xl">
            Follow the journey.
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-neutral-900"
              >
                <span>{social.name}</span>

                <span className="translate-x-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;
