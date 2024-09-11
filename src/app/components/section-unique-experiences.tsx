'use client'

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Beer, Map } from "lucide-react";
// import { motion } from "framer-motion"
import Image from "next/image";
// import Link from "next/link"

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
                    <h1 className="text-center font-bold text-5xl">Vivencie o Melhor de Curitiba</h1>
                    <span className="text-center font-semibold text-xl text-gray-500 max-w-[750px]">Descubra a cidade com tours exclusivos, curadoria de cervejas e eventos locais.</span>
                </div>
                <div className="h-screen w-full py-10 ">
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
            </div>
        </section>
    )
}