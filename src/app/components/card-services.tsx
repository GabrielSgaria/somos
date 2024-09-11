'use client';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef } from "react";

interface CardServicesProps {
    title: string;
    text: string;
    highlighted?: boolean;
    isLeft?: boolean;
}

export function CardServices({ title, text, highlighted = false, isLeft = true }: CardServicesProps) {
    const hasAnimated = useRef(false);

    const containerClass = highlighted
        ? "bg-blue-500 text-gray-50"
        : "bg-gray-100 text-gray-950";

    const textClass = highlighted
        ? "text-gray-50"
        : "text-gray-600";

    const initialX = isLeft ? -200 : 200;

    return (
        <motion.div
            initial={{ opacity: 0, x: initialX }}
            whileInView={!hasAnimated.current ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: isLeft ? 0.1 : 0.2 }}
            onAnimationComplete={() => (hasAnimated.current = true)}
            viewport={{ once: true }}
            className={cn(`w-full h-full max-h-96 rounded-xl shadow-xl`, containerClass)}
        >
            <div className="p-5 flex flex-col gap-3">
                <h1 className={cn(`text-2xl font-extrabold`)}>
                    {title}
                </h1>
                <span className={cn(`text-lg text-wrap`, textClass)}>
                    {text}
                </span>
            </div>
        </motion.div>
    );
}
