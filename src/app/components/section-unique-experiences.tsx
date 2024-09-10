'use client'

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconClipboardCopy, IconFileBroken, IconSignature } from "@tabler/icons-react";
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link"

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
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton1 />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton2 />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton3 />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },

];

export function SectionUniqueExperiences() {
    return (
        <section className="py-28 text-gray-950 items-center h-full bg-gray-100">
            <div className="mx-auto container flex flex-col gap-10 px-3 md:px-0">

                <div className="flex flex-col gap-3 items-center w-full justify-center">
                    <h1 className="text-center font-bold text-5xl">Vivencie o Melhor de Curitiba</h1>
                    <span className="text-center font-semibold text-xl text-gray-500 max-w-[750px]">Descubra a cidade com tours exclusivos, curadoria de cervejas e eventos locais.</span>
                </div>
                <div className="flex flex-col gap-10 justify-around mt-10 items-center md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: 200, scale: 0.7 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -200, scale: 0.7 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-10 justify-center items-center md:max-w-[80%] ">
                        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                            <h2 className="text-3xl font-bold text-center md:text-start">Experiência</h2>
                            <ul className="list-inside my-2">
                                <li className="text-center text-xl max-w-[600px] md:text-start">Tour com vantagens em dobro, curadoria de cervejas artesanais, pub crawl em Curitiba.</li>
                            </ul>
                            <Link href={``} className="md:pt-5 font-semibold text-blue-500 hover:text-blue-600 transition-all duration-500">Ver mais...</Link>
                        </div>

                        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                            <h2 className="text-3xl font-bold text-center md:text-start">Serviços</h2>
                            <ul className="list-inside my-2">
                                <li className="text-center text-xl max-w-[600px] md:text-start">Gestão completa do imóvel, atendimento ao usuário, relatórios em tempo real.</li>
                            </ul>
                            <Link href={``} className="md:pt-5 font-semibold text-blue-500 hover:text-blue-600 transition-all duration-500">Ver mais...</Link>
                        </div>

                        <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full">
                            <h2 className="text-3xl font-bold text-center md:text-start">Design</h2>
                            <ul className="list-inside my-2">
                                <li className="text-center text-xl max-w-[600px] md:text-start">Itens icônicos que traduzem nosso lifestyle.</li>
                            </ul>
                            <Link href={``} className="md:pt-5 font-semibold text-blue-500 hover:text-blue-600 transition-all duration-500">Ver mais...</Link>
                        </div>
                    </motion.div>
                    <div className="h-screen w-full py-20 ">
                        <BentoGrid className="max-w-xl mx-auto ">
                            {items.map((item, i) => (
                                <BentoGridItem
                                    key={i}
                                    title={item.title}
                                    description={item.description}
                                    header={item.header}
                                    icon={item.icon}
                                    className={i === 1 || i === 1 ? "md:col-span-1" : ""}
                                />
                            ))}
                        </BentoGrid>
                    </div>
                </div>
            </div>
        </section>
    )
}