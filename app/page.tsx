import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getServerEnv } from "@/lib/env";

export default function HomePage() {
  const { adminEmail, apiKey } = getServerEnv();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact adminEmail={adminEmail} apiKey={apiKey} />
      </main>
      <Footer />
    </>
  );
}
