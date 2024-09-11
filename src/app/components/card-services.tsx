import { cn } from "@/lib/utils";

interface CardServicesProps {
    className?: string,
    classNameText?: string,
    title: string,
    text: string,
}

export function CardServices({ className, title, text, classNameText }: CardServicesProps) {
    return (
        <div className={cn(`w-full h-full max-h-96 rounded-xl shadow-xl`, className)}>
            <div className="p-5 flex flex-col gap-3">
                <h1 className={cn(`text-2xl font-extrabold`)}>
                    {title} 
                </h1>
                <span className={cn(`text-lg text-wrap`,  classNameText)}>{text}</span>

            </div>
        </div>
    )
}