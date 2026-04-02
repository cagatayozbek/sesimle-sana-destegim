/*
 * Home — "Doğal Bağ" Tasarım Felsefesi
 * ----------------------------------------
 * Sıcak krem arka plan, Lora serif başlıklar, Nunito gövde
 * Gerçek insan fotoğrafları, hikaye anlatımı, organik düzen
 * Scroll-triggered animasyonlar, sıcak amber/turuncu vurgular
 */

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Mic, Heart, Users, BookOpen, ArrowRight, Check, AlertCircle, Share2, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Görsel URL'leri
const HERO_IMG = "/hero.webp";
const COMMUNITY_IMG = "/about.jpg";
const HOPE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663506796281/NaB63EgFCT9S2CcEzHqHHX/accessibility-hope-ez64q7pkNAUCigmpu6ys9u.webp";
const RECORDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663506796281/NaB63EgFCT9S2CcEzHqHHX/volunteer-recording-QXvSjdxjqdJhD2PHF4cyzb.webp";

// Sayaç bileşeni
function CountUpNumber({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1800;
            const increment = target / (duration / 16);
            let start = 0;
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-amber-600" style={{ fontFamily: "'Lora', serif" }}>
      {count}{suffix}
    </div>
  );
}

// Scroll reveal bileşeni
function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      {children}
    </div>
  );
}

