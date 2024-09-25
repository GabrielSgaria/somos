

import { CardServices } from "./card-services";
// import Image from "next/image";
// import {motion} from "framer-motion"

const servicesCard = [
    {
        title: "Organização Impecável",
        text: "Organizamos cada detalhe do imóvel para receber seus hóspedes com conforto e estilo, garantindo uma experiência de primeira classe.",
        highlighted: true,
        isLeft: true
    },
    {
        title: "Mapeamento de Preços",
        text: "Realizamos um mapeamento estratégico para definir o melhor preço, maximizando suas reservas e mantendo a competitividade no mercado.",
        highlighted: false,
        isLeft: true
    },
    {
        title: "Sessão de Profissionais",
        text: "Oferecemos uma sessão fotográfica profissional para destacar o imóvel e atrair mais hóspedes, capturando a essência de cada espaço.",
        highlighted: false,
        isLeft: true
    },
    {
        title: "Criação de Anúncios Poderosos",
        text: "Criamos anúncios impactantes que comunicam claramente o conceito do imóvel e suas vantagens, atraindo o público ideal.",
        highlighted: true,
        isLeft: true
    },
    {
        title: "Coordenação de Check-in e Check-out",
        text: "Coordenamos todo o processo de check-in e check-out, além de garantir uma limpeza impecável para o próximo hóspede.",
        highlighted: true,
        isLeft: true
    },
    {
        title: "Atendimento Personalizado",
        text: "Oferecemos um atendimento dedicado e eficiente para resolver qualquer necessidade dos hóspedes durante sua estadia.",
        highlighted: false,
        isLeft: false
    },
    {
        title: "Suporte ao Hóspede",
        text: "Disponibilizamos suporte ao hóspede 24/7, garantindo uma experiência tranquila e sem imprevistos durante a estadia.",
        highlighted: false,
        isLeft: false
    },
    {
        title: "Reservas Diretas no Site",
        text: "Facilitamos o processo de reservas diretas por meio de um site dedicado, garantindo praticidade e segurança para o hóspede.",
        highlighted: true,
        isLeft: false
    },
    {
        title: "Gestão Multiplataforma",
        text: "Realizamos a gestão do imóvel em várias plataformas de locação, aumentando a visibilidade e potencial de reservas.",
        highlighted: true,
        isLeft: false
    },
    {
        title: "Manutenção e Inventário",
        text: "Cuidamos de eventuais manutenções e mantemos o inventário atualizado, garantindo que o imóvel esteja sempre em perfeitas condições.",
        highlighted: false,
        isLeft: false
    },
];

export function SectionServices() {
    return (
        <section className="py-10">
            <div className="mx-auto container flex flex-col gap-10 px-3 md:px-0 ">

                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }} className="hidden md:flex mb-20 md:mt-32 w-full max-w-[1200px] h-[300px] md:h-[508px] relative mx-auto rounded-xl shadow-xl overflow-hidden">
                    <Image
                        alt="Image Somos"
                        src="/image/somos-banner.png"
                        fill
                        quality={100}
                        priority
                        sizes="(min-width: 1200px) 50vw, 100vw"
                        className="object-right md:object-center object-cover"
                    />
                </motion.div> */}
                <div className="flex flex-col gap-3 items-center w-full justify-center">
                    <h1 className="text-center font-bold text-4xl md:text-5xl">Conheça nossos serviços</h1>
                    <span className="text-center font-semibold text-lg md:text-xl text-neutral-500 max-w-[700px]">Oferecemos um serviço completo de hospedagem, do check-in ao atendimento personalizado.</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3 md:px-44 mb-20 ">
                    {servicesCard.map((service, i) => (
                        <CardServices
                            key={i}
                            title={service.title}
                            text={service.text}
                            highlighted={service.highlighted}
                            isLeft={i % 2 === 0}
                        />
                    ))}
                </div>

            </div>

        </section >
    )
}