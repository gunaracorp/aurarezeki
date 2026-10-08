import { Navbar } from "@/components/aura/navbar";
import { Hero } from "@/components/aura/hero";
import { AuroraDivider } from "@/components/aura/aurora-divider";
import { About } from "@/components/aura/about";
import { Marquee } from "@/components/aura/marquee";
import { Benefits } from "@/components/aura/benefits";
import { HowItWorks } from "@/components/aura/how-it-works";
import { Testimonials } from "@/components/aura/testimonials";
import { Pricing } from "@/components/aura/pricing";
import { Faq } from "@/components/aura/faq";
import { CtaBanner } from "@/components/aura/cta-banner";
import { Location } from "@/components/aura/location";
import { ContactForm } from "@/components/aura/contact-form";
import { SeoContent } from "@/components/aura/seo-content";
import { Footer } from "@/components/aura/footer";
import { FloatingWhatsapp } from "@/components/aura/floating-whatsapp";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <AuroraDivider />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <AuroraDivider />
        <Pricing />
        <Faq />
        <CtaBanner />
        <Location />
        <ContactForm />
        <SeoContent />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
