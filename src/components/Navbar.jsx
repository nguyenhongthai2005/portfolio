import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 z-50">
      <nav className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-16">
        <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-xs">
          <span className="material-symbols-outlined">code</span>
          Thái Nguyễn
        </div>
        <div className="hidden md:flex items-center gap-xl">
          <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#projects">Dự án</a>
          <a className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors" href="#skills">Kỹ năng</a>
          <a className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors" href="#deep-dive">Chuyên sâu</a>
          <a className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors" href="#experience">Lộ trình</a>
          <button className="md:hidden p-2 ml-4">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
