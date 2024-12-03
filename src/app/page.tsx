import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
//import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/shared/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <section id="about">
        <Services />
      </section>
      <section id="services">
        <Pricing />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      {/*<Team />*/}
      <FAQ />

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