// SSS Accordion
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-amber-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="text-base font-semibold text-stone-700"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-stone-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// Ses dalgası animasyonu
function WaveformIcon() {
  return (
    <div className="flex items-center gap-0.5 h-6">
      {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6].map((h, i) => (
        <div
          key={i}
          className="w-1 bg-amber-400 rounded-full wave-bar"
          style={{
            height: `${h * 24}px`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Gönüllü olmak istiyorum",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderimi simülasyonu
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 4000);
    setFormData({ name: "", email: "", subject: "Gönüllü olmak istiyorum", message: "" });
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO — Asimetrik düzen, gerçek fotoğraf
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Arka plan dokusu */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 60%),
                              radial-gradient(circle at 80% 20%, rgba(234, 88, 12, 0.08) 0%, transparent 50%)`,
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24">
            {/* Sol — İçerik */}
            <div className="space-y-8">
              {/* Rozet */}
              <div className="inline-flex items-center gap-2.5 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
                <WaveformIcon />
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Gönüllü Destek Hareketi
                </span>
              </div>

              {/* Başlık */}
              <div className="space-y-3">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Karanlık dünyamı{" "}
                  <em className="not-italic text-amber-600">aydınlatan</em>{" "}
                  ses
                </h1>
              </div>

              {/* Açıklama */}
              <p
                className="text-lg text-stone-600 leading-relaxed max-w-lg"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Sınavlara hazırlanan görme engellilerin test kitaplarındaki soruları ve
                çözümleri okunarak erişilebilir hale getiriyoruz.{" "}
                <strong className="text-stone-700 font-semibold">
                  Her okunan soru, bir adım daha eşit bir eğitim demek.
                </strong>
              </p>

              {/* CTA Butonları */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("#iletisim")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-base"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  <Mic className="w-4 h-4" />
                  Gönüllü Ol
                </button>
                <button
                  onClick={() => scrollToSection("#nasil-calisiyoruz")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-amber-50 text-stone-700 font-bold rounded-full border border-amber-200 hover:border-amber-300 transition-all duration-200 text-base"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Nasıl çalışıyor?
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Küçük sosyal kanıt */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {["bg-amber-400", "bg-orange-400", "bg-yellow-500", "bg-amber-600"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {["A", "M", "S", "E"][i]}
                      </div>
                    )
                  )}
                </div>
                <p className="text-sm text-stone-500">
                  <strong className="text-stone-700">100+</strong> gönüllü okuyucu katıldı
                </p>
              </div>
            </div>

            {/* Sağ — Fotoğraf */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden warm-shadow-lg">
                <img
                  src={HERO_IMG}
                  alt="Gönüllü okuyucu mikrofon başında kitap okuyor"
                  className="w-full h-[480px] lg:h-[560px] object-cover"
                />
                {/* Fotoğraf üstü alıntı kartı */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p
                    className="text-sm text-stone-700 italic leading-relaxed"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    "Sesimi kullanarak birine dokunabilmek, gönüllülüğün en saf hali."
                  </p>
                  <p className="text-xs text-amber-600 font-bold mt-2"></p>
                </div>
              </div>

              {/* Dekoratif element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-full opacity-60 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-50 rounded-full opacity-80 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          İSTATİSTİKLER — Sıcak, insani sayılar
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-amber-500">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { target: 100, label: "Gönüllü okuyucu", icon: <Users className="w-6 h-6" /> },
              { target: 500, label: "Okunan soru", icon: <BookOpen className="w-6 h-6" /> },
              { target: 50, label: "Desteklenen birey", icon: <Heart className="w-6 h-6" /> },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="space-y-2">
                  <div className="flex justify-center text-amber-100 mb-3">{stat.icon}</div>
                  <CountUpNumber target={stat.target} />
                  <p
                    className="text-amber-100 font-semibold text-base"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HAKKIMIZDA — Hikaye anlatımı, fotoğraf
      ═══════════════════════════════════════════════════ */}
      <section id="hakkimizda" className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Sol — Fotoğraf */}
            <ScrollReveal>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden warm-shadow">
                  <img
                    src={COMMUNITY_IMG}
                    alt="Topluluk üyeleri birlikte çalışıyor"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                {/* Değerler kartı */}
                <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl p-5 shadow-lg warm-shadow max-w-[200px]">
                  <div className="space-y-2.5">
                    {["Gönüllülük esaslı", "Erişilebilirlik odaklı", "Toplumsal fayda"].map(
                      (val) => (
                        <div key={val} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-amber-600" />
                          </div>
                          <span className="text-xs font-semibold text-stone-700">{val}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-100 rounded-full opacity-50 -z-10" />
              </div>
            </ScrollReveal>

            {/* Sağ — İçerik */}
            <div className="space-y-6">
              <ScrollReveal>
                <span
                  className="text-sm font-bold text-amber-600 uppercase tracking-widest"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Hakkımızda
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Eğitimde eşitliğe{" "}
                  <em className="not-italic text-amber-600">ses veriyoruz</em>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-stone-600 leading-relaxed">
                  <strong className="text-stone-700">Sesimle Sana Desteğim</strong>, görme
                  engellilerin sınav hazırlık süreçlerini
                  kolaylaştırmak amacıyla kurulan gönüllü bir topluluktur.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-stone-600 leading-relaxed">
                  Test kitaplarındaki soruları ve çözümleri okuyarak sesli içeriklere
                  dönüştürüyoruz. Böylece herkes eşit koşullarda sınavlara hazırlanabiliyor.
                  Çünkü eğitim bir haktır — engel değil.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <button
                  onClick={() => scrollToSection("#iletisim")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Bize katıl
                  <ArrowRight className="w-4 h-4" />
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NE YAPIYORUZ — Problem/Çözüm, gerçek fotoğraf
      ═══════════════════════════════════════════════════ */}
      <section id="ne-yapiyoruz" className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14 space-y-4">
              <span
                className="text-sm font-bold text-amber-600 uppercase tracking-widest"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Ne Yapıyoruz
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Sorunu biliyoruz,{" "}
                <em className="not-italic text-amber-600">çözümü birlikte üretiyoruz</em>
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Eğitim materyallerinin erişilebilir olmaması, görme engellilerin önündeki en
                büyük engellerden biridir.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Problem Kartı */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-3xl p-7 warm-shadow border border-red-50">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <h3
                  className="text-xl font-bold text-stone-800 mb-4"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Problem
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Test kitapları ve sınav materyalleri genellikle yalnızca görsel formatta
                  sunuluyor. Bu durum görme engellilerin bağımsız
                  çalışmasını zorlaştırıyor.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Kitaplar yalnızca basılı formatta",
                    "Sesli çözüm kaynağı çok sınırlı",
                    "Bireysel destek pahalı ve erişilmez",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 flex-shrink-0" />
                      <span className="text-sm text-stone-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Orta — Fotoğraf */}
            <ScrollReveal delay={200}>
              <div className="rounded-3xl overflow-hidden warm-shadow h-full min-h-[300px]">
                <img
                  src={HOPE_IMG}
                  alt="Kulaklıkla dinleyen umutlu genç"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </ScrollReveal>

            {/* Çözüm Kartı */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-3xl p-7 warm-shadow border border-green-50">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-5">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h3
                  className="text-xl font-bold text-stone-800 mb-4"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Çözümümüz
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Gönüllü okuyucularımız test kitaplarındaki soruları ve çözümleri sesli
                  olarak kayıt altına alıyor. Bu kayıtlar görme engellilere ücretsiz olarak
                  ulaştırılıyor.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Ücretsiz sesli içerik üretimi",
                    "Gönüllü ağı ile sürdürülebilirlik",
                    "Kolay erişim ve paylaşım",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-stone-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NASIL ÇALIŞIYORUZ — 4 adım, organik düzen
      ═══════════════════════════════════════════════════ */}
      <section id="nasil-calisiyoruz" className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14 space-y-4">
              <span
                className="text-sm font-bold text-amber-600 uppercase tracking-widest"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Sürecimiz
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Nasıl çalışıyoruz?
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Basit ve etkili bir süreçle, gönüllülerimiz soruları seslendiriyor, biz de
                ihtiyaç sahiplerine ulaştırıyoruz.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Sol — Adımlar */}
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Kaynak Belirleme",
                  desc: "Sınavlara yönelik test kitaplarını ve materyalleri belirliyoruz. YKS, KPSS ve ALES önceliğimiz.",
                  color: "bg-amber-50 border-amber-200",
                  numColor: "text-amber-500",
                },
                {
                  step: "02",
                  title: "Sesli Okuma",
                  desc: "Gönüllü okuyucularımız soruları ve çözümleri kendi cihazlarıyla seslendiriyor. Profesyonel ekipman gerekmez.",
                  color: "bg-orange-50 border-orange-200",
                  numColor: "text-orange-500",
                },
                {
                  step: "03",
                  title: "Düzenleme",
                  desc: "Kayıtlar ekibimiz tarafından düzenlenerek erişilebilir formata dönüştürülüyor.",
                  color: "bg-yellow-50 border-yellow-200",
                  numColor: "text-yellow-600",
                },
                {
                  step: "04",
                  title: "Ulaştırma",
                  desc: "İçerikler ihtiyaç sahibi bireylere ücretsiz olarak ulaştırılıyor.",
                  color: "bg-green-50 border-green-200",
                  numColor: "text-green-600",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 120}>
                  <div
                    className={`flex gap-5 p-5 rounded-2xl border ${item.color} transition-all duration-200 hover:shadow-sm`}
                  >
                    <div
                      className={`text-3xl font-bold ${item.numColor} flex-shrink-0 leading-none`}
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-stone-800 mb-1.5"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Sağ — Fotoğraf */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden warm-shadow">
                  <img
                    src={RECORDING_IMG}
                    alt="Telefon ile sesli kayıt yapılıyor"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-100 rounded-full opacity-60 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DESTEK OL — 3 yol, sıcak kartlar
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-amber-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14 space-y-4">
              <span
                className="text-sm font-bold text-amber-600 uppercase tracking-widest"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Katıl
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Destek olmanın{" "}
                <em className="not-italic text-amber-600">birçok yolu var</em>
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto">
                Sesini, zamanını veya desteğini paylaşarak bu harekete katılabilirsin.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Mic className="w-7 h-7" />,
                title: "Gönüllü Okuyucu Ol",
                desc: "Sesini kullanarak soruları oku ve görme engellilerin eğitimine katkıda bulun. Profesyonel ekipman gerekmez, sadece samimi bir ses.",
                cta: "Gönüllü Ol",
                bg: "bg-amber-500",
                textBg: "bg-amber-600",
                href: "#iletisim",
              },
              {
                icon: <Share2 className="w-7 h-7" />,
                title: "Topluluğu Yay",
                desc: "Sosyal medyada paylaşarak, çevreni bilgilendirerek farkındalık oluştur. Her paylaşım yeni bir kapı açar.",
                cta: "Paylaş",
                bg: "bg-stone-700",
                textBg: "bg-stone-800",
                href: "#iletisim",
              },
              {
                icon: <DollarSign className="w-7 h-7" />,
                title: "Bağış Yap",
                desc: "Maddi desteğinle ekipman, kaynak ve organizasyon süreçlerine katkı sağla. Her katkı değerlidir.",
                cta: "Destek Ol",
                bg: "bg-orange-500",
                textBg: "bg-orange-600",
                href: "#iletisim",
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div
                  className={`${card.bg} rounded-3xl p-7 text-white h-full flex flex-col justify-between warm-shadow-lg`}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-white/85 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                  <button
                    onClick={() => scrollToSection(card.href)}
                    className={`mt-6 w-full py-3 ${card.textBg} hover:opacity-90 text-white font-bold rounded-full transition-all duration-200 text-sm`}
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {card.cta}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SSS — Accordion, sıcak tasarım
      ═══════════════════════════════════════════════════ */}
      <section id="sss" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 space-y-4">
                <span
                  className="text-sm font-bold text-amber-600 uppercase tracking-widest"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  SSS
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-800"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Sık sorulan sorular
                </h2>
                <p className="text-stone-600">Merak ettiğiniz konularda yanıt bulun.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white rounded-3xl p-6 md:p-8 warm-shadow">
                {[
                  {
                    q: "Gönüllü olmak için ne yapmam gerekiyor?",
                    a: "İletişim formumuz üzerinden bize ulaşmanız yeterli. Gönüllü ekibimiz sizinle iletişime geçerek süreci anlatacak ve size uygun görevlendirme yapacaktır.",
                  },
                  {
                    q: "Hangi sınavlara yönelik içerik üretiyorsunuz?",
                    a: "Şu an için YKS, KPSS ve ALES gibi büyük sınavlara yönelik test kitaplarını önceliklendiriyoruz. İhtiyaca göre kapsam genişleyebilir.",
                  },
                  {
                    q: "Sesli kayıtlar nasıl yapılıyor?",
                    a: "Gönüllülerimiz kendilerine atanan soruları kendi cihazlarıyla (telefon veya bilgisayar) kaydeder. Kayıtlar düzenlendikten sonra erişime açılır. Profesyonel ekipman gerekmez; net ve anlaşılır bir okuma yeterlidir.",
                  },
                  {
                    q: "İçeriklere nasıl ulaşabilirim?",
                    a: "İletişim bölümünden bize ulaşarak mevcut içerikler hakkında bilgi alabilirsiniz. İçeriklerimizi sosyal medya kanallarımız ve iletişim ağımız üzerinden paylaşıyoruz.",
                  },
                  {
                    q: "Bağış yaparak nasıl destek olabilirim?",
                    a: "Bağışlarınız ekipman alımı, kaynak temini ve organizasyon süreçlerinin sürdürülebilirliği için kullanılır. Detaylı bilgi için iletişim kısmından bize ulaşabilirsiniz.",
                  },
                  {
                    q: "Organizasyonunuz kâr amacı güdüyor mu?",
                    a: "Hayır. Sesimle Sana Desteğim, tamamen gönüllülük esasıyla çalışan, kâr amacı gütmeyen bir topluluk hareketidir.",
                  },
                ].map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          İLETİŞİM — Form, sıcak tasarım
      ═══════════════════════════════════════════════════ */}
      <section id="iletisim" className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 space-y-4">
                <span
                  className="text-sm font-bold text-amber-600 uppercase tracking-widest"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  İletişim
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-800"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Bizimle iletişime geçin
                </h2>
                <p className="text-stone-600">
                  Gönüllü olmak, destek sağlamak veya daha fazla bilgi almak için bize ulaşın.
                  En kısa sürede dönüş yapacağız.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white rounded-3xl p-7 md:p-10 warm-shadow">
                {formStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-800">Mesajınız iletildi!</p>
                      <p className="text-xs text-green-600">En kısa sürede size dönüş yapacağız.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-stone-700"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        Adınız *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Adınız Soyadınız"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-amber-50/50 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-stone-700"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        E-posta *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="ornek@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-amber-50/50 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-stone-700"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      Konu
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Gönüllü olmak istiyorum"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-amber-50/50 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-stone-700"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Mesajınızı buraya yazın..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-amber-50/50 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-base"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    Mesaj Gönder
                  </button>
                </form>

                {/* İletişim Bilgileri */}
                <div className="mt-8 pt-7 border-t border-amber-100 flex flex-col sm:flex-row gap-4 text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 text-xs">@</span>
                    </div>
                    <span>iletisim@sesimlesanadestegim.org</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA BANNER — Son çağrı
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="container">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-10 md:p-14 text-center text-white warm-shadow-lg">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Sesin bir fark yaratabilir
              </h2>
              <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto">
                Bugün gönüllü ol. Birinin sınavını, belki de hayatını değiştir.
              </p>
              <button
                onClick={() => scrollToSection("#iletisim")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-full hover:bg-amber-50 transition-all duration-200 shadow-md hover:shadow-lg text-base"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <Mic className="w-5 h-5" />
                Hemen Gönüllü Ol
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
