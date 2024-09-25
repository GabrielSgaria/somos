import {
    LayoutGrid,
    Tag,
    Camera,
    Megaphone,
    CheckSquare,
    Users,
    BarChart,
    Globe,
    Home,
    Wrench
  } from "lucide-react"
  import Image from "next/image"
  
  export default function PropertyServices() {
    const services = [
      { icon: LayoutGrid, text: "Organização do imóvel para receber os hóspedes" },
      { icon: Tag, text: "Mapeamento do melhor preço para atrair reservas" },
      { icon: Camera, text: "Sessão de fotos profissionais para o anúncio" },
      { icon: Megaphone, text: "Criação de um anúncio poderoso e que reflita o conceito" },
      { icon: CheckSquare, text: "Coordenação de checkin e checkout + limpeza" },
      { icon: Users, text: "Atendimento ao usuário" },
      { icon: BarChart, text: "Relatório em tempo real ao investidor" },
      { icon: Globe, text: "Site com reservas diretas" },
      { icon: Home, text: "Gestão multiplataforma de locação" },
      { icon: Wrench, text: "Eventuais manutenções e inventário" }
    ]
  
    return (
      <section className="w-full relative py-24 md:py-32 overflow-hidden">
        <Image
          alt="Background"
          src="/image/banner2.jpg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          className="opacity-1 -z-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-950">Nossos Serviços</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center p-4">
                <div className="p-3 rounded-full mb-4">
                  <service.icon className="w-12 h-12 text-neutral-950" />
                </div>
                <p className="text-xs sm:text-base text-center text-card-foreground">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }