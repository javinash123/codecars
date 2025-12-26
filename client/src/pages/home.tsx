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
  Award
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
    { name: "Luxury", icon: LuxuryCar },
    { name: "SUV", icon: SUVIcon },
    { name: "Sports", icon: SportsCarIcon },
    { name: "Convertible", icon: ConvertibleIcon },
    { name: "Economy", icon: EconomyIcon },
    { name: "Electric (EV)", icon: EVIcon },
    { name: "Chauffeur", icon: ChauffeurIcon2 },
    { name: "Standard", icon: StandardIcon },
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
                <div className="h-16 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <cat.icon className="w-12 h-12 text-primary" />
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
              badge="Free Delivery"
              features={{ seats: 5, fuel: 'Petrol', trans: 'Auto' }}
            />
            <CarCard 
              image={sportImage} 
              name="Ferrari F8 Tributo" 
              price="4,200" 
              badge="Hot Deal"
              features={{ seats: 2, fuel: 'Petrol', trans: 'Auto' }}
            />
            <CarCard 
              image={suvImage} 
              name="Rolls Royce Cullinan" 
              price="6,000" 
              badge="Premium"
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
             {[1, 2, 3, 4].map((item) => (
                <CarCard 
                  key={item}
                  image={sportImage} 
                  name="Lamborghini Huracan" 
                  price="3,800" 
                  compact
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
             {[1, 2, 3, 4].map((item) => (
                <CarCard 
                  key={item}
                  image={suvImage} 
                  name="Rolls Royce Ghost" 
                  price="5,500" 
                  compact
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
  <svg className={className} fill="currentColor" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
    <path d="M15 35 L20 25 L25 20 L35 18 L65 18 L75 20 L80 25 L85 35 L85 42 Q85 45 82 45 L18 45 Q15 45 15 42 Z M28 42 Q26 42 26 40 Q26 38 28 38 Q30 38 30 40 Q30 42 28 42 Z M72 42 Q70 42 70 40 Q70 38 72 38 Q74 38 74 40 Q74 42 72 42 Z M35 35 L65 35 L70 28 L30 28 Z"/>
  </svg>
);

const SUVIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
    <path d="M12 38 L18 22 L28 15 L72 15 L82 22 L88 38 L88 44 Q88 48 84 48 L16 48 Q12 48 12 44 Z M26 45 Q24 45 24 42 Q24 39 26 39 Q28 39 28 42 Q28 45 26 45 Z M74 45 Q72 45 72 42 Q72 39 74 39 Q76 39 76 42 Q76 45 74 45 Z M32 35 L68 35 L75 25 L25 25 Z"/>
  </svg>
);

const SportsCarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
    <path d="M10 36 L16 20 L35 12 L65 12 L84 20 L90 36 L90 42 Q90 46 86 46 L14 46 Q10 46 10 42 Z M24 43 Q22 43 22 40 Q22 37 24 37 Q26 37 26 40 Q26 43 24 43 Z M76 43 Q74 43 74 40 Q74 37 76 37 Q78 37 78 40 Q78 43 76 43 Z M38 32 L62 32 L72 22 L28 22 Z"/>
  </svg>
);

const ConvertibleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
    <path d="M18 38 L24 24 L40 16 L60 16 L76 24 L82 38 L82 44 Q82 48 78 48 L22 48 Q18 48 18 44 Z M30 45 Q28 45 28 42 Q28 39 30 39 Q32 39 32 42 Q32 45 30 45 Z M70 45 Q68 45 68 42 Q68 39 70 39 Q72 39 72 42 Q72 45 70 45 Z M42 30 L58 30 L68 20 L32 20 Z M44 25 L56 25 L60 18 L40 18 Z"/>
  </svg>
);

const EconomyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
    <path d="M14 37 L20 26 L32 19 L68 19 L80 26 L86 37 L86 43 Q86 47 82 47 L18 47 Q14 47 14 43 Z M28 44 Q26 44 26 41 Q26 38 28 38 Q30 38 30 41 Q30 44 28 44 Z M72 44 Q70 44 70 41 Q70 38 72 38 Q74 38 74 41 Q74 44 72 44 Z M35 33 L65 33 L72 24 L28 24 Z"/>
  </svg>
);

const EVIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
    <path d="M16 38 L22 25 L36 17 L64 17 L78 25 L84 38 L84 44 Q84 48 80 48 L20 48 Q16 48 16 44 Z M30 45 Q28 45 28 42 Q28 39 30 39 Q32 39 32 42 Q32 45 30 45 Z M70 45 Q68 45 68 42 Q68 39 70 39 Q72 39 72 42 Q72 45 70 45 Z M40 32 L60 32 L70 23 L30 23 Z M48 12 L52 12 L52 18 L48 18 Z"/>
  </svg>
);

const ChauffeurIcon2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
    <path d="M20 40 L26 28 L40 20 L60 20 L74 28 L80 40 L80 46 Q80 50 76 50 L24 50 Q20 50 20 46 Z M34 47 Q32 47 32 44 Q32 41 34 41 Q36 41 36 44 Q36 47 34 47 Z M66 47 Q64 47 64 44 Q64 41 66 41 Q68 41 68 44 Q68 47 66 47 Z M44 34 L56 34 L66 25 L34 25 Z M50 8 Q52 8 52 10 Q52 12 50 12 Q48 12 48 10 Q48 8 50 8 Z"/>
  </svg>
);

const StandardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
    <path d="M18 38 L24 26 L38 18 L62 18 L76 26 L82 38 L82 44 Q82 48 78 48 L22 48 Q18 48 18 44 Z M32 45 Q30 45 30 42 Q30 39 32 39 Q34 39 34 42 Q34 45 32 45 Z M68 45 Q66 45 66 42 Q66 39 68 39 Q70 39 70 42 Q70 45 68 45 Z M40 32 L60 32 L70 24 L30 24 Z"/>
  </svg>
);

function CarCard({ image, name, price, badge, compact = false, features }: { image: string, name: string, price: string, badge?: string, compact?: boolean, features?: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group border-none shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          {badge && (
            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {badge}
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold mb-2 text-foreground`}>{name}</h3>
          
          {features && (
             <div className="flex gap-4 text-gray-400 text-xs mb-4 border-b border-gray-100 pb-4">
               <div className="flex items-center gap-1"><Armchair className="w-3 h-3" /> {features.seats} Seats</div>
               <div className="flex items-center gap-1"><Fuel className="w-3 h-3" /> {features.fuel}</div>
               <div className="flex items-center gap-1"><Cog className="w-3 h-3" /> {features.trans}</div>
             </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <span className="text-primary font-bold text-lg">AED {price}</span>
              <span className="text-gray-400 text-sm"> / day</span>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">Book Now</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
