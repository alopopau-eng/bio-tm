'use client'

import Link from 'next/link'
import { Shield, Cookie, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function CookiesPage() {
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
      <main className="mt-20 max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Cookie className="w-10 h-10 text-accent" />
            سياسة ملفات تعريف الارتباط
          </h1>
          <p className="text-muted-foreground mb-8">آخر تحديث: يناير 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. ما هي ملفات تعريف الارتباط؟</h2>
              <p className="text-foreground/80 leading-relaxed">
                ملفات تعريف الارتباط (Cookies) هي ملفات صغيرة يتم حفظها على جهاز الكمبيوتر أو الهاتف الذكي الخاص بك عند زيارة موقعنا. تحتوي هذه الملفات على معلومات تساعد في تحسين تجربتك على الموقع وتذكر تفضيلاتك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. أنواع ملفات تعريف الارتباط التي نستخدمها</h2>
              
              <div className="space-y-4">
                <Card className="p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">الكوكيز الضرورية (Essential Cookies)</h3>
                  <p className="text-foreground/80 mb-3">
                    مطلوبة لعمل الموقع بشكل صحيح. تساعد في:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/70 text-sm">
                    <li>تسجيل الدخول والخروج من الحساب</li>
                    <li>تذكر بيانات نموذج طلب التأمين</li>
                    <li>توفير الأمان والحماية من الهجمات</li>
                    <li>تحميل الموقع بشكل صحيح</li>
                  </ul>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">كوكيز الأداء والتحليل (Performance Cookies)</h3>
                  <p className="text-foreground/80 mb-3">
                    تساعد في فهم كيفية استخدام الموقع وتحسينه. تجمع معلومات حول:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/70 text-sm">
                    <li>عدد الزوار والصفحات المزارة</li>
                    <li>الصفحات التي تسبب أخطاء</li>
                    <li>الوقت المستغرق لتحميل الموقع</li>
                    <li>السلوك العام للمستخدمين</li>
                  </ul>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">كوكيز التفضيلات (Preference Cookies)</h3>
                  <p className="text-foreground/80 mb-3">
                    تتذكر اختياراتك وتفضيلاتك على الموقع مثل:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/70 text-sm">
                    <li>اللغة المفضلة (العربية أو الإنجليزية)</li>
                    <li>الوضع الليلي أو النهاري</li>
                    <li>تفضيلات العرض والتنسيق</li>
                    <li>الإعدادات المحفوظة</li>
                  </ul>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">كوكيز التسويق (Marketing Cookies)</h3>
                  <p className="text-foreground/80 mb-3">
                    تتبع الإعلانات والعروض الخاصة. تُستخدم ل:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/70 text-sm">
                    <li>عرض إعلانات مخصصة وفقاً لاهتماماتك</li>
                    <li>قياس فعالية الحملات الإعلانية</li>
                    <li>تجنب عرض نفس الإعلان عدة مرات</li>
                    <li>فهم سلوك المستهلك</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. مواقع شركاء الطرف الثالث</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                قد يستخدم موقعنا خدمات من شركاء خارجيين الذين قد يضعون كوكيز خاصة بهم:
              </p>
              <div className="space-y-2">
                <Card className="p-4 border border-border">
                  <p className="text-foreground"><strong>Google Analytics</strong> - لتحليل سلوك الزوار</p>
                </Card>
                <Card className="p-4 border border-border">
                  <p className="text-foreground"><strong>Google Ads</strong> - لعرض الإعلانات المستهدفة</p>
                </Card>
                <Card className="p-4 border border-border">
                  <p className="text-foreground"><strong>Facebook Pixel</strong> - لقياس فعالية الإعلانات</p>
                </Card>
                <Card className="p-4 border border-border">
                  <p className="text-foreground"><strong>Stripe</strong> - معالج الدفع الآمن</p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. مدة احتفاظ الكوكيز</h2>
              <p className="text-foreground/80 leading-relaxed">
                تختلف مدة احتفاظ الكوكيز حسب نوعها:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-4">
                <li><strong>الكوكيز الجلسة (Session):</strong> تحذف تلقائياً عند غلق المتصفح</li>
                <li><strong>الكوكيز الدائمة (Persistent):</strong> تبقى لفترة محددة (من أيام إلى سنوات)</li>
                <li><strong>كوكيز التفضيلات:</strong> تبقى حتى تقوم بحذفها يدوياً</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. كيفية التحكم في الكوكيز</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك:
              </p>
              
              <div className="space-y-4">
                <Card className="p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Google Chrome</h3>
                  <p className="text-foreground/70 text-sm">
                    الإعدادات → الخصوصية والأمان → ملفات تعريف الارتباط والبيانات الأخرى للموقع
                  </p>
                </Card>

                <Card className="p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Firefox</h3>
                  <p className="text-foreground/70 text-sm">
                    الخيارات → الخصوصية والأمان → ملفات تعريف الارتباط والبيانات
                  </p>
                </Card>

                <Card className="p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Safari</h3>
                  <p className="text-foreground/70 text-sm">
                    التفضيلات → الخصوصية → ملفات تعريف الارتباط
                  </p>
                </Card>

                <Card className="p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Edge</h3>
                  <p className="text-foreground/70 text-sm">
                    الإعدادات → الخصوصية والخدمات → ملفات تعريف الارتباط
                  </p>
                </Card>
              </div>

              <p className="text-foreground/80 mt-4 text-sm italic">
                ملاحظة: حذف الكوكيز قد يؤثر على بعض وظائف الموقع وقد تحتاج إلى إعادة تسجيل الدخول.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Do Not Track</h2>
              <p className="text-foreground/80 leading-relaxed">
                بعض المتصفحات توفر ميزة "عدم التتبع" (Do Not Track). إذا قمت بتفعيلها، فإننا سنحترم طلبك قدر الإمكان، لكن بعض الخدمات قد تتطلب الكوكيز الضرورية لتعمل.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. تحديثات هذه السياسة</h2>
              <p className="text-foreground/80 leading-relaxed">
                قد نقوم بتحديث هذه السياسة من وقت لآخر لعكس أي تغييرات في استخدام الكوكيز أو القوانين المحلية والدولية. سيتم نشر التحديثات على هذه الصفحة مع تاريخ آخر تحديث.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. الأسئلة والدعم</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                إذا كان لديك أي أسئلة بخصوص هذه السياسة أو الكوكيز، يرجى التواصل معنا:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-foreground/80"><strong>البريد الإلكتروني:</strong> cookies@amaan-insurance.sa</p>
                <p className="text-foreground/80"><strong>الهاتف:</strong> +966 11 4444 4444</p>
                <p className="text-foreground/80"><strong>الموقع:</strong> www.amaan-insurance.sa</p>
              </div>
            </section>

            <section className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-3">✓ ملخص سياسة الكوكيز</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>نستخدم الكوكيز لتحسين تجربتك على الموقع</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>يمكنك التحكم الكامل في الكوكيز من خلال متصفحك</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>بياناتك محمية وآمنة تماماً</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>نوافق على معايير الخصوصية الدولية</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/privacy" className="flex items-center gap-2 text-primary hover:text-primary/80">
            سياسة الخصوصية <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/security" className="flex items-center gap-2 text-primary hover:text-primary/80">
            قواعس الأمان <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/terms" className="flex items-center gap-2 text-primary hover:text-primary/80">
            الشروط والأحكام <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4 text-center">
        <p>&copy; 2024 شركة الأمان. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  )
}
