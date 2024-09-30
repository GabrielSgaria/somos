'use client'

// import { sendMensage } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="w-full min-h-[590px] sm:min-h-[890px] md:min-h-[1080px] xl:min-h-[1280px] 2xl:min-h-[1180px] bg-no-repeat bg-cover md:bg-cover bg-top md:bg-top bg-mobile md:bg-desktop flex justify-center items-center xl:justify-start  mb-20 relative">
            <motion.div
                initial={{ opacity: 0, x: -200, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -200, scale: 0.7 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-4 2xl:top-20 w-full"
            >
                <Image
                    width={300}
                    height={300}
                    quality={100}
                    priority
                    alt="Logo Somos"
                    src="/image/logo/logo-sem-fundo.png"
                    className="w-44 sm:w-60 md:w-96 mx-auto"
                />
            </motion.div>
            <div className="absolute bottom-0 left-0 w-screen h-16 bg-gradient-to-t from-neutral-50 to-transparent" />
        </section>
    );
}
