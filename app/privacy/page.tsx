'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, ArrowRight } from 'lucide-react'

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">سياسة الخصوصية</h1>
          <p className="text-muted-foreground mb-8">آخر تحديث: يناير 2024</p>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. مقدمة</h2>
              <p className="text-foreground/80 leading-relaxed">
                شركة الأمان تحترم خصوصيتك وتلتزم بحماية بياناتك الشخصية. تشرح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام موقعنا وخدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. البيانات التي نجمعها</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                نجمع البيانات التالية عند التقدم بطلب التأمين أو استخدام خدماتنا:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>البيانات الشخصية: الاسم، تاريخ الميلاد، رقم الهوية</li>
                <li>بيانات الاتصال: البريد الإلكتروني، رقم الهاتف، العنوان</li>
                <li>بيانات السيارة: رقم اللوحة، نوع المركبة، سنة الصنع</li>
                <li>بيانات الدفع: معلومات البطاقة البنكية (معالجة بشكل آمن)</li>
                <li>بيانات الاستخدام: سجلات الوصول والنقرات والصفحات المزارة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. كيفية استخدام بياناتك</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                نستخدم بياناتك الشخصية للأغراض التالية فقط:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>معالجة طلبات التأمين والحصول على عروض أسعار</li>
                <li>إدارة وتجديد وثائق التأمين الخاصة بك</li>
                <li>تقديم خدمة العملاء والدعم الفني</li>
                <li>التواصل معك بشأن الخدمات والعروض الخاصة</li>
                <li>الامتثال للمتطلبات القانونية والضرائبية</li>
                <li>تحسين وتطوير خدماتنا</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. حماية بياناتك</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                نتخذ إجراءات أمان صارمة لحماية بياناتك:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>تشفير البيانات باستخدام بروتوكول SSL/TLS</li>
                <li>كلمات المرور المشفرة والمحمية بتجزئة آمن</li>
                <li>الوصول المقيد إلى البيانات الحساسة</li>
                <li>مراقبة دورية للأنظمة للكشف عن التهديدات</li>
                <li>موظفون مدربون على حماية البيانات والخصوصية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. مشاركة البيانات</h2>
              <p className="text-foreground/80 leading-relaxed">
                لا نشارك بياناتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-4">
                <li>عند الضرورة لتقديم الخدمة (مثل شركات الإصلاح والمستشفيات)</li>
                <li>الامتثال للقوانين واللوائح الحكومية</li>
                <li>لحماية حقوقنا والأمان العام</li>
                <li>مع موافقتك الصريحة والمسبقة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. حقوقك</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                لديك الحقوق التالية بخصوص بياناتك الشخصية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>الوصول إلى بياناتك الشخصية وطلب نسخة منها</li>
                <li>تصحيح أو تحديث بياناتك غير الدقيقة</li>
                <li>حذف بياناتك (حق النسيان) في ظروف معينة</li>
                <li>سحب موافقتك على معالجة بياناتك</li>
                <li>الاعتراض على معالجة بياناتك</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. فترة الاحتفاظ بالبيانات</h2>
              <p className="text-foreground/80 leading-relaxed">
                نحتفظ ببياناتك الشخصية طالما لزم الأمر لتقديم الخدمات والامتثال للقوانين. بشكل عام، نحتفظ بالبيانات لمدة 7 سنوات بعد انتهاء العقد، وفقاً للمتطلبات القانونية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-foreground/80 leading-relaxed">
                يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم. يمكنك التحكم في الكوكيز من خلال إعدادات متصفحك. لمزيد من المعلومات، راجع سياسة الكوكيز الخاصة بنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. التغييرات على هذه السياسة</h2>
              <p className="text-foreground/80 leading-relaxed">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، وسنخبرك بالتغييرات المهمة عبر البريد الإلكتروني إذا كان ذلك ضرورياً.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. التواصل معنا</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                إذا كانت لديك أسئلة أو مخاوف بشأن هذه السياسة أو معالجة بياناتك، يرجى التواصل معنا:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-foreground/80"><strong>البريد الإلكتروني:</strong> privacy@amaan-insurance.sa</p>
                <p className="text-foreground/80"><strong>الهاتف:</strong> +966 11 4444 4444</p>
                <p className="text-foreground/80"><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/security" className="flex items-center gap-2 text-primary hover:text-primary/80">
            قواعس الأمان <ArrowRight className="w-4 h-4" />
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
