import { services } from "@/lib/services";
import { CardServices } from "./card-services";

export function SectionServices() {
    return (
        <section className="py-10">
            <div className="mx-auto container flex flex-col gap-10 px-3 md:px-0">

                <div className="flex flex-col gap-3 items-center w-full justify-center">
                    <h1 className="text-center font-bold text-5xl">Conheça nossos serviços</h1>
                    <span className="text-center font-semibold text-xl text-gray-500 max-w-[700px]">Oferecemos um serviço completo de hospedagem, do check-in ao atendimento personalizado.</span>
                </div>

                <div className="grid grid-cols-1 md:columns-2 md:block md:gap-x-5 md:space-y-5 gap-y-4 gap-x-3 md:px-20 ">
                    {services.map((service, i) => (
                        <CardServices
                            key={i}
                            title={service.title}
                            text={service.text}
                            className={i % 2 === 0 ? "bg-blue-500 text-gray-50" : "bg-gray-100 text-gray-950"}
                            classNameText={i % 2 === 0 ? "text-gray-50" : "text-gray-600"} />
                    ))}

                </div>
            </div>

        </section>
    )
}