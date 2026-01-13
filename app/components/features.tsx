// app/components/features.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const differentials = [
    {
        image: "/star.png",
        title: "Tecnologia Premium",
        description:
            "A Locar Estética entrega acesso ágil a tecnologias de alto padrão, permitindo que sua clínica ofereça tratamentos de excelência sem o investimento pesado da compra.",
    },
    {
        image: "/star.png", 
        title: "Segurança e Garantia", 
        description:
            "Cada equipamento passa por revisão técnica rigorosa e segue normas oficiais, garantindo performance estável, segurança total e resultados de alto nível.",
    },
    {
        image: "/star.png",
        title: "Plano Personalizado",
        description:
            "Planos inteligentes que se adaptam ao ritmo da sua clínica. Receba o suporte completo e trabalhe com tecnologia de ponta além de resultado premium.",
    },
    {
        image: "/star.png",
        title: "Treinamento Clínico",
        description:
            "Workshops com orientação especializada para você e sua equipe dominarem a tecnologia com segurança, precisão e confiança.",
    },
];

export function Features() {
    return (
        <section id="tecnologias" className="py-24 bg-[#F2E6D9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* TÍTULO CENTRAL */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-[#785340] font-light leading-snug max-w-2xl mx-auto">
                        <span className="italic text-[#cca85e]">Por que</span> equipar a sua clínica com <span className="italic text-[#cca85e]">a Locar?</span>
                    </h2>
                </div>

                {/* GRADE DE CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentials.map((item, index) => (
                        <Card
                            key={index}
                            className="bg-white border-none rounded-[2rem] transition-all hover:scale-[1.03] flex flex-col items-center min-h-[300px]"
                        >
                            <CardHeader className="text-center pt-4 pb-1 px-6 flex flex-col items-center">
                                {/* ESTRELA PNG */}
                                <div className="mb-8">
                                    <div className="relative h-16 w-16">
                                        <Image 
                                            src={item.image} 
                                            alt="Star Icon"
                                            fill 
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            <CardTitle className="text-2xl font-josefin font-semibold mb-4 bg-gradient-to-r from-[#8C6246] via-[#cca85e] to-[#8C6246] bg-clip-text text-transparent">
                                {item.title}
                            </CardTitle>
                            </CardHeader>

                            <CardContent className="px-8 pb-1 text-bettween">
                                {/* DESCRIÇÃO COM FONTE MONTSERRAT */}
                                <p className="text-[#85532c] text-lg font-montserrat leading-[1.2] tracking-tight">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}