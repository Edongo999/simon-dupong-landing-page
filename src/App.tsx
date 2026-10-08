import Navbar from "@/navbar/Navbar";
import Hero from "@/Hero";
import WhatsAppButton from "./whatsapp/WhatsAppButton";
import "./i18n";

function App() {
  return (
    <main className="bg-[#030303] text-white">
      <Navbar />
      <WhatsAppButton />

      <section id="accueil">
        <Hero />
      </section>

      <section id="apropos">{/* À développer */}</section>

      <section id="parcours">{/* À développer */}</section>

      <section id="activites">{/* À développer */}</section>

      <section id="vision">{/* À développer */}</section>

      <section id="contact">{/* À développer */}</section>
    </main>
  );
}

export default App;
