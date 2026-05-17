import Hero from "@/components/hero";
import Applications from "@/components/applications";
import Team from "@/components/team";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#0F0905]">
      
      {/* Górna sekcja z obrazkiem w tle */}
      <div 
        className="w-full h-auto min-h-[924px] pt-[192px] relative"
        style={{
          backgroundImage: "url('/bgjuicy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Hero />
        
        {/* Płynne przejście między tłem ze zdjęcia a tłem strony */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-[#0F0905] pointer-events-none" />
      </div>

      {/* Główna zawartość poniżej, na czarnym tle */}
      <div className="w-full -mt-[64px] overflow-hidden">
        <div id="podania">
          <Applications />
        </div>
        <div id="zarzad">
          <Team />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </div>

      <Footer />

    </div>
  );
}