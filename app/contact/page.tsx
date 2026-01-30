'use client'

import React from "react"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    alert('شكراً لك! سنتواصل معك قريباً')
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold text-primary-foreground">شركة الأمان</span>
          </div>
          <Link href="/" className="text-primary-foreground hover:text-accent">
            العودة للرئيسية
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
            <p className="text-xl text-primary-foreground/90">
              نحن هنا للإجابة على أسئلتك ومساعدتك في الحصول على أفضل خدمات التأمين
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 border border-border text-center hover:shadow-lg transition">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">الهاتف</h3>
                <p className="text-foreground/80 mb-2">+966 11 4444 4444</p>
                <p className="text-foreground/80">متاح 24/7</p>
              </Card>

              <Card className="p-8 border border-border text-center hover:shadow-lg transition">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">البريد الإلكتروني</h3>
                <p className="text-foreground/80 mb-2">info@amaan-insurance.sa</p>
                <p className="text-foreground/80">نرد خلال 24 ساعة</p>
              </Card>

              <Card className="p-8 border border-border text-center hover:shadow-lg transition">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">ساعات العمل</h3>
                <p className="text-foreground/80 mb-2">السبت - الخميس</p>
                <p className="text-foreground/80">8:00 صباحاً - 10:00 مساءً</p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                      الاسم الكامل
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="أدخل اسمك"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                        البريد الإلكتروني
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-foreground font-semibold mb-2">
                        رقم الهاتف
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+966 5X XXXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-foreground font-semibold mb-2">
                      الموضوع
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="موضوع الرسالة"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                      الرسالة
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="أخبرنا عن سؤالك أو احتياجك..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg"
                  >
                    إرسال الرسالة
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">موقعنا</h2>
              <p className="text-foreground/80">زرنا في مقر شركتنا</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border border-border">
                <MapPin className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">العنوان الرئيسي</h3>
                <p className="text-foreground/80 mb-2">الرياض، المملكة العربية السعودية</p>
                <p className="text-foreground/80 mb-2">حي النخيل، شارع الملك فهد</p>
                <p className="text-foreground/80 mb-4">الرمز البريدي: 12345</p>
                <p className="text-foreground/80"><strong>الهاتف:</strong> +966 11 4444 4444</p>
              </Card>

              <Card className="p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">معلومات إضافية</h3>
                <div className="space-y-3 text-foreground/80">
                  <p>
                    <strong>المدير العام:</strong>
                    <br />
                    محمد الأحمد
                  </p>
                  <p>
                    <strong>رقم الترخيص:</strong>
                    <br />
                    رقم 123456789
                  </p>
                  <p>
                    <strong>السنة التأسيسية:</strong>
                    <br />
                    2004
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">أسئلة شائعة</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">كم المدة المتوقعة للرد على استفساري؟</h3>
                <p className="text-foreground/80">
                  نحاول الرد على جميع الاستفسارات خلال 24 ساعة. في الحالات الطارئة، يمكنك الاتصال مباشرة على رقم الهاتف.
                </p>
              </Card>

              <Card className="p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">هل توفرون خدمة للعملاء باللغة الإنجليزية؟</h3>
                <p className="text-foreground/80">
                  نعم، نوفر خدمة العملاء باللغة الإنجليزية أيضاً. يمكنك طلب تحويل لممثل يتحدث الإنجليزية.
                </p>
              </Card>

              <Card className="p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">هل يمكنني الحصول على عرض سعر عبر الهاتف؟</h3>
                <p className="text-foreground/80">
                  بالتأكيد! اتصل بنا على +966 11 4444 4444 وسيساعدك أحد فريقنا في الحصول على عرض سعر مجاني.
                </p>
              </Card>

              <Card className="p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">هل توجد فروع أخرى للشركة؟</h3>
                <p className="text-foreground/80">
                  حالياً، مقرنا الرئيسي في الرياض. يمكنك التواصل معنا عبر الموقع أو الهاتف لأي استفسارات.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold">شركة الأمان</span>
            </div>
            <p className="text-secondary-foreground/80">
              موثوق فيه منذ أكثر من 20 سنة
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">الروابط</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><Link href="/" className="hover:text-accent">الرئيسية</Link></li>
              <li><Link href="/#about" className="hover:text-accent">عن الشركة</Link></li>
              <li><Link href="/#services" className="hover:text-accent">الخدمات</Link></li>
              <li><Link href="/contact" className="hover:text-accent">التواصل</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">السياسات</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><Link href="/privacy" className="hover:text-accent">الخصوصية</Link></li>
              <li><Link href="/security" className="hover:text-accent">الأمان</Link></li>
              <li><Link href="/cookies" className="hover:text-accent">الكوكيز</Link></li>
              <li><Link href="/terms" className="hover:text-accent">الشروط</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <p className="text-secondary-foreground/80 mb-2">
              <strong>البريد:</strong> info@amaan-insurance.sa
            </p>
            <p className="text-secondary-foreground/80">
              <strong>الهاتف:</strong> +966 11 4444 4444
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/70">
          <p>&copy; 2024 شركة الأمان لتأمين السيارات. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}
