'use client'

// import { sendMensage } from "@/lib/utils";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="w-full min-h-[590px] sm:min-h-[890px] md:min-h-[1080px] xl:min-h-[1280px] 2xl:min-h-[1180px] bg-no-repeat bg-cover md:bg-cover bg-top md:bg-top bg-mobile md:bg-desktop flex justify-center items-center xl:justify-start  mb-20 relative">
            <motion.div
                initial={{ opacity: 0, x: -200, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -200, scale: 0.7 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-0 2xl:top-10 w-full"
            >
                <h1 className="cormorant text-[50px] sm:text-[80px] md:text-[100px] 2xl:text-[100px] font-normal text-neutral-950/80 text-center">
                    SOMOS
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -200, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -200, scale: 0.7 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-14 sm:bottom-24 md:bottom-[15%] w-full flex justify-center"
            >
                {/* <button
                    onClick={() => sendMensage()}
                    className="font-bold px-10 py-2 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 text-white focus:ring-2 focus:ring-neutral-700 hover:shadow-xl transition duration-200"
                >
                    Seja um parceiro somos
                </button> */}
            </motion.div>
            <div className="absolute bottom-0 left-0 w-screen h-16 bg-gradient-to-t from-neutral-50 to-transparent" />
        </section>
    );
}
