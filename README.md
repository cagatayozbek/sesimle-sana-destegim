# Sesimle Sana Desteğim — Engelsiz Eğitime Ses Ver

Sınavlara hazırlanan engelli bireylerin test kitaplarındaki soruları ve çözümleri okunarak erişilebilir hale getiren gönüllü bir topluluk hareketi.

**Canlı Site:** [sesimledestek-nab63egf.manus.space](https://sesimledestek-nab63egf.manus.space)

---

## 🎯 Misyon

Eğitimde eşitliğe ses vermek. Görme engelli ve fiziksel engelli bireylerin sınav hazırlık süreçlerini kolaylaştırmak amacıyla gönüllü okuyucularımız test kitaplarındaki soruları ve çözümleri sesli olarak kayıt altına alıyor. Bu kayıtlar engelli bireylere ücretsiz olarak ulaştırılıyor.

---

## 🌟 Tasarım Felsefesi

Bu proje **"Doğal Bağ"** tasarım felsefesiyle humanize edilmiştir:

- **Renk Paleti**: Sıcak krem (#FFF8F0), amber (#E8A838), koyu kahve (#2C1810) — soğuk mavi yerine
- **Tipografi**: Lora serif (başlıklar, editorial his) + Nunito sans-serif (gövde, okunabilirlik)
- **Görsel İçerik**: Gerçek insan fotoğrafları, samimi anlar, organik düzen
- **Animasyonlar**: Scroll-triggered fade-in, sayaç animasyonları, ses dalgası efektleri
- **Duygu**: Samimi, sıcak, güven veren, insani

---

## 📁 Proje Yapısı

```
sesimle-sana-destegim-humanized/
├── client/
│   ├── public/              # Favicon, robots.txt vb.
│   ├── src/
│   │   ├── components/      # Reusable UI bileşenleri
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── hooks/           # Custom React hooks
│   │   │   └── useScrollReveal.ts
│   │   ├── pages/           # Sayfa bileşenleri
│   │   │   ├── Home.tsx     # Ana sayfa (humanize tasarım)
│   │   │   └── NotFound.tsx
│   │   ├── contexts/        # React contexts
│   │   ├── lib/             # Utility fonksiyonları
│   │   ├── App.tsx          # Root component & routing
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles (Tailwind + özel animasyonlar)
│   └── index.html           # HTML template
├── server/                  # Placeholder (static-only proje)
├── shared/                  # Placeholder
├── package.json
└── README.md
```

---

## 🛠️ Teknoloji Stack

- **Frontend Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Fonts**: Google Fonts (Lora + Nunito)
- **Icons**: Lucide React

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+
- pnpm (veya npm/yarn)

### Adımlar

1. **Repository'yi klonla**
   ```bash
   git clone https://github.com/cagatayozbek/sesimle-sana-destegim.git
   cd sesimle-sana-destegim
   ```

2. **Bağımlılıkları yükle**
   ```bash
   pnpm install
   ```

3. **Geliştirme sunucusunu başlat**
   ```bash
   pnpm dev
   ```
   Tarayıcıda `http://localhost:3000` açılacak.

4. **Üretim için build et**
   ```bash
   pnpm build
   ```

5. **Üretim sunucusunu çalıştır**
   ```bash
   pnpm start
   ```

---

## 📋 Ana Bölümler

### 1. **Hero Section**
- Asimetrik düzen (sol: başlık + CTA, sağ: fotoğraf)
- Gerçek gönüllü fotoğrafı ve alıntı kartı
- Ses dalgası animasyonu rozeti
- Smooth scroll CTA butonları

### 2. **İstatistikler**
- Animasyonlu sayaç (100+, 500+, 50+)
- Sıcak amber arka plan
- Scroll-triggered animasyonlar

### 3. **Hakkımızda**
- Topluluk fotoğrafı + değerler kartı
- Editorial tipografi
- Samimi hikaye anlatımı

### 4. **Ne Yapıyoruz**
- Problem/Çözüm kartları
- Umut verici fotoğraf
- Listelenmiş faydalar

### 5. **Nasıl Çalışıyoruz**
- 4 adımlı organik düzen
- Sesli kayıt fotoğrafı
- Renkli adım kartları

### 6. **Destek Ol**
- 3 yol kartı (Gönüllü, Paylaş, Bağış)
- Sıcak renkler (amber, stone, orange)
- CTA butonları

### 7. **SSS**
- Accordion bileşeni
- Smooth açılma/kapanma animasyonu
- 6 sık sorulan soru

### 8. **İletişim**
- Form (ad, email, konu, mesaj)
- Form validasyonu ve başarı mesajı
- İletişim bilgileri

### 9. **Footer**
- Logo, açıklama, hızlı linkler
- Sosyal medya ikonları
- Copyright bilgisi

---

## 🎨 Özel Animasyonlar

```css
/* Scroll ile beliren animasyon */
.scroll-reveal { opacity: 0; transform: translateY(20px); }
.scroll-reveal.visible { opacity: 1; transform: translateY(0); }

/* Sayaç animasyonu */
.animate-count-up { animation: countUp 0.5s ease-out forwards; }

/* Ses dalgası */
.wave-bar { animation: waveform 1.2s ease-in-out infinite; }

/* Sıcak gölge */
.warm-shadow { box-shadow: 0 4px 24px -4px rgba(180, 100, 40, 0.12); }
```

---

## 🖼️ Görseller

Tüm görseller AI tarafından oluşturulmuş ve sıcak, samimi anları yansıtmaktadır:

- `hero-volunteer.jpg` — Gönüllü okuyucu mikrofon başında
- `community-warmth.jpg` — Topluluk üyeleri birlikte çalışıyor
- `accessibility-hope.jpg` — Kulaklıkla dinleyen umutlu genç
- `volunteer-recording.jpg` — Telefon ile sesli kayıt

Görseller CDN üzerinden sunulmaktadır.

---

## 🌐 Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| Sıcak Krem | #FFF8F0 | Arka plan |
| Amber | #E8A838 | Ana vurgu, butonlar |
| Turuncu | #EA580C | İkincil vurgu |
| Koyu Kahve | #2C1810 | Metin |
| Açık Gri | #F5F0EB | Kart arka planları |

---

## 🔤 Tipografi

| Font | Kullanım | Ağırlık |
|------|----------|---------|
| Lora (Serif) | Başlıklar, H1-H6 | 400, 500, 600, 700 |
| Nunito (Sans) | Gövde metin, UI | 400, 500, 600, 700, 800 |

---

## 📱 Responsive Tasarım

- **Mobile First** yaklaşımı
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Tüm bölümler mobil, tablet ve desktop'ta optimize edilmiş

---

## ♿ Erişilebilirlik

- Semantic HTML5 yapısı
- ARIA labels ve roles
- Keyboard navigasyonu destekli
- Yüksek kontrast renk paleti
- Alt text tüm görsellerde

---

## 🚀 Deployment

Site şu anda **Manus** platformunda deploy edilmiştir:
- **URL**: https://sesimledestek-nab63egf.manus.space
- **Custom Domain**: Yapılandırılabilir

Kendi sunucunuza deploy etmek için:
```bash
pnpm build
# dist/ klasörünü sunucunuza yükleyin
```

---

## 🤝 Katkıda Bulunma

Bu proje açık kaynaktır ve katkıları memnuniyetle karşılar. Pull request göndermeden önce lütfen bir issue açınız.

### Katkı Adımları
1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'e push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açınız

---

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.

---

## 📧 İletişim

- **E-posta**: iletisim@sesimlesanadestegim.org
- **Instagram**: [@sesimlesanadestegim](https://instagram.com/sesimlesanadestegim)
- **Twitter/X**: [@sesimlesanadestegim](https://twitter.com/sesimlesanadestegim)
- **YouTube**: [@sesimlesanadestegim](https://youtube.com/@sesimlesanadestegim)

---

## 🙏 Teşekkürler

Bu proje tüm gönüllü okuyuculara, destekçilere ve engelli bireylerin eğitim hakkını savunan herkese adanmıştır.

**Sesin bir fark yaratabilir. Bugün gönüllü ol.**

---

## 📊 İstatistikler

- **Gönüllü Okuyucu**: 100+
- **Okunan Soru**: 500+
- **Desteklenen Birey**: 50+

---

## 🔮 Gelecek Planları

- [ ] Gerçek gönüllü hikayeleri bölümü
- [ ] Sosyal medya entegrasyonu (Instagram/YouTube feed)
- [ ] Etki haritası (Türkiye haritasında gönüllü dağılımı)
- [ ] Mobil uygulama
- [ ] Çoklu dil desteği
- [ ] Backend ve veritabanı (gönüllü yönetimi)

---

**Yapılış Tarihi**: Nisan 2026  
**Son Güncelleme**: Nisan 2026  
**Tasarım Felsefesi**: Doğal Bağ — Editoryal Gazete + Sıcak Topluluk Blogu
