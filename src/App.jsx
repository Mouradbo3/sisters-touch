import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logoImg from './assets/logo.jpg';
import spaInteriorImg from './assets/moroccan-spa-interior.jpg';
import spaToolsImg from './assets/spa-tools-essentials.jpg';
import massageRoomImg from './assets/massage-room.jpg';
import mapImg from './assets/map.jpg';
import manicureNailsImg from './assets/manicure-nails.jpg';
import spaInteriorDetailImg from './assets/spa-interior-detail.jpg';
import nailsVideo from './assets/nails-video.mp4';
import spaTreatmentVideo from './assets/spa-treatment-video.mp4';

const galleryMedia = [
  { type: 'image', src: spaInteriorImg, label: 'Luxury spa interior', category: 'spa' },
  { type: 'video', src: spaTreatmentVideo, label: 'Premium spa treatment', category: 'spa' },
  { type: 'image', src: manicureNailsImg, label: 'Manicure artistry', category: 'nails' },
  { type: 'video', src: nailsVideo, label: 'Nail design showcase', category: 'nails' },
  { type: 'image', src: spaToolsImg, label: 'Spa essentials', category: 'spa' },
  { type: 'image', src: massageRoomImg, label: 'Massage ambience', category: 'massage' },
  { type: 'image', src: spaInteriorDetailImg, label: 'Luxury pedicure', category: 'pedicure' },
];

const serviceCategories = [
  {
    id: 'hammam',
    name: 'Hammam Services',
    icon: '🛁',
    description: 'Rituel hammam traditionnel avec gommage, massage et soin du visage dans un écrin doré.',
    items: [
      { name: 'Hammam Petite Fille', price: '50 MAD' },
      { name: 'Hammam Adolescente', price: '80 MAD' },
      { name: 'Hammam Classic', price: '100 MAD' },
      { name: 'Hammam Ouarzazi', price: '130 MAD', duration: 'Savon noir, henné + nila, massage aux 20 herbes, masque visage' },
      { name: 'Hammam Sisters’ Touch', price: '250 MAD', duration: 'Savon noir, henné, massage coco, masque visage, boisson chaude, brushing' },
      { name: 'Hammam Signature', price: '350 MAD', duration: 'Cabine privée, gommage, massage, enveloppement, masque visage, massage pieds, 1h30' },
    ],
  },
  {
    id: 'hair',
    name: 'Hair & Coiffure',
    icon: '💇‍♀️',
    description: 'Soins coiffure et traitements cheveux pour une finition chic et moderne.',
    items: [
      { name: 'Brushing', price: 'à partir de 30 MAD' },
      { name: 'Touching', price: 'à partir de 20 MAD' },
      { name: 'Babyliss', price: '100 MAD' },
      { name: 'Coupe Classique', price: '50 MAD' },
      { name: 'Coupe Pointe', price: '25 MAD' },
      { name: 'Shampoing', price: '10 MAD' },
      { name: 'Shampoing + Démêleur', price: '20 MAD' },
      { name: 'Coloration Application', price: '80 MAD' },
      { name: 'Coloration Complete', price: 'à partir de 200 MAD' },
      { name: 'Mèches Bonnet', price: 'à partir de 200 MAD' },
      { name: 'Mèches Classic', price: 'à partir de 300 MAD' },
      { name: 'Balayage / Ombré', price: 'à partir de 500 MAD' },
      { name: 'Lissage Sorali', price: 'à partir de 800 MAD' },
      { name: 'Soin Hydratant', price: '200 MAD' },
      { name: 'Soin aux Huiles', price: '80 MAD' },
    ],
  },
  {
    id: 'nails',
    name: 'Nail Services',
    icon: '💅',
    description: 'Manucure et pédicure raffinées pour des mains et des pieds parfaits.',
    items: [
      { name: 'Manucure Classic', price: '70 MAD' },
      { name: 'Manucure Natus', price: '90 MAD' },
      { name: 'Pédicure Classic', price: '100 MAD' },
      { name: 'Pédicure Natus', price: '120 MAD' },
      { name: 'Semi Permanent Mains', price: '100 MAD' },
      { name: 'Semi Permanent Pieds', price: '100 MAD' },
      { name: 'Pose Vernis', price: '20 MAD' },
      { name: 'Faux Ongles + Vernis', price: '70 MAD' },
      { name: 'Faux Ongles + Semi Permanent', price: '150 MAD' },
      { name: 'Pose Gel Capsules', price: '300 MAD' },
      { name: 'BIAB sans capsules', price: '250 MAD' },
      { name: 'BIAB avec capsules', price: '350 MAD' },
    ],
  },
  {
    id: 'massage',
    name: 'Massage & Facial Care',
    icon: '🌿',
    description: 'Thérapies sensorielles et soins visage pour un bien-être profond et lumineux.',
    items: [
      { name: 'Massage dos', price: '150 MAD' },
      { name: 'Massage relaxation', price: '300 MAD' },
      { name: 'Massage aux herbes', price: '350 MAD' },
      { name: 'Massage pierres chaudes', price: '400 MAD' },
      { name: 'Massage médical', price: '400 MAD' },
      { name: 'Massage amincissant', price: '500 MAD' },
      { name: 'Madérothérapie', price: '500 MAD' },
      { name: 'Soin visage basique', price: '200 MAD' },
      { name: 'Soin visage profond', price: '250 MAD' },
      { name: 'Soin éclat', price: '300 MAD' },
    ],
  },
  {
    id: 'epilation',
    name: 'Hair Removal & Makeup',
    icon: '✨',
    description: 'Épilation et maquillage chic pour une beauté impeccable et naturelle.',
    items: [
      { name: 'Sourcils', price: '20 MAD' },
      { name: 'Visage complet', price: '50 MAD' },
      { name: 'Jambes complètes', price: '100 MAD' },
      { name: 'Épilation complète', price: '250 MAD' },
      { name: 'Maquillage invités', price: '200 MAD' },
      { name: 'Pose cils', price: '50 MAD' },
      { name: 'Cils à cils', price: '100 MAD' },
    ],
  },
];

