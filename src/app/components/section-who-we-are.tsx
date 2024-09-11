'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import { sendMensage } from "@/lib/utils";

export function SectionWhoWeAre() {
    return (
        <section className="mx-auto container flex flex-col gap-10 px-3 md:px-0 text-gray-950 pb-10 items-center">
            <div className="flex flex-col gap-3 items-center w-full justify-center">
                <h1 className="text-center font-bold text-4xl md:text-5xl">Quem Somos?</h1>
                <span className="text-center font-semibold text-lg md:text-xl text-gray-500 max-w-[750px]">Vestimos os apartamentos com diferenciais que os transformam em verdadeiros hotspots de atração de hóspedes.</span>
            </div>
            {/* Seção desc. */}
            <div className="flex flex-col gap-20 justify-around mt-10 items-center md:flex-row">
                <motion.div
                    initial={{ opacity: 0, x: -200, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -200, scale: 0.7 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-[300px] md:w-[660px] md:h-[530px] relative rounded-xl shadow-md ">
                    <Image
                        alt=""
                        src="/image/propertys/3.jpg"
                        fill
                        quality={100}
                        priority
                        sizes="(min-width: 808px) 50vw, 100vw"
                        className="object-cover z-20 rounded-xl"
                    />
                    <div className="w-[300px] h-[350px] bg-gray-300/20 backdrop-blur-lg hidden md:absolute z-10 -left-8 top-24 rounded-xl shadow-xl"/>
                    <div className="w-[450px] h-[350px] bg-gray-300/10 backdrop-blur-lg hidden md:absolute z-10 right-24 -bottom-8 rounded-xl shadow-sm"/>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -200, scale: 0.7 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-10 justify-center items-center md:max-w-[80%] ">
                    <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                        <h2 className="text-3xl font-bold text-center md:text-start">Experiência</h2>
                        <ul className="list-inside my-2">
                            <li className="text-center text-lg md:text-xl max-w-[600px] md:text-start">Tour com vantagens em dobro, curadoria de cervejas artesanais, pub crawl em Curitiba.</li>
                        </ul>
                        <Link href={``} className="md:pt-5 font-semibold text-blue-500 hover:text-blue-600 transition-all duration-500">Ver mais...</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                        <h2 className="text-3xl font-bold text-center md:text-start">Serviços</h2>
                        <ul className="list-inside my-2">
                            <li className="text-center text-lg md:text-xl max-w-[600px] md:text-start">Gestão completa do imóvel, atendimento ao usuário, relatórios em tempo real.</li>
                        </ul>
                        <Link href={``} className="md:pt-5 font-semibold text-blue-500 hover:text-blue-600 transition-all duration-500">Ver mais...</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full">
                        <h2 className="text-3xl font-bold text-center md:text-start">Design</h2>
                        <ul className="list-inside my-2">
                            <li className="text-center text-lg md:text-xl max-w-[600px] md:text-start">Itens icônicos que traduzem nosso lifestyle.</li>
                        </ul>
                        <Link href={``} className="md:pt-5 font-semibold text-blue-500 hover:text-blue-600 transition-all duration-500">Ver mais...</Link>
                    </div>
                </motion.div>
            </div>
            <button onClick={() => sendMensage()} className="w-52 font-bold px-8 py-2 mt-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                Saiba Mais
            </button>
        </section>
    )
}