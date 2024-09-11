import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-950 py-8 my-20">
            <div className="border-zinc-300/90 border-t-[1px] w-[50%] mx-auto pb-20" />
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
                    <div className="mb-4 md:mb-0 text-center flex flex-col gap-2">
                        <h3 className="text-3xl font-semibold mb-8 text-center">Entre em contato</h3>
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 mr-2" />
                            <a href="mailto:atendimento@somos.host" className="hover:text-gray-800 text-center text-lg ">atendimento@somos.host</a>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 mr-2" />
                            <a href="tel:+554188078097" className="hover:text-gray-800 text-center md:text-start w-full text-lg">(41) 8807-8097</a>
                        </div>
                    </div>

                    <div className="mb-4 md:mb-0 text-center md:text-left ">
                        <h3 className="text-3xl font-semibold mb-8">Disponibilidade</h3>
                        <div className="flex flex-col gap-2 text-lg">
                            <p>Segunda a Sexta: 9h às 18h</p>
                            <p>Sábado: 9h às 13h</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-semibold mb-8">Siga-nos</h3>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com" className="hover:text-gray-800">
                                <Facebook className="w-6 h-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://www.instagram.com/somos.host/" className="hover:text-gray-800">
                                <Instagram className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://twitter.com" className="hover:text-gray-800">
                                <Twitter className="w-6 h-6" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p>&copy; {new Date().getFullYear()} SOMOS. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}