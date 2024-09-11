'use client'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowRight, Beer, Map } from "lucide-react";
import { motion } from "framer-motion"
import Image from "next/image";
import { sendMensage } from "@/lib/utils";


const Skeleton1 = () => (
    <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
        <Image
            alt=""
            src="/image/tour-o-que-fazer-curitiba.png"
            fill
            quality={100}
            priority
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover "
        />
    </div>
);
const Skeleton2 = () => (
    <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
        <Image
            alt=""
            src="/image/cervejas.png"
            fill
            quality={100}
            priority
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover "
        />
    </div>
);
const Skeleton3 = () => (
    <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
        <Image
            alt=""
            src="/image/pub.jpg"
            fill
            quality={100}
            priority
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover "
        />
    </div>
);
const items = [
    {
        title: "Tour com vantagens em dobro",
        description: "Vantagens nos melhores restaurantes de Curitiba disponível em cima da cama, esperando que hóspede chegue e desfrute de seus benefícios.",
        header: <Skeleton1 />,
        icon: <Map className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Curadoria de cervejas artesanais.",
        description: "Em cada apartamento, selecionadas por um sommelier convidado na qual os hóspedes poderão sentir o sabor da cidade com muito estilo e bom gosto.",
        header: <Skeleton2 />,
        icon: <Beer className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Pub Crawl recorrente.",
        description: "Para os hóspedes que estiverem na cidade, com vantagens e descontos nos melhores bares de Curitiba.",
        header: <Skeleton3 />,
        icon: <Beer className="h-4 w-4 text-neutral-500" />,
    },

];

export function SectionUniqueExperiences() {
    return (
        <section className="py-28 text-gray-950 items-center h-full bg-gray-100">
            <div className="mx-auto container flex flex-col gap-10 px-3 md:px-0">

                <div className="flex flex-col gap-3 items-center w-full justify-center">
                    <h1 className="text-center font-bold text-4xl md:text-5xl">Vivencie o Melhor de Curitiba</h1>
                    <span className="text-center font-semibold text-lg md:text-xl text-gray-500 max-w-[750px]">Descubra a cidade com tours exclusivos, curadoria de cervejas e eventos locais.</span>
                </div>
                <div className="h-full w-full py-10 ">
                    <BentoGrid className="max-w-9xl mx-auto ">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={i === 3 || i === 3 ? "md:col-span-3" : ""}
                            />
                        ))}
                    </BentoGrid>
                </div>
                <div className="flex flex-col gap-20 justify-around mt-10 items-center md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: 200, scale: 0.7 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -200, scale: 0.7 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-10 justify-center items-center md:max-w-[50%] ">
                        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                           <h1 className="mb-2 text-blue-600 font-bold tracking-wider text-base flex gap-2 justify-center items-center">Design Icônico e Inspirador <ArrowRight size={20} className="hidden md:flex"/></h1>
                            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-start">Cada apartamento é decorado com itens que traduzem nosso conceito de lifestyle.</h2>

                            <p className="text-center text-lg md:text-xl max-w-[600px] md:text-start my-2">
                                Ítens icônicos que traduzem o conceito e o
                                estilo de vida que nossos hóspedes se sentem pertencentes, reforçando ainda mais esse vínculo
                            </p>

                            <button onClick={() => sendMensage()} className="w-52 font-bold px-8 py-2 mt-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                                Saiba Mais
                            </button>
                        </div>


                    </motion.div>
                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -200, scale: 0.7 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -200, scale: 0.7 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-[300px] md:w-[660px] md:h-[530px] relative rounded-xl shadow-md">
                        <Image
                            alt=""
                            src="/image/grade.png"
                            fill
                            quality={100}
                            priority
                            sizes="(min-width: 808px) 50vw, 100vw"
                            className="object-cover rounded-xl z-20"
                        />
                        <div className="w-[300px] h-[350px] bg-gray-300/20 backdrop-blur-lg hidden md:absolute z-10 -left-8 top-24 rounded-xl shadow-xl" />
                        <div className="w-[450px] h-[350px] bg-gray-300/10 backdrop-blur-lg hidden md:absolute z-10 left-24 -bottom-8 rounded-xl shadow-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}