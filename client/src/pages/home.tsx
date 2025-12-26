import { Link } from "wouter";
import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Phone, 
  Star, 
  Menu, 
  X, 
  Car, 
  Plane, 
  Hotel, 
  Ship, 
  CreditCard, 
  CheckCircle,
  Fuel,
  Armchair,
  Cog,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Zap,
  Compass,
  Award,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Assets
import heroImage from "@assets/generated_images/five_luxury_supercars_lined_up_front_view.png";
import yachtImage from "@assets/generated_images/luxury_yacht_in_dubai_marina.png";
import suvImage from "@assets/stock_images/luxury_suv_black_mer_79016e67.jpg";
import sportImage from "@assets/stock_images/red_ferrari_sports_c_60c5bd94.jpg";
import dubaiImg from "@assets/stock_images/dubai_skyline,_abu_d_cbc28aa7.jpg";
import abuDhabiImg from "@assets/stock_images/dubai_skyline,_abu_d_43901737.jpg";
import sharjahImg from "@assets/stock_images/dubai_skyline,_abu_d_5e56b4ed.jpg";
import ajmanImg from "@assets/stock_images/dubai_skyline,_abu_d_089aba6f.jpg";
import fujairahImg from "@assets/stock_images/dubai_skyline,_abu_d_15ca0745.jpg";
import step1Img from "@assets/stock_images/modern_vector_illust_69ed548a.jpg";
import step2Img from "@assets/stock_images/modern_vector_illust_4dbc8340.jpg";
import step3Img from "@assets/stock_images/modern_vector_illust_88012a12.jpg";
import brand1 from "@assets/stock_images/luxury_car_brand_log_b357a37a.jpg";
import brand2 from "@assets/stock_images/luxury_car_brand_log_6d7ae029.jpg";
import brand3 from "@assets/stock_images/luxury_car_brand_log_244afc9d.jpg";
import brand4 from "@assets/stock_images/luxury_car_brand_log_6548590a.jpg";
import brand5 from "@assets/stock_images/luxury_car_brand_log_56156f1f.jpg";
import ferrariImage from "@assets/stock_images/red_ferrari_sports_c_4af35155.jpg";
import mclarenBlueImage from "@assets/stock_images/blue_mclaren_sports__5489a8b2.jpg";
import mclarenYellowImage from "@assets/stock_images/yellow_mclaren_sport_08c298e0.jpg";
import lamborghiniImage from "@assets/stock_images/red_lamborghini_spor_7ae12b0f.jpg";
import rollsRoyceImage from "@assets/stock_images/rolls_royce_ghost_ca_cd0a3cad.jpg";
import bentleyImage from "@assets/stock_images/bentley_flying_spur__62b86e1e.jpg";
import mercedesSImage from "@assets/stock_images/mercedes_s-class_sed_a124f049.jpg";
import bmw7Image from "@assets/stock_images/bmw_7_series_sedan_w_86b024a0.jpg";
import rakImg from "@assets/stock_images/ras_al_khaimah_skyli_0f376080.jpg";
import luxuryIconImg from "@assets/generated_images/luxury_sedan_silhouette_icon_style.png";
import suvIconImg from "@assets/generated_images/luxury_suv_silhouette_icon_style.png";
import sportsIconImg from "@assets/generated_images/sports_car_silhouette_icon_style.png";
import convertibleIconImg from "@assets/generated_images/convertible_car_silhouette_icon_style.png";
import economyIconImg from "@assets/generated_images/economy_car_silhouette_icon_style.png";
import evIconImg from "@assets/generated_images/electric_car_silhouette_icon_style.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("car-rental");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Car Rental", href: "#rentals" },
    { name: "Airport Transfer", href: "#transfer" },
    { name: "Yacht Rental", href: "#yacht" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const categories = [
    { name: "Luxury", image: luxuryIconImg },
    { name: "SUV", image: suvIconImg },
    { name: "Sports", image: sportsIconImg },
    { name: "Convertible", image: convertibleIconImg },
    { name: "Economy", image: economyIconImg },
    { name: "Electric (EV)", image: evIconImg },
    { name: "Chauffeur", image: luxuryIconImg },
    { name: "Standard", image: economyIconImg },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      
      {/* 1. Header (Sticky & Transparent) */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white/10 backdrop-blur-sm py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? "text-primary" : "text-white"}`}>
            RentAnyCar<span className={isScrolled ? "text-foreground" : "text-white"}>Dubai</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-4 text-xs font-medium ${isScrolled ? "text-foreground" : "text-white"}`}>
              <button className="flex items-center gap-1 hover:text-primary font-bold">ENG <ChevronDown className="w-3 h-3" /></button>
              <button className="flex items-center gap-1 hover:text-primary font-bold">AED <ChevronDown className="w-3 h-3" /></button>
              <button className="flex items-center gap-1 hover:text-primary font-bold">Dubai <ChevronDown className="w-3 h-3" /></button>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Book Now</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={isScrolled ? "text-black" : "text-white"} /> : <Menu className={isScrolled ? "text-black" : "text-white"} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 lg:hidden border-t"
            >
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <hr />
              <Button className="w-full bg-primary">Book Now</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Bright Background Image with Strong Overlay for Readability */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Luxury Car Dubai" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 text-center -mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight text-white"
          >
            Premium Car Rentals in Dubai
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 font-light"
          >
            Luxury, Sports & Economy Cars at the Best Prices
          </motion.p>

          {/* 3. Services Tabs & Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden -mb-20 relative z-20"
          >
            <div className="flex overflow-x-auto border-b">
              {[
                { id: 'car-rental', icon: Car, label: 'Car Rental' },
                { id: 'transfer', icon: Plane, label: 'Airport Transfer' },
                { id: 'yacht', icon: Ship, label: 'Yacht' },
                { id: 'hotel', icon: Hotel, label: 'Hotel' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold transition-all
                    ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="p-6 md:p-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Pick-up Location</label>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 bg-gray-50 text-gray-900">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <SelectValue placeholder="Dubai International Airport" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dxb">Dubai Int. Airport (DXB)</SelectItem>
                      <SelectItem value="downtown">Downtown Dubai</SelectItem>
                      <SelectItem value="marina">Dubai Marina</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Pick-up Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-primary" />
                    <Input type="date" className="h-12 pl-10 border-gray-200 bg-gray-50 text-gray-900" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Drop-off Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-primary" />
                    <Input type="date" className="h-12 pl-10 border-gray-200 bg-gray-50 text-gray-900" />
                  </div>
                </div>

                <div className="flex items-end">
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-lg font-semibold rounded-lg">
                    Find a Car
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. How It Works - Premium Modern Flow */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-thin font-serif mb-4">The Seamless Experience</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light italic">Your journey to luxury starts here</p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
              {[
                { 
                  icon: Car, 
                  title: "1. Select Category", 
                  step: "01",
                  desc: "Browse our premium fleet and select your preferred car category or brand.",
                  color: "from-blue-500/10 to-transparent"
                },
                { 
                  icon: Compass, 
                  title: "2. Select Model", 
                  step: "02",
                  desc: "Choose the specific luxury model that fits your style and requirements.",
                  color: "from-primary/10 to-transparent"
                },
                { 
                  icon: CreditCard, 
                  title: "3. Make Payment", 
                  step: "03",
                  desc: "Confirm your booking with our secure and fast payment process.",
                  color: "from-amber-500/10 to-transparent"
                },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`absolute -inset-4 bg-gradient-to-br ${item.color} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                  
                  <div className="relative flex flex-col items-center">
                    <div className="mb-8 relative">
                      <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 relative z-10 border border-gray-50">
                        <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                      <span className="absolute -top-6 -right-6 text-7xl font-serif font-black text-gray-200/80 group-hover:text-primary/20 transition-all duration-500 -z-0">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold mb-4 text-foreground text-center">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-center font-light text-sm md:text-base max-w-sm">
                      {item.desc}
                    </p>
                    
                    <div className="mt-8 w-12 h-1 bg-gray-100 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-14 text-lg shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1">
              Start Your Booking
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Car Categories - One Row with Silhouette Icons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-thin font-serif mb-4">Car Categories</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-4 overflow-x-auto pb-6">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 min-w-max hover:scale-110 transition-transform duration-300 cursor-pointer group"
              >
                <div className="h-16 w-24 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <img src={cat.image} alt={cat.name} className="h-full w-full object-contain filter brightness-0" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors text-center whitespace-nowrap">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bestseller Cars */}
      <section className="py-16 bg-gray-50" id="rentals">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-thin font-serif mb-4">Our Bestsellers</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light italic">Top rated vehicles chosen by our premium clients</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CarCard 
              image={suvImage} 
              name="Mercedes-Benz G63 AMG" 
              price="2,500" 
              offerPrice="2,200"
              sports
              features={{ seats: 5, fuel: 'Petrol', trans: 'Auto' }}
            />
            <CarCard 
              image={ferrariImage} 
              name="Ferrari F8 Tributo" 
              price="4,200" 
              offerPrice="3,700"
              sports
              features={{ seats: 2, fuel: 'Petrol', trans: 'Auto' }}
            />
            <CarCard 
              image={lamborghiniImage} 
              name="Rolls Royce Cullinan" 
              price="6,000" 
              offerPrice="5,200"
              sports
              features={{ seats: 5, fuel: 'Petrol', trans: 'Auto' }}
            />
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-10 h-14 hover:bg-primary hover:text-white transition-all duration-300">
              View All Bestsellers
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Brands - Modern with Logos & Heading */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-thin font-serif mb-4">Premium Brands</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[brand1, brand2, brand3, brand4, brand5].map((brandImage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="h-32 flex items-center justify-center p-6 rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-lg hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
              >
                <img src={brandImage} alt="Brand" className="h-full w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Sports Cars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-thin font-serif mb-4">Sports Car Collection</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light italic">Feel the adrenaline with our performance fleet</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
             {[
               { name: 'Ferrari', price: '8,000', offer: '7,200', image: ferrariImage },
               { name: 'McLaren', price: '4,800', offer: '4,410', image: mclarenBlueImage },
               { name: 'McLaren', price: '3,300', offer: '2,970', image: mclarenYellowImage },
               { name: 'Lamborghini', price: '4,000', offer: '2,600', image: lamborghiniImage }
             ].map((car, idx) => (
                <CarCard 
                  key={idx}
                  image={car.image} 
                  name={car.name} 
                  price={car.price}
                  offerPrice={car.offer}
                  compact
                  sports
                  features={{ seats: 2, fuel: 'Petrol', trans: 'Auto' }}
                />
             ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-10 h-14 hover:bg-primary hover:text-white transition-all duration-300">
              View All Sports Cars
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Promo Banner - Moved Above Luxury Collection */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src={sportImage} className="w-full h-full object-cover" alt="Promo" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold font-serif mb-6">Explore Our Exclusive Car Collection</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Experience the thrill of driving the world's most prestigious vehicles on the open roads of Dubai.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 text-lg rounded-full">
            Explore Cars
          </Button>
        </div>
      </section>

      {/* 9.5 Luxury Car Collection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-thin font-serif mb-4">Luxury Car Collection</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light italic">The pinnacle of elegance and comfort</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
             {[
               { name: 'Rolls Royce Ghost', price: '5,500', offer: '4,800', image: rollsRoyceImage },
               { name: 'Bentley Flying Spur', price: '5,200', offer: '4,500', image: bentleyImage },
               { name: 'Mercedes-Benz S-Class', price: '4,800', offer: '4,100', image: mercedesSImage },
               { name: 'BMW 7 Series', price: '4,200', offer: '3,600', image: bmw7Image }
             ].map((car, idx) => (
                <CarCard 
                  key={idx}
                  image={car.image} 
                  name={car.name} 
                  price={car.price}
                  offerPrice={car.offer}
                  compact
                  sports
                  features={{ seats: 4, fuel: 'Petrol', trans: 'Auto' }}
                />
             ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-10 h-14 hover:bg-primary hover:text-white transition-all duration-300">
              View All Luxury Cars
            </Button>
          </div>
        </div>
      </section>

      {/* 11. Rent in UAE Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Elite Service
              </div>
              <h2 className="text-5xl font-serif font-bold leading-tight">
                Rent a Car in UAE <br/> 
                <span className="text-primary">Without a Deposit</span>
              </h2>
              <div className="w-24 h-1 bg-primary"></div>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Experience the ultimate freedom on the roads of Dubai and Abu Dhabi. We offer a transparent, hassle-free rental process with no hidden fees and zero deposit requirements for premium vehicles.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "No Deposit Required", desc: "Enjoy zero deposit rentals on select luxury models." },
                  { title: "24/7 Roadside Assistance", desc: "We are always here to help you wherever you are." },
                  { title: "Free Delivery & Pickup", desc: "Doorstep delivery anywhere in Dubai and Abu Dhabi." },
                  { title: "Flexible Payments", desc: "We accept all major credit cards, cash, and crypto." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20">
                Browse Fleet
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Dubai", image: dubaiImg },
                  { name: "Abu Dhabi", image: abuDhabiImg },
                  { name: "Sharjah", image: sharjahImg },
                  { name: "Ajman", image: ajmanImg },
                  { name: "Fujairah", image: fujairahImg },
                  { name: "Ras Al Khaimah", image: rakImg }
                ].map((city, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-md"
                  >
                    <img src={city.image} alt={city.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-sm font-bold truncate">{city.name}</div>
                      <div className="text-[10px] text-white/70">View Cars</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 12. Reviews */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-4xl font-thin font-serif mb-4">What Our Clients Say</h2>
           <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
           <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3].map((_, i) => (
                  <CarouselItem key={i}>
                    <div className="p-8 bg-white rounded-xl">
                       <div className="flex justify-center gap-1 text-yellow-500 mb-6">
                         {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" className="w-5 h-5" />)}
                       </div>
                       <blockquote className="text-2xl font-serif italic text-gray-700 mb-8">
                         "The service was absolutely impeccable. The car was in pristine condition and the delivery was right on time. Highly recommended for anyone visiting Dubai."
                       </blockquote>
                       <div className="font-bold text-lg">James Anderson</div>
                       <div className="text-sm text-gray-500">CEO, Tech Corp</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
           </Carousel>
        </div>
      </section>

      {/* 13. Yacht Banner */}
      <section className="relative h-[600px] flex items-center justify-center text-center" id="yacht">
        <div className="absolute inset-0">
          <img src={yachtImage} alt="Yacht" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-serif font-thin mb-6">Luxury Yacht Rentals <br/> in Dubai</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg mb-8 text-white/90">Sail the Arabian Gulf in ultimate luxury. Private charters, parties, and sunset cruises available.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-none rounded-full px-10 h-14 text-lg">
              Explore Yacht Services
            </Button>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin font-serif mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-xl px-4 bg-gray-50/50 border-none">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left">How do I rent a car in Dubai?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Simply browse our collection, choose your dates, and book online. You'll need a valid driver's license, passport, and credit card.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-xl px-4 bg-gray-50/50 border-none">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left">Is insurance included in the price?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, basic comprehensive insurance is included. Additional coverage options are available during booking.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-3" className="border rounded-xl px-4 bg-gray-50/50 border-none">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left">Do you offer free delivery?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We offer free delivery and pickup for all rentals of 2 days or more within Dubai city limits.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border rounded-xl px-4 bg-gray-50/50 border-none">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left">What documents are required?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    For tourists: Passport, Visit Visa, Home Country Driving License, and IDP. For residents: Emirates ID and UAE Driving License.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Footer */}
      <footer className="bg-gray-100 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="text-2xl font-serif font-bold tracking-tighter text-primary">
                RentAnyCar<span className="text-foreground">Dubai</span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                The premier luxury car rental service in Dubai, offering an elite fleet for the most discerning clients.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="text-gray-600 hover:text-primary transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Categories</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Luxury Cars</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Sports Cars</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">SUVs & 4x4</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Electric Vehicles</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Subscribe to get special offers and news.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-white" />
                <Button className="bg-primary hover:bg-primary/90">Join</Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2025 RentAnyCar Dubai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Car Silhouette Icons similar to reference image
const LuxuryCar = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 40" preserveAspectRatio="xMidYMid meet">
    <path d="M10 25 L15 15 L25 10 L45 8 L65 8 L80 12 L88 20 L92 28 L92 32 Q92 35 88 35 L12 35 Q8 35 8 32 Z M25 35 Q22 35 22 32 Q22 29 25 29 Q28 29 28 32 Q28 35 25 35 Z M75 35 Q72 35 72 32 Q72 29 75 29 Q78 29 78 32 Q78 35 75 35 Z M35 25 L75 25 L80 18 L30 18 Z"/>
  </svg>
);

const SUVIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 45" preserveAspectRatio="xMidYMid meet">
    <path d="M8 32 L15 18 L25 10 L75 10 L85 18 L92 32 L92 38 Q92 42 88 42 L12 42 Q8 42 8 38 Z M22 42 Q19 42 19 38 Q19 34 22 34 Q25 34 25 38 Q25 42 22 42 Z M78 42 Q75 42 75 38 Q75 34 78 34 Q81 34 81 38 Q81 42 78 42 Z M30 30 L70 30 L78 20 L22 20 Z"/>
  </svg>
);

const SportsCarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 35" preserveAspectRatio="xMidYMid meet">
    <path d="M5 25 L12 12 L30 6 L70 6 L88 12 L95 25 L95 30 Q95 33 90 33 L10 33 Q5 33 5 30 Z M20 33 Q17 33 17 30 Q17 27 20 27 Q23 27 23 30 Q23 33 20 33 Z M80 33 Q77 33 77 30 Q77 27 80 27 Q83 27 83 30 Q83 33 80 33 Z M35 22 L75 22 L82 14 L28 14 Z"/>
  </svg>
);

const ConvertibleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 35" preserveAspectRatio="xMidYMid meet">
    <path d="M10 25 L18 15 L35 10 L75 10 L85 15 L92 25 L92 30 Q92 33 88 33 L12 33 Q8 33 8 30 Z M25 33 Q22 33 22 30 Q22 27 25 27 Q28 27 28 30 Q28 33 25 33 Z M75 33 Q72 33 72 30 Q72 27 75 27 Q78 27 78 30 Q78 33 75 33 Z M40 22 L75 22 L85 16 L35 16 Z"/>
  </svg>
);

const EconomyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 40" preserveAspectRatio="xMidYMid meet">
    <path d="M15 30 L22 18 L35 12 L65 12 L78 18 L85 30 L85 35 Q85 38 80 38 L20 38 Q15 38 15 35 Z M30 38 Q27 38 27 35 Q27 32 30 32 Q33 32 33 35 Q33 38 30 38 Z M70 38 Q67 38 67 35 Q67 32 70 32 Q73 32 73 35 Q73 38 70 38 Z M38 25 L62 25 L70 18 L30 18 Z"/>
  </svg>
);

const EVIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 40" preserveAspectRatio="xMidYMid meet">
    <path d="M12 28 L18 15 L35 8 L65 8 L82 15 L88 28 L88 33 Q88 36 84 36 L16 36 Q12 36 12 33 Z M28 36 Q25 36 25 33 Q25 30 28 30 Q31 30 31 33 Q31 36 28 36 Z M72 36 Q69 36 69 33 Q69 30 72 30 Q75 30 75 33 Q75 36 72 36 Z M35 24 L65 24 L72 16 L28 16 Z M50 2 L54 6 L46 6 Z"/>
  </svg>
);

const ChauffeurIcon2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 40" preserveAspectRatio="xMidYMid meet">
    <path d="M10 28 L15 15 L25 10 L65 10 L75 15 L80 28 L80 33 Q80 36 76 36 L14 36 Q10 36 10 33 Z M25 36 Q22 36 22 33 Q22 30 25 30 Q28 30 28 33 Q28 36 25 36 Z M65 36 Q62 36 62 33 Q62 30 65 30 Q68 30 68 33 Q68 36 65 36 Z M45 22 L75 22 L78 16 L25 16 Z M50 4 Q53 4 53 7 L47 7 Q47 4 50 4 Z"/>
  </svg>
);

const StandardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 40" preserveAspectRatio="xMidYMid meet">
    <path d="M12 30 L18 18 L32 12 L68 12 L82 18 L88 30 L88 35 Q88 38 84 38 L16 38 Q12 38 12 35 Z M28 38 Q25 38 25 35 Q25 32 28 32 Q31 32 31 35 Q31 38 28 38 Z M72 38 Q69 38 69 35 Q69 32 72 32 Q75 32 75 35 Q75 38 72 38 Z M35 25 L65 25 L72 18 L28 18 Z"/>
  </svg>
);

function CarCard({ image, name, price, badge, compact = false, features, offerPrice, sports = false }: { image: string, name: string, price: string, badge?: string, compact?: boolean, features?: any, offerPrice?: string, sports?: boolean }) {
  // Calculate savings percentage
  const savingsPercent = offerPrice ? Math.round(((Number(price.replace(/,/g, '')) - Number(offerPrice.replace(/,/g, ''))) / Number(price.replace(/,/g, ''))) * 100) : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur">
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          {sports && (
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              Free Delivery
            </div>
          )}
          {badge && (
            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              {badge}
            </div>
          )}
          {sports && offerPrice && (
            <div className="absolute bottom-3 left-3 bg-red-500 text-white rounded-full px-3 py-2 shadow-lg">
              <div className="text-xs font-bold">Save</div>
              <div className="text-lg font-serif font-bold">{savingsPercent}%</div>
            </div>
          )}
        </div>
        <CardContent className="p-5">
          <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-serif font-bold mb-3 text-foreground`}>{name}</h3>
          
          {features && (
             <div className="flex gap-3 text-gray-400 text-xs mb-4 border-b border-gray-100 pb-4">
               <div className="flex items-center gap-1"><Armchair className="w-3 h-3" /> {features.seats} Seats</div>
               <div className="flex items-center gap-1"><Fuel className="w-3 h-3" /> {features.fuel}</div>
               <div className="flex items-center gap-1"><Cog className="w-3 h-3" /> {features.trans}</div>
             </div>
          )}

          {sports && offerPrice && (
            <div className="mb-4 space-y-2 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm line-through font-medium">AED {price}</span>
                <span className="text-green-600 font-bold text-xs bg-green-100 px-2 py-1 rounded">Best Price</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-primary font-serif font-bold text-2xl">AED {offerPrice}</span>
                <span className="text-gray-500 text-xs">/day</span>
              </div>
            </div>
          )}

          {sports && (
            <div className="mb-4 space-y-1 text-xs text-gray-600 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-600" /> 1 day rental available</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-600" /> Deposit: AED 0.00</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-600" /> Insurance included</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-600" /> 5% VAT included</div>
            </div>
          )}

          {sports ? (
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold">
                Book Now
              </Button>
              <Button size="sm" variant="outline" className="px-3 rounded-lg border-primary text-primary hover:bg-primary/10">
                <Phone className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="px-3 rounded-lg border-green-500 text-green-600 hover:bg-green-50">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div>
                <span className="text-primary font-bold text-lg">AED {price}</span>
                <span className="text-gray-400 text-sm"> / day</span>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">Book Now</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
