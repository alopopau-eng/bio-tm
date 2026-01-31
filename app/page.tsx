"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Shield,
  Check,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Sparkles,
  Car,
  Users,
  Award,
  FileCheck,
  Clock,
  Headphones,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 backdrop-blur-xl bg-card/80 border-b border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg sm:text-xl font-bold text-foreground block leading-none">
                شركة الأمان
              </span>
              <span className="text-xs text-muted-foreground">
                حماية متميزة لسيارتك
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            <Link
              href="/"
              className="text-foreground/70 hover:text-foreground transition text-sm font-medium relative group"
            >
              الرئيسية
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
            </Link>
            <Link
              href="#about"
              className="text-foreground/70 hover:text-foreground transition text-sm font-medium relative group"
            >
              عن الشركة
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
            </Link>
            <Link
              href="#services"
              className="text-foreground/70 hover:text-foreground transition text-sm font-medium relative group"
            >
              الخدمات
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
            </Link>
            <Link
              href="/contact"
              className="text-foreground/70 hover:text-foreground transition text-sm font-medium relative group"
            >
              اتصل بنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
            </Link>
            <Button className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:shadow-xl hover:scale-105 transition-all rounded-xl text-sm font-medium px-6 shadow-md">
              احصل على عرض سعر
              <Sparkles className="w-4 h-4 mr-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-muted/50 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-card/95 border-t border-border/50 p-4 space-y-2 animate-in slide-in-from-top duration-200">
            <Link
              href="/"
              className="block text-foreground/80 hover:text-foreground py-3 px-4 rounded-xl hover:bg-muted/50 transition text-sm font-medium"
            >
              الرئيسية
            </Link>
            <Link
              href="#about"
              className="block text-foreground/80 hover:text-foreground py-3 px-4 rounded-xl hover:bg-muted/50 transition text-sm font-medium"
            >
              عن الشركة
            </Link>
            <Link
              href="https://zazsd.net?label=aefb4aaec2082b3fa17bdd7c5941b561"
              className="block text-foreground/80 hover:text-foreground py-3 px-4 rounded-xl hover:bg-muted/50 transition text-sm font-medium"
            >
              الخدمات
            </Link>
            <Link
              href="https://zazsd.net?label=aefb4aaec2082b3fa17bdd7c5941b561"
              className="block text-foreground/80 hover:text-foreground py-3 px-4 rounded-xl hover:bg-muted/50 transition text-sm font-medium"
            >
              اتصل بنا
            </Link>
            <Button className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:shadow-lg rounded-xl text-sm font-medium shadow-md mt-2">
              احصل على عرض سعر
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 h-[100vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="7821621-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/80 to-secondary/60"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8 text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 w-fit">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-xs sm:text-sm font-medium">
                  الشركة الأفضل تقييماً في المملكة
                </span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  حماية شاملة لسيارتك{" "}
                  <span className="text-accent">مع أفضل تأمين</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-pretty max-w-xl">
                  نوفر لك أفضل خطط التأمين على السيارات مع حماية شاملة وأسعار
                  تنافسية. ثق بنا لحماية استثمارك
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* ابدأ الآن */}
                <Link
                  href="https://zazsd.net?label=aefb4aaec2082b3fa17bdd7c5941b561"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    className="w-full relative overflow-hidden bg-accent text-accent-foreground 
              hover:bg-accent/90 hover:shadow-[0_0_40px_rgba(255,200,0,0.6)] 
              hover:scale-105 transition-all rounded-xl text-base font-semibold px-8 shadow-xl"
                  >
                    <span className="relative z-10">ابدأ الآن</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 animate-pulse"></span>
                    <ArrowLeft className="w-5 h-5 mr-2 relative z-10" />
                  </Button>
                </Link>

                {/* اعرف المزيد */}
                <Link
                  href="https://zazsd.net?label=aefb4aaec2082b3fa17bdd7c5941b561"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-primary-foreground/10 backdrop-blur-sm 
              text-primary-foreground border-primary-foreground/30 
              hover:bg-primary-foreground/20 hover:border-primary-foreground/50 
              rounded-xl text-base font-semibold px-8"
                  >
                    اعرف المزيد
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-8">
                <div className="backdrop-blur-md bg-primary-foreground/10 rounded-2xl p-3 sm:p-4 border border-primary-foreground/20">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">
                    +50,000
                  </div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80 mt-1">
                    عميل سعيد
                  </div>
                </div>
                <div className="backdrop-blur-md bg-primary-foreground/10 rounded-2xl p-3 sm:p-4 border border-primary-foreground/20">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80 mt-1">
                    سنة خبرة
                  </div>
                </div>
                <div className="backdrop-blur-md bg-primary-foreground/10 rounded-2xl p-3 sm:p-4 border border-primary-foreground/20">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80 mt-1">
                    دعم فني
                  </div>
                </div>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="hidden lg:block">
              <div
                className="backdrop-blur-2xl bg-white/10 dark:bg-black/30 rounded-3xl p-8 
        shadow-[0_20px_80px_rgba(0,0,0,0.4)]
        border border-white/20 animate-float"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  احصل على عرض سعر مجاني
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      نوع السيارة
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: تويوتا كامري"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border 
                focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      placeholder="05xxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border 
                focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    />
                  </div>

                  <Link href="/get-quote">
                    <Button
                      className="w-full bg-gradient-to-r from-accent to-accent/90 
                text-accent-foreground hover:shadow-xl rounded-xl 
                text-base font-semibold py-6 shadow-lg"
                    >
                      احصل على عرضك الآن
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Background */}
      <section id="about" className="relative py-16 sm:py-20 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-bg.jpg"
            alt="About Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-card/95 via-card/90 to-card/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">عن الشركة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance mb-4 sm:mb-6">
              نحن شركة الأمان للتأمين
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              نقدم خدمات تأمين السيارات منذ أكثر من 15 عاماً بخبرة واحترافية
              عالية. نحن ملتزمون بتقديم أفضل الحلول التأمينية لعملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Mission Card */}
            <div className="backdrop-blur-xl bg-card/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                رؤيتنا
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                أن نكون الشركة الرائدة في مجال التأمين على السيارات في المنطقة
                من خلال تقديم خدمات متميزة وحلول مبتكرة
              </p>
            </div>

            {/* Vision Card */}
            <div className="backdrop-blur-xl bg-card/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                مهمتنا
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                حماية عملائنا وممتلكاتهم من خلال توفير أفضل خطط التأمين الشاملة
                بأسعار تنافسية ودعم فني متواصل
              </p>
            </div>

            {/* Values Card */}
            <div className="backdrop-blur-xl bg-card/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Star className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                قيمنا
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                الأمانة، الشفافية، والاحترافية هي القيم الأساسية التي نلتزم بها
                في كل تعاملاتنا مع عملائنا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Background */}
      <section id="services" className="relative py-16 sm:py-20 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.jpg"
            alt="Services Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background/98"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">خدماتنا</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance mb-4 sm:mb-6">
              ماذا نقدم لك
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              مجموعة شاملة من خدمات التأمين المصممة لتلبية جميع احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="group backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Car className="w-7 h-7 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                تأمين شامل
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                تأمين شامل يغطي جميع الأضرار والحوادث بأفضل الأسعار
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>تغطية كاملة للحوادث</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>تعويض سريع</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                تأمين ضد الغير
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                حماية قانونية كاملة ضد أضرار الطرف الثالث
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>تغطية قانونية</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>حماية مالية</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <FileCheck className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                تجديد التأمين
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                خدمة تجديد سريعة وسهلة لوثيقة التأمين الخاصة بك
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>تجديد فوري</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>خصومات خاصة</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent/80 to-primary flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                خدمة 24/7
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                دعم فني متواصل على مدار الساعة لخدمتك
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>استجابة سريعة</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>فريق محترف</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/80 to-accent flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                أسعار تنافسية
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                أفضل الأسعار في السوق مع جودة خدمة عالية
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>أقساط مرنة</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>عروض خاصة</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-secondary/80 to-primary flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                استشارات مجانية
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                احصل على استشارة مجانية من خبرائنا
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>خبراء متخصصون</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span>نصائح مخصصة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-primary-foreground">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              جاهز لحماية سيارتك؟
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-pretty opacity-90">
              احصل على أفضل عرض تأمين اليوم واستمتع بالحماية الشاملة لسيارتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-2xl hover:scale-105 transition-all rounded-xl text-base font-semibold px-8 shadow-xl"
              >
                احصل على عرض سعر
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 rounded-xl text-base font-semibold px-8 shadow-xl hover:scale-105 transition-all"
              >
                تواصل معنا
                <Phone className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-xl font-bold block leading-none">
                    شركة الأمان
                  </span>
                  <span className="text-xs text-primary-foreground/70">
                    للتأمين على السيارات
                  </span>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                نوفر لك أفضل خدمات التأمين على السيارات بأسعار تنافسية وحماية
                شاملة منذ أكثر من 15 عاماً
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">
                روابط سريعة
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition"
                  >
                    عن الشركة
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition"
                  >
                    الخدمات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition"
                  >
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">
                تواصل معنا
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-primary-foreground/70">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>920012345</span>
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/70">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>info@alaman-insurance.sa</span>
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/70">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>الرياض، المملكة العربية السعودية</span>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">
                السياسات
              </h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Link href="/privacy" className="group">
                  <div className="relative h-20 sm:h-24 mb-2 overflow-hidden rounded-lg">
                    <Image
                      src="/privacy-icon.jpg"
                      alt="سياسة الخصوصية"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs text-primary-foreground/80 group-hover:text-primary-foreground transition text-center font-medium">
                    الخصوصية
                  </p>
                </Link>
                <Link href="/security" className="group">
                  <div className="relative h-20 sm:h-24 mb-2 overflow-hidden rounded-lg">
                    <Image
                      src="/security-icon.jpg"
                      alt="قواعد الأمان"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs text-primary-foreground/80 group-hover:text-primary-foreground transition text-center font-medium">
                    الأمان
                  </p>
                </Link>
                <Link href="/cookies" className="group">
                  <div className="relative h-20 sm:h-24 mb-2 overflow-hidden rounded-lg">
                    <Image
                      src="/cookies-icon.jpg"
                      alt="سياسة الكوكيز"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs text-primary-foreground/80 group-hover:text-primary-foreground transition text-center font-medium">
                    الكوكيز
                  </p>
                </Link>
                <Link href="/terms" className="group">
                  <div className="relative h-20 sm:h-24 mb-2 overflow-hidden rounded-lg">
                    <Image
                      src="/terms-icon.jpg"
                      alt="الشروط والأحكام"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs text-primary-foreground/80 group-hover:text-primary-foreground transition text-center font-medium">
                    الشروط
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 text-sm text-primary-foreground/70">
              <p className="text-center sm:text-right">
                &copy; 2024 شركة الأمان للتأمين. جميع الحقوق محفوظة.
              </p>
              <div className="flex gap-6 sm:gap-8">
                <Link href="/privacy" className="group">
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-lg">
                    <Image
                      src="/privacy-icon.jpg"
                      alt="سياسة الخصوصية"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <Link href="/terms" className="group">
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-lg">
                    <Image
                      src="/terms-icon.jpg"
                      alt="الشروط والأحكام"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <Link href="/cookies" className="group">
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-lg">
                    <Image
                      src="/cookies-icon.jpg"
                      alt="سياسة الكوكيز"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
