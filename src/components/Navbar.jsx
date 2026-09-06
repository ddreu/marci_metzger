import logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav className="w-full bg-neutral-50 px-6 pt-5 pb-2">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center">
        {/* Left */}
        <div className="flex items-center gap-8">
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

        {/* Center Logo */}
        <div className="flex justify-center">
          <a href="#">
            <img
              src={logo}
              alt="Marci Metzger - The Ridge Realty Group"
              className="h-16 w-auto object-contain"
            />
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-8">
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
  );
}

export default Navbar;