const testimonials = [
  { name: 'Amina B.', text: 'A perfect luxury retreat. The atmosphere, comfort and service are exceptional.', city: 'Ouarzazate' },
  { name: 'Sara L.', text: 'The gold and black interior feels premium. I felt beautifully cared for from start to finish.', city: 'Marrakech' },
  { name: 'Nadia R.', text: 'The hammam and massage were unforgettable — true luxury in every detail.', city: 'Casablanca' },
];

const openingHours = [
  { day: 'الثلاثاء', hours: '9ص–8م' },
  { day: 'الأربعاء', hours: '9ص–8م' },
  { day: 'الخميس', hours: '9ص–8م' },
  { day: 'الجمعة', hours: '9ص–8م' },
  { day: 'السبت', hours: '9ص–8م' },
  { day: 'الأحد', hours: '9ص–8م' },
  { day: 'الاثنين', hours: '9ص–8م' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition backdrop-blur-xl ${
          isScrolled ? 'bg-black/95 shadow-2xl' : 'bg-black/60'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 text-lg font-semibold tracking-[0.25em] text-gold uppercase">
            <img src={logoImg} alt="Sisters' Touch Logo" className="h-12 w-auto object-contain" />
            <span className="sr-only">Sisters’ Touch</span>
          </button>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.3em] text-beige/80">
            {['home', 'about', 'services', 'gallery', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={activeNav === section ? 'text-gold' : 'hover:text-gold'}
              >
                {section}
              </button>
            ))}
          </nav>
          <a
            href="https://wa.me/212661400752"
            className="hidden md:inline-flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-500"
          >
            WhatsApp Booking
          </a>
        </div>
      </motion.header>

      <main className="overflow-hidden">
        <section id="home" className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,210,150,0.08),_transparent_35%),linear-gradient(180deg,#000000_0%,#080605_55%,#040303_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(202,138,4,0.12),_transparent_20%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(5,150,105,0.12),_transparent_20%)]" />

          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center py-24">
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="rounded-full border border-white/10 bg-black/60 p-10 shadow-[0_50px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <img
                src={logoImg}
                alt="Sisters' Touch Logo"
                className="mx-auto h-[250px] w-[250px] rounded-full object-cover"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-12 max-w-3xl space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-beige/60">Luxury Spa & Beauty Salon</p>
              <h1 className="text-5xl font-serif font-bold leading-tight text-gold sm:text-6xl">
                Premium Spa Experiences for Discerning Clients
              </h1>
              <p className="mx-auto text-base leading-8 text-beige/70 sm:text-lg">
                Discover Sisters’ Touch in Ouarzazate — a luxury destination for manicure, pédicure, hammam, massage and coiffure in a calm, elegant setting.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button onClick={() => scrollTo('services')} className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-black transition hover:bg-amber-300">
                  Explore Services
                </button>
                <a href="https://wa.me/212661400752" className="rounded-full border border-gold px-8 py-3 text-sm font-semibold text-gold transition hover:bg-white/10">
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="bg-black px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-100/70">About Sisters’ Touch</p>
              <h2 className="text-4xl font-serif font-semibold text-gold">A real luxury spa destination in Ouarzazate</h2>
              <p className="text-beige/75 leading-8">
                Sisters’ Touch blends authentic Moroccan hammam rituals with premium manicure, pédicure and hair services. Our salon is built around the gold and black luxury identity of the brand — elegant, feminine and internationally refined.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: '1123', label: 'el Wahda' },
                  { value: 'High-end', label: 'Interior design' },
                  { value: 'Black & Gold', label: 'Brand palette' },
                  { value: 'Tourists', label: 'Trusted by' },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-black/40 p-5">
                    <p className="text-3xl font-semibold text-gold">{item.value}</p>
                    <p className="text-sm uppercase tracking-[0.25em] text-beige/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="grid gap-6">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
                <img src={spaInteriorImg} alt="Luxurious Moroccan spa interior" className="h-96 w-full rounded-[32px] object-cover transition-transform duration-500 ease-out hover:scale-[1.03]" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
                  <img src={spaToolsImg} alt="Manicure detail and luxury gold accessories" className="h-52 w-full rounded-[32px] object-cover transition-transform duration-500 ease-out hover:scale-[1.03]" />
                </div>
                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
                  <img src={massageRoomImg} alt="Relaxing spa room atmosphere" className="h-52 w-full rounded-[32px] object-cover transition-transform duration-500 ease-out hover:scale-[1.03]" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-[radial-gradient(circle_at_top,_rgba(202,138,4,0.1),transparent_25%),black] px-6 py-24">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-beige/60">Services & Tarifs</p>
            <h2 className="mt-4 text-5xl font-serif font-semibold text-gold">Un rituel beauté premium pour chaque soin</h2>
            <p className="mx-auto mt-6 max-w-2xl text-beige/70">
              Découvrez nos catégories de soins conçues pour une clientèle internationale en quête de luxe, de calme et de féminité.
            </p>
          </div>
          <div className="mt-16 grid gap-8 xl:grid-cols-2">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[36px] border border-gold/20 bg-black/40 p-8 shadow-[0_45px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/5"
              >
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gold/10 text-3xl text-gold shadow-[0_20px_40px_rgba(202,138,4,0.18)]">
                    {category.icon}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-beige/60">{category.name}</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">{category.name}</h3>
                  </div>
                </div>
                <p className="mb-8 text-beige/70">{category.description}</p>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-beige/70 sm:grid-cols-[1fr_auto]">
                      <div>
                        <p className="font-semibold text-white">{item.name}</p>
                        {item.duration && <p className="mt-1 text-sm text-beige/50">{item.duration}</p>}
                      </div>
                      <div className="text-right text-lg font-semibold text-gold">{item.price}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <a
                    href="https://wa.me/212661400752"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-black transition hover:bg-emerald-500"
                  >
                    Réserver ce soin
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-black px-6 py-24">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-beige/60">Galerie Luxe</p>
            <h2 className="mt-4 text-5xl font-serif font-semibold text-gold">Moments de Beauté</h2>
            <p className="mx-auto mt-6 max-w-2xl text-beige/70">
              Découvrez nos services en action à travers des images et vidéos cinématiques de notre salon premium.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {galleryMedia.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[32px] border border-gold/20 bg-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
              >
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    alt={media.label}
                    className="h-80 w-full object-cover transition duration-500 ease-out group-hover:scale-110"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-80 w-full object-cover transition duration-500 ease-out group-hover:scale-110"
                  >
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full transition duration-500 group-hover:translate-y-0">
                  <div className="flex items-center gap-2">
                    {media.type === 'video' && <span className="text-xl">▶︎</span>}
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-gold font-semibold">{media.category}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{media.label}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="bg-gradient-to-b from-black to-slate-950 px-6 py-24">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-beige/60">Testimonials</p>
            <h2 className="mt-4 text-5xl font-serif font-semibold text-gold">Trusted by international guests</h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[32px] border border-white/10 bg-black/40 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl"
              >
                <p className="text-beige/70 leading-8">“{item.text}”</p>
                <div className="mt-8 text-gold font-semibold">{item.name}</div>
                <div className="mt-1 text-sm text-beige/60">{item.city}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-black px-6 py-24">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-beige/60">Contact & Booking</p>
              <h2 className="mt-4 text-4xl font-serif font-semibold text-gold">Visit us in Ouarzazate</h2>
              <div className="mt-8 space-y-8 text-beige/70">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-beige/50">Address</p>
                  <p className="mt-3 text-lg">1123 el Wahda, Ouarzazate 45000</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-beige/50">Phone</p>
                  <a href="tel:+212661400752" className="mt-3 block text-lg text-gold">06 61 40 07 52</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-beige/50">Hours</p>
                  <div className="mt-3 grid gap-3 rounded-[24px] bg-black/40 p-5">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex items-center justify-between text-base text-beige/70">
                        <span>{item.day}</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="https://wa.me/212661400752" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-500">
                  WhatsApp Booking
                </a>
                <a href="https://www.facebook.com/Sisters.touch.ouarzazate/" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-beige transition hover:border-gold hover:text-gold">
                  Facebook Page
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
            >
              <a href="https://www.google.com/maps/search/?api=1&query=Sisters+Touch+Ouarzazate" target="_blank" rel="noreferrer" className="block overflow-hidden">
                <img src={mapImg} alt="Sisters Touch map" className="h-80 w-full object-cover transition duration-500 ease-out hover:scale-105" />
              </a>
              <div className="p-6 text-center bg-black/70">
                <p className="text-sm uppercase tracking-[0.35em] text-beige/60">Localisation</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Sisters+Touch+Ouarzazate" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10">
                  Voir sur Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-beige/60">
        <p>© 2026 Sisters’ Touch • Luxury Manicure & Pédicure • Ouarzazate</p>
      </footer>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/212661400752"
        className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-3xl text-black shadow-xl"
      >
        💬
      </motion.a>
    </div>
  );
}
