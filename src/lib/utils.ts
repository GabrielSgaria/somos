import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function sendMensage() {
    const linkWhatsApp =
      "https://wa.me/" +
      55041988078097 +
      "?text=" +
      encodeURIComponent("Olá, vim através do site da SOMOS!");

    window.open(linkWhatsApp, "_blank");
  }

 export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};