import About from "@/components/about";
import Contacts from "@/components/contacts";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Statistics from "@/components/statistics";
import Team from "@/components/team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <About
        title="Über Uns"
        description="OMSK Team ist ein Unternehmen, das sich auf die Herstellung von Edelstahlprodukten spezialisiert hat. Wir bieten unseren Kunden eine breite Palette von Produkten und Dienstleistungen, die auf die spezifischen Bedürfnisse unserer Kunden zugeschnitten sind."
        image="/about1.webp"
        position="left"
        height="h-[500px]"
      />
      <About
        title="Unsere Dienstleistungen"
        description="Unsere Dienstleistungen umfassen die Herstellung von Edelstahlprodukten, die Montage und Installation von Edelstahlprodukten, die Wartung und Reparatur von Edelstahlprodukten, die Beratung und Planung von Edelstahlprojekten."
        image="/about2.webp"
        position="right"
        height="h-[300px]"
      />
      <About
        title="Unsere Produkte"
        description="Unsere Produkte umfassen Edelstahlrohre, Edelstahlbleche, Edelstahlprofile, Edelstahlkonstruktionen, Edelstahlmöbel, Edelstahlzäune, Edelstahlgeländer, Edelstahlhandläufe, Edelstahlküchen
        und vieles mehr."
        image="/about3.webp"
        position="left"
        height="h-[400px]"
        mxAuto={false}
      />

      <Gallery />
      <div
        className="fixed-bg w-full h-[40vh]"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      />
      <Team />
      <Contacts />
    </main>
  );
}
