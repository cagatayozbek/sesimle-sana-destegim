/*
 * Navbar — "Doğal Bağ" Tasarım Felsefesi
 * Sıcak krem arka plan, Lora logo, Nunito nav linkleri
 * Scroll ile hafif gölge efekti
 */

import { useState, useEffect } from "react";
import { Menu, X, Mic } from "lucide-react";

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Ne Yapıyoruz", href: "#ne-yapiyoruz" },
  { label: "Nasıl Çalışıyoruz", href: "#nasil-calisiyoruz" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF8F0]/95 backdrop-blur-sm shadow-sm border-b border-amber-100"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center shadow-sm group-hover:bg-amber-600 transition-colors">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-base font-bold text-amber-700"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Sesimle Sana
              </span>
              <span
                className="text-sm font-semibold text-stone-600"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Desteğim
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-stone-600 hover:text-amber-700 transition-colors relative group"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={(e) => handleNavClick(e, "#iletisim")}
              className="ml-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Destek Ol
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-600 hover:text-amber-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FFF8F0] border-t border-amber-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-sm font-semibold text-stone-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#iletisim"
                onClick={(e) => handleNavClick(e, "#iletisim")}
                className="block w-full text-center px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-full transition-colors"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Destek Ol
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
