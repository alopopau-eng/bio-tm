'use client'

import Link from 'next/link'
import { Shield, ArrowRight } from 'lucide-react'

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">الشروط والأحكام</h1>
          <p className="text-muted-foreground mb-8">آخر تحديث: يناير 2024</p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. قبول الشروط</h2>
              <p className="leading-relaxed">
                باستخدامك لموقع وخدمات شركة الأمان، فإنك توافق على جميع الشروط والأحكام المذكورة هنا. إذا كنت لا توافق على أي منها، يرجى عدم استخدام الخدمة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. خدمات التأمين</h2>
              <p className="mb-4 leading-relaxed">
                نقدم خدمات تأمين السيارات الشاملة، بما في ذلك:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>التأمين الشامل ضد جميع الأضرار والحوادث</li>
                <li>التغطية الطبية للسائق والركاب</li>
                <li>خدمة الطوارئ على مدار الساعة</li>
                <li>تحديث الوثائق والعقود</li>
                <li>خدمة العملاء والدعم الفني</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. الأهلية والمسؤولية</h2>
              <p className="mb-4 leading-relaxed">
                لاستخدام خدماتنا، يجب أن تكون:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>بالغاً من العمر 18 سنة على الأقل</li>
                <li>تملك هوية شخصية صحيحة ومعترف بها</li>
                <li>قادراً على إبرام عقد ملزم قانوناً</li>
                <li>تملك رخصة قيادة سارية المفعول</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. المعلومات المقدمة</h2>
              <p className="leading-relaxed">
                تضمن أن جميع المعلومات التي تقدمها صحيحة ودقيقة وكاملة. تحمل أنت المسؤولية الكاملة عن صحة البيانات المقدمة. إذا قدمت معلومات كاذبة أو مضللة، قد نسحب الوثيقة أو نرفع دعوى قانونية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. الأقساط والدفع</h2>
              <p className="mb-4 leading-relaxed">
                تتعهد بدفع جميع الأقساط المستحقة في الوقت المحدد. يتعين عليك:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>دفع القسط الأول قبل تفعيل الوثيقة</li>
                <li>دفع الأقساط اللاحقة في الموعد المحدد</li>
                <li>الالتزام بطرق الدفع المتاحة (بطاقة ائتمان، تحويل بنكي)</li>
                <li>تحديث بيانات الدفع فوراً عند تغييرها</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. الاستبعادات والتحديدات</h2>
              <p className="mb-4 leading-relaxed">
                هناك حالات لا تغطيها وثيقة التأمين:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>القيادة تحت تأثير الكحول أو المخدرات</li>
                <li>القيادة بدون رخصة صحيحة</li>
                <li>الاستخدام غير المصرح به للسيارة</li>
                <li>عدم الالتزام بقوانين المرور</li>
                <li>الأضرار المتعمدة أو الإهمال الشديد</li>
                <li>الحوادث في أماكن محظورة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. الحد الأقصى للتعويض</h2>
              <p className="leading-relaxed">
                تحدد وثيقة التأمين الحد الأقصى للتعويض. لا نتحمل أي مسؤولية عن الأضرار التي تتجاوز هذا الحد. يجب عليك قراءة الوثيقة بعناية لفهم التغطية والحدود.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. الإلغاء والتجديد</h2>
              <p className="mb-4 leading-relaxed">
                يحق لك إلغاء الوثيقة في أي وقت، لكن:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>يجب إخطارنا كتابياً بطلب الإلغاء</li>
                <li>قد لا نرد جزء من الأقساط حسب شروط العقد</li>
                <li>التغطية تنتهي من تاريخ الإلغاء</li>
                <li>يحق لنا إلغاء الوثيقة إذا لم تدفع الأقساط</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. المطالبات والتعويضات</h2>
              <p className="mb-4 leading-relaxed">
                في حالة الحادث أو الضرر:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>أخبرنا فوراً (خلال 24 ساعة إن أمكن)</li>
                <li>قدم جميع الوثائق والمستندات المطلوبة</li>
                <li>لا تقوم بأي إصلاحات دون موافقة منا</li>
                <li>تعاون مع فريق التحقيق لدينا</li>
                <li>نلتزم بمعالجة المطالبة خلال 30 يوماً</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. حل المنازعات</h2>
              <p className="leading-relaxed">
                في حالة أي خلاف، نتفق على محاولة حله بالتفاوض الودي أولاً. إذا لم يتم التوصل إلى اتفاق، يمكن اللجوء إلى المحاكم السعودية المختصة. جميع الاتفاقيات خاضعة لقوانين المملكة العربية السعودية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. التعديلات على الشروط</h2>
              <p className="leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تعديلات عبر البريد الإلكتروني أو من خلال الموقع. استمرارك في استخدام الخدمة يعني قبولك للشروط الجديدة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. المسؤولية المحدودة</h2>
              <p className="leading-relaxed">
                شركة الأمان غير مسؤولة عن الأضرار غير المباشرة أو الخسائر المتعلقة باستخدام أو عدم استخدام الخدمة. تحمل أنت المسؤولية الكاملة عن استخدام الموقع والخدمات.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. التواصل والإخطارات</h2>
              <p className="leading-relaxed">
                جميع الإخطارات والتواصل بيننا سيتم من خلال البريد الإلكتروني، الهاتف، الرسائل النصية، أو من خلال الموقع. تتعهد بتحديث بيانات الاتصال لديك بانتظام.
              </p>
            </section>

            <section className="bg-accent/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">التواصل معنا</h2>
              <p className="text-foreground/80 mb-2"><strong>البريد الإلكتروني:</strong> support@amaan-insurance.sa</p>
              <p className="text-foreground/80 mb-2"><strong>الهاتف:</strong> +966 11 4444 4444</p>
              <p className="text-foreground/80"><strong>الموقع:</strong> www.amaan-insurance.sa</p>
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
          <Link href="/cookies" className="flex items-center gap-2 text-primary hover:text-primary/80">
            سياسة الكوكيز <ArrowRight className="w-4 h-4" />
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
