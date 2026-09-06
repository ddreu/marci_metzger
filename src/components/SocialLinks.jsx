import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    name: "Yelp",
    href: "#",
    icon: FaYelp,
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
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  <Icon size={18} />

                  <span>{social.name}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;
