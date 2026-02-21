
import { useState } from "react";

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const DropdownMenu = ({ items }) => (
  <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
    {items.map((item) => (
      <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
        {item}
      </a>
    ))}
  </div>
);

export default function KicksNavbar() {
  const [menOpen, setMenOpen] = useState(false);
  const [womenOpen, setWomenOpen] = useState(false);
  const [mobileMenOpen, setMobileMenOpen] = useState(false);
  const [mobileWomenOpen, setMobileWomenOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const menItems = ["Sneakers", "Running", "Basketball", "Slides & Sandals", "Accessories"];
  const womenItems = ["Sneakers", "Running", "Lifestyle", "Slides & Sandals", "Accessories"];

  return (
    <div className=" flex flex-col items-center pt-8 px-4 max-w-7xl mx-auto">
      <nav className="w-full  bg-white rounded-2xl shadow-sm px-6 py-6 relative">

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center  text-sm font-semibold text-gray-900 whitespace-nowrap hover:opacity-75 transition-opacity">
              New Drops <span>🔥</span>
            </a>
            <div className="relative" onMouseEnter={() => setMenOpen(true)} onMouseLeave={() => setMenOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:opacity-75 transition-opacity">
                Men <ChevronDown />
              </button>
              {menOpen && <DropdownMenu items={menItems} />}
            </div>
            <div className="relative" onMouseEnter={() => setWomenOpen(true)} onMouseLeave={() => setWomenOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:opacity-75 transition-opacity">
                Women <ChevronDown />
              </button>
              {womenOpen && <DropdownMenu items={womenItems} />}
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img className="h-8" src="/src/assets/kick.png" alt="KICKS" />
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-gray-700">
            <button className="hover:opacity-60 transition-opacity"><SearchIcon /></button>
            <button className="hover:opacity-60 transition-opacity"><UserIcon /></button>
            <button className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-sm font-bold text-white hover:bg-amber-500 transition-colors">
              {cartCount}
            </button>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex md:hidden items-center justify-between">
          {/* Hamburger */}
          <button
            className="text-gray-900 hover:opacity-60 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img className="h-7" src="/src/assets/kick.png" alt="KICKS" />
          </div>

          {/* Right: User + Cart (no search on mobile top bar) */}
          <div className="flex items-center gap-3 text-gray-700">
            <button className="hover:opacity-60 transition-opacity"><UserIcon /></button>
            <button className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-sm font-bold text-white hover:bg-amber-500 transition-colors">
              {cartCount}
            </button>
          </div>
        </div>

        {/* ── MOBILE SLIDE-DOWN MENU ── */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col">
            <a href="#" className="flex items-center gap-1 px-2 py-3 text-sm font-semibold text-gray-900 hover:bg-white rounded-xl transition-colors">
              New Drops <span>🔥</span>
            </a>

            {/* Men */}
            <div>
              <button
                className="w-full flex items-center justify-between px-2 py-3 text-sm font-semibold text-gray-900 hover:bg-white rounded-xl transition-colors"
                onClick={() => setMobileMenOpen(!mobileMenOpen)}
              >
                Men
                <span className={`transition-transform duration-200 ${mobileMenOpen ? "rotate-180" : ""}`}>
                  <ChevronDown />
                </span>
              </button>
              {mobileMenOpen && (
                <div className="pl-4 flex flex-col mb-1">
                  {menItems.map((item) => (
                    <a key={item} href="#" className="px-2 py-2 text-sm text-gray-600 hover:bg-white rounded-lg transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Women */}
            <div>
              <button
                className="w-full flex items-center justify-between px-2 py-3 text-sm font-semibold text-gray-900 hover:bg-white rounded-xl transition-colors"
                onClick={() => setMobileWomenOpen(!mobileWomenOpen)}
              >
                Women
                <span className={`transition-transform duration-200 ${mobileWomenOpen ? "rotate-180" : ""}`}>
                  <ChevronDown />
                </span>
              </button>
              {mobileWomenOpen && (
                <div className="pl-4 flex flex-col mb-1">
                  {womenItems.map((item) => (
                    <a key={item} href="#" className="px-2 py-2 text-sm text-gray-600 hover:bg-white rounded-lg transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <a href="#" className="flex items-center gap-2 px-2 py-3 text-sm font-semibold text-gray-900 hover:bg-white rounded-xl transition-colors">
              <SearchIcon /> Search
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}