import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Listings", href: "#listings" },
    { name: "Let's Move", href: "#move" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <>
      <nav className="relative z-50 w-full bg-neutral-50 px-6 pt-5 pb-2">
        <div className="relative mx-auto flex max-w-6xl items-center justify-center lg:grid lg:grid-cols-3">
          {/* Desktop Left */}
          <div className="hidden -translate-x-4 items-center justify-end gap-8 lg:flex">
            <a
              href="#move"
              className="text-xs uppercase tracking-[0.2em] text-neutral-900 transition-opacity hover:opacity-60"
            >
              Let's Move
            </a>

            <a
              href="#about"
              className="text-xs uppercase tracking-[0.2em] text-neutral-900 transition-opacity hover:opacity-60"
            >
              About Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="absolute left-0 flex h-10 w-10 items-center justify-center text-neutral-900 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Center Logo */}
          <div className="flex justify-center">
            <a href="#">
              <img
                src={logo}
                alt="Marci Metzger - The Ridge Realty Group"
                className="h-16 w-auto object-contain md:h-20 lg:h-[5.25rem]"
              />
            </a>
          </div>

          {/* Desktop Right */}
          <div className="hidden translate-x-4 items-center justify-start gap-8 lg:flex">
            <a
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-neutral-900 transition-opacity hover:opacity-60"
            >
              Home
            </a>

            <a
              href="#listings"
              className="text-xs uppercase tracking-[0.2em] text-neutral-900 transition-opacity hover:opacity-60"
            >
              Listings
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-out Menu */}
        <div
          className={`absolute left-0 top-0 flex h-full w-[85%] max-w-md flex-col bg-neutral-50 px-8 py-8 transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between">
            <img
              src={logo}
              alt="Marci Metzger"
              className="h-12 w-auto object-contain"
            />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-neutral-900"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-neutral-200 py-5 font-serif text-3xl tracking-tight text-neutral-900 transition-opacity hover:opacity-50 sm:text-4xl"
              >
                <span className="mr-4 text-xs font-sans tracking-normal text-neutral-400">
                  0{index + 1}
                </span>

                {link.name}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-auto border-t border-neutral-200 pt-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              The Ridge Realty Group
            </p>

            <a
              href="tel:+12069196886"
              className="mt-3 block text-lg text-neutral-900"
            >
              (206) 919-6886
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
