'use client'

import Link from 'next/link'
import { Shield, Lock, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function SecurityPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">قواعد الأمان والحماية</h1>
          <p className="text-muted-foreground mb-8">آخر تحديث: يناير 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-accent" />
                1. معايير التشفير
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                نستخدم أعلى معايير التشفير لحماية البيانات المرسلة والمستقبلة:
              </p>
              <div className="space-y-3">
                <Card className="p-4 border border-border">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">TLS 1.3</h3>
                      <p className="text-foreground/70 text-sm">
                        بروتوكول التشفير الأحدث لضمان أمان الاتصال بين متصفحك وخوادمنا
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border border-border">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">AES-256 Encryption</h3>
                      <p className="text-foreground/70 text-sm">
                        تشفير عسكري المستوى لجميع البيانات الحساسة المخزنة في قواعد البيانات
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border border-border">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">RSA-2048</h3>
                      <p className="text-foreground/70 text-sm">
                        تشفير المفاتيح العامة لحماية معلومات الدفع والبيانات الشخصية الحساسة
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-accent" />
                2. التحقق من الهوية والمصادقة
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                نطبق إجراءات تحقق قوية لحماية حسابك:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>كلمات المرور المشفرة بخوارزمية bcrypt الآمنة</li>
                <li>المصادقة الثنائية (2FA) لحسابات ذات حساسية عالية</li>
                <li>التحقق من البريد الإلكتروني قبل تفعيل الحساب</li>
                <li>جلسات آمنة مع انتهاء صلاحية زمني</li>
                <li>تسجيل محاولات الوصول المريبة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-accent" />
                3. أمان البيانات الشخصية
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                حماية بيانات العملاء من الاختراق والنسخ غير المصرح به:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>فحوصات أمان دورية من قبل متخصصين خارجيين</li>
                <li>جدران حماية (Firewalls) عالية المستوى</li>
                <li>نسخ احتياطية محمية وتشفيرها</li>
                <li>سياسات الوصول على أساس المبدأ من أقل امتياز</li>
                <li>مراقبة في الوقت الفعلي لأي نشاط غريب</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-accent" />
                4. أمان معاملات الدفع
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                نتعامل مع معاملات الدفع بأعلى معايير الأمان:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>PCI-DSS Compliance لمعاملات البطاقات الائتمانية</li>
                <li>لا نخزن تفاصيل البطاقة على خوادمنا</li>
                <li>شركات دفع موثوقة ومرخصة دولياً</li>
                <li>تحقق ثلاثي الأمان (3D Secure) للعمليات</li>
                <li>تقارير مالية شفافة والتحقق من كل عملية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                5. سياسات الموظفين والتدريب
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                فريقنا مدرب بشكل مستمر على أفضل ممارسات الأمان:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>تدريب إلزامي للموظفين على أمان البيانات</li>
                <li>اتفاقيات عدم الإفصاح (NDA) موقعة من جميع الموظفين</li>
                <li>فحوصات أمنية للموظفين الجدد</li>
                <li>سياسات كلمات المرور الدورية</li>
                <li>مراجعات الأمان السنوية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-accent" />
                6. إجراءات الطوارئ والاستجابة للانتهاكات
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                لدينا خطة شاملة للاستجابة السريعة لأي حادث أمني:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>فريق استجابة الطوارئ (24/7) لمعالجة الحوادث</li>
                <li>عزل فوري للأنظمة المتأثرة</li>
                <li>إخطار العملاء والجهات المختصة في الحال</li>
                <li>التحقيق الشامل وتوثيق كل حادثة</li>
                <li>خطط عودة البيانات من النسخ الاحتياطية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-accent" />
                7. الامتثال والشهادات
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                نحن نتوافق مع المعايير الدولية للأمان والخصوصية:
              </p>
              <div className="space-y-2">
                <Card className="p-4 border border-border">
                  <p className="text-foreground"><strong>ISO/IEC 27001</strong> - معيار إدارة أمان المعلومات</p>
                </Card>
                <Card className="p-4 border border-border">
                  <p className="text-foreground"><strong>GDPR</strong> - اللائحة العامة لحماية البيانات الأوروبية</p>
                </Card>
                <Card className="p-4 border border-border">
                  <p className="text-foreground"><strong>CCPA</strong> - قانون خصوصية المستهلك في كاليفورنيا</p>
                </Card>
                <Card className="p-4 border border-border">
                  <p className="text-foreground"><strong>SAMA Regulations</strong> - لوائح البنك المركزي السعودي</p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. التقارير عن الثغرات الأمنية</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                إذا اكتشفت ثغرة أمنية أو مشكلة تتعلق بالأمان، يرجى إخبارنا فوراً:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-foreground/80"><strong>البريد الإلكتروني:</strong> security@amaan-insurance.sa</p>
                <p className="text-foreground/80"><strong>الهاتف:</strong> +966 11 4444 4444</p>
                <p className="text-foreground/80 mt-4 text-sm">
                  لا نقدم مكافآت مالية لتقارير الثغرات، لكننا نقدر التعاون والمسؤولية في الإفصاح المسؤول.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. التحديثات والصيانة الأمنية</h2>
              <p className="text-foreground/80 leading-relaxed">
                نقوم بتحديث وتصحيح أنظمتنا بشكل دوري لسد أي ثغرات أمنية معروفة. قد تتعرض خدماتنا للصيانة بدون إشعار مسبق في حالات الطوارئ الأمنية.
              </p>
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
          <Link href="/cookies" className="flex items-center gap-2 text-primary hover:text-primary/80">
            سياسة الكوكيز <ArrowRight className="w-4 h-4" />
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
