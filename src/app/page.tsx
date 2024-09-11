'use client'
import { sendMensage } from "@/lib/utils";
import { Hero } from "./components/hero";
import { SectionServices } from "./components/section-services";
import { SectionUniqueExperiences } from "./components/section-unique-experiences";
import { SectionWhoWeAre } from "./components/section-who-we-are";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SectionWhoWeAre />
      <SectionUniqueExperiences />
      <SectionServices />
      <section className="py-10 container mx-auto px-3 md:px-20 flex justify-center">
        <div className="bg-bottom bg-cover md:bg-top bg-no-repeat max-w-[1120px] w-full h-[700px] bg-[url('../../public/image/banner-wpp-mobile.png')] md:bg-[url('../../public/image/banner-wpp.png')] rounded-3xl flex md:h-[500px] items-start justify-center md:items-center md:justify-end shadow-lg">
          <div className="md:w-1/2 h-1/2 w-full md:h-full flex flex-col gap-10 items-start justify-center px-10 pt-10 md:pt-0">
            <p className="text-zinc-50 font-bold text-4xl md:text-5xl">PRONTO PARA UMA<span className="text-blue-500"> EXPERIÊNCIA ÚNICA?</span></p>
            <span className="text-zinc-300 text-lg md:text-xl">Tudo para gerar uma vivência excepcional para nossos hóspedes e resultados relevantes para nossos investidores.</span>
            <a
              onClick={() => sendMensage()}
              className=" w-full cursor-pointer shadow-lg hover:shadow-inner hover:shadow-zinc-800 flex items-center justify-center gap-2 text-sm sm:text-base bg-blue-600 hover:bg-blue-600/95 transition-all font-bold text-zinc-50 py-3 px-5 rounded-full"
            >
              <p className="font-bold">
                Entrar em contato
              </p>
              {/* <WhatsappLogo className="size-5 font-bold" /> */}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
