/*
 * Footer — "Doğal Bağ" Tasarım Felsefesi
 * Sıcak krem arka plan, organik düzen
 */

import { Heart, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF8F0] border-t border-amber-100">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <h3
              className="text-xl font-bold text-amber-700"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Sesimle Sana Desteğim
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Sınavlara hazırlanan engelli bireylerin test kitaplarındaki soruları ve çözümleri
              okunarak erişilebilir hale getiriyoruz. Her okunan soru, bir adım daha eşit bir
              eğitim demek.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h4
              className="text-base font-bold text-stone-700"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Hızlı Erişim
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#hakkimizda"
                  className="text-sm text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#ne-yapiyoruz"
                  className="text-sm text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Ne Yapıyoruz
                </a>
              </li>
              <li>
                <a
                  href="#nasil-calisiyoruz"
                  className="text-sm text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Nasıl Çalışıyoruz
                </a>
              </li>
              <li>
                <a
                  href="#sss"
                  className="text-sm text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Sık Sorulan Sorular
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="text-sm text-stone-600 hover:text-amber-700 transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim ve Sosyal Medya */}
          <div className="space-y-4">
            <h4
              className="text-base font-bold text-stone-700"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Bize Ulaşın
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:iletisim@sesimlesanadestegim.org"
                className="flex items-center gap-2.5 text-sm text-stone-600 hover:text-amber-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                iletisim@sesimlesanadestegim.org
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com/sesimlesanadestegim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-500 text-amber-700 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/sesimlesanadestegim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-500 text-amber-700 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@sesimlesanadestegim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-500 text-amber-700 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-10 pt-8 border-t border-amber-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-stone-500">
              © {currentYear} Sesimle Sana Desteğim. Tüm hakları saklıdır.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-stone-500">
              Gönüllülük esasıyla, <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />{" "}
              ile yapılmıştır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
