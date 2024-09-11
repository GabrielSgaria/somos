'use client'

import { motion } from "framer-motion"


export function Hero() {
    return (
        <section className="w-full min-h-[750px] md:max-h-[1080px] xl:max-h-[780px] 2xl:min-h-[918px] bg-no-repeat bg-cover bg-right-top md:bg-top bg-mobile md:bg-desktop flex justify-center items-center xl:justify-start xl:pl-48 mb-20 relative ">

            <motion.div
                initial={{ opacity: 0, x: -200, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -200, scale: 0.7 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2 relative h-full px-3 md:px-0">
                <h1 className="cormorant text-9xl md:text-[228px] font-normal text-gray-50 text-center">
                    SOMOS
                </h1>
                <span className="font-light text-xl -mt-5 md:-mt-10 text-gray-50 text-center"> SOMOS UM ESTILO DE HOSPEDAGEM FOCADO EM DESIGN, SERVIÇO E EXPERIÊNCIA</span>
                <button className="font-bold px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                    Saiba Mais
                </button>

            </motion.div>
            <div className="absolute bottom-0 left-0 w-screen h-16 bg-gradient-to-t from-gray-50 to-transparent" />
        </section>
    )
}