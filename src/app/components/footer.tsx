'use client'

import { sendMensage } from "@/lib/utils"
import { Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-neutral-50 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
                    <div className="mb-4 md:mb-0 text-center flex flex-col gap-2">
                        <h3 className="text-3xl font-semibold mb-8 text-center">
                            Entre em contato
                        </h3>
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 mr-2" />
                            <a href="mailto:atendimento@somos.host" target="_blank" className="hover:text-neutral-300 transition-colors text-center text-lg ">
                                atendimento@somos.host
                            </a>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 mr-2" />
                            <a onClick={() => sendMensage()} target="_blank" className="cursor-pointer hover:text-neutral-300 transition-colors text-center md:text-start w-full text-lg">
                                (41) 98807-8097
                            </a>
                        </div>
                        <button
                            onClick={() => sendMensage()}
                            className=" mt-2 font-bold px-2 py-2 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 text-white focus:ring-2 focus:ring-neutral-700 hover:shadow-xl transition duration-200"
                        >
                            Seja um parceiro somos
                        </button>
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
                            {/* <Link href="https://facebook.com" target="_blank" className="hover:text-neutral-800">
                                <Facebook className="w-6 h-6" />
                                <span className="sr-only">Facebook</span>
                            </Link> */}
                            <Link href="https://www.instagram.com/somos.host/" className="hover:text-neutral-300 flex gap-2 transition-colors">
                                <Instagram className="w-6 h-6" />
                                <span className="">@somos.host</span>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center text-neutral-600">
                    <p>&copy; {new Date().getFullYear()} SOMOS. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}