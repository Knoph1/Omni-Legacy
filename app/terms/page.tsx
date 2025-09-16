import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the services provided by Omni-Legacy Company Limited ("O.L Co. Ltd.", "we", "us" or "our"),
                you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to
                abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Omni-Legacy Limited provides IT solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Custom Software Development</li>
                <li>IT Consultancy & Systems Integration</li>
                <li>Cybersecurity & IT Infrastructure</li>
                <li>Cloud Solutions & Digital Transformation</li>
                <li>Training & Technical Support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms are specified in individual service agreements. Generally, payments are due within 30 days
                of invoice date unless otherwise agreed. Late payments may incur additional charges as per Kenyan law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All intellectual property rights in custom software and solutions developed by O.L Co. Ltd. shall be
                transferred to the client upon full payment, unless otherwise specified in the service agreement. O.L
                Co. Ltd. retains rights to general methodologies and know-how.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                O.L Ltd. shall not be liable for any indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill or other intangible losses,
                resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the Republic of Kenya. Any disputes arising
                from these terms shall be subject to the exclusive jurisdiction of Kenyan courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <p className="text-foreground font-medium">Omni-Legacy Company Limited</p>
                <p className="text-muted-foreground">Email: info@omni-legacy.tech</p>
                <p className="text-muted-foreground">Phone: +254 790 558 956</p>
                <p className="text-muted-foreground">Address: Nairobi, Kenya</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
