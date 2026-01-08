"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

const SetaReferencia = () => (
  <svg 
    width="42" 
    height="42" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M15 19L8 12L15 5" 
      stroke="white" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const equipamentos = [
  {
    logo: "/logo4.png",
    name: "Laser Lavieen",
    description: "Laser de Thulium para melasma, poros, textura e rejuvenescimento, com resultados progressivos e downtime leve.",
    details: "Laser de Thulium fracionado que melhora a qualidade da pele de forma global, proporcionando efeito glow, uniformização do tom e estímulo de colágeno. No couro cabeludo, atua estimulando a circulação local e o metabolismo folicular, sendo um grande aliado nos protocolos de fortalecimento capilar. Benefícios: pele mais luminosa, textura refinada, tom uniforme, estímulo do crescimento capilar, redução da queda e fios mais fortes e saudáveis. Tempo de recuperação: de 1 a 3 dias, com leve descamação (no capilar, recuperação rápida e discreta).",
    image: "/lavien.png",
    buttonText: "QUERO LOCAR O LASER LAVIEEN",
    wppMessage: "Olá! Gostaria de solicitar um orçamento para a locação do Laser Lavieen."
  },
  {
    logo: "/logo2.png",
    name: "Endolaser Pioon",
    description: "Laser interno realizado para flacidez e gordura localizada melhorando o contorno através da remodelação profunda com recuperação rápida.",
    details: "Tecnologia minimamente invasiva que utiliza energia laser para redução de gordura localizada, retração da pele e estímulo de colágeno, promovendo definição corporal e facial. Benefícios: melhora do contorno, redução de flacidez e gordura localizada. Tempo de recuperação: curto, geralmente de 3 a 7 dias, variando conforme a área tratada.",
    image: "/pioon.png",
    buttonText: "QUERO LOCAR O ENDOLASER (PIOON)",
    wppMessage: "Olá! Gostaria de mais informações sobre a locação do Endolaser Pioon."
  },
  {
    logo: "/logo5.png",
    name: "Laser CO2 Fracionado",
    description: "Laser fracionado ablativo que atua renovando a pele em profundidade, melhora cicatrizes, rugas e textura.",
    details: "O CO₂ Fracionado é um laser de alta precisão que atua promovendo renovação profunda da pele por meio de microcolunas térmicas, estimulando colágeno e reorganização tecidual. É indicado para rejuvenescimento, tratamento de rugas, cicatrizes de acne, flacidez, manchas e melhora da textura da pele. Seus principais benefícios incluem resultados duradouros, melhora visível já nas primeiras semanas e alto poder de regeneração cutânea. O tempo de recuperação varia conforme a intensidade do tratamento, em média de 5 a 10 dias, com vermelhidão, edema e descamação temporários, permitindo retorno gradual às atividades.",
    image: "/icone.png",
    buttonText: "QUERO LOCAR O LASER CO2 FRACIONADO",
    wppMessage: "Olá! Tenho interesse na locação do Laser CO2 Fracionado."
  },
  {
    logo: "/logo3.png",
    name: "Ultraformer MPT",
    description: "Ultrassom micro e macrofocado de última geração para lifting facial e contorno corporal sem cortes.",
    details: "Tecnologia de ultrassom micro e macrofocado que promove lifting imediato, estímulo intenso de colágeno e melhora da flacidez facial e corporal. Atua em diferentes profundidades, entregando resultados progressivos e naturais. Benefícios: efeito lifting, contorno facial e corporal, melhora da firmeza da pele. Tempo de recuperação: imediato ou até 24 horas, permitindo retorno rápido às atividades.",
    image: "/ultraformer.png",
    buttonText: "QUERO LOCAR O ULTRAFORMER MPT",
    wppMessage: "Olá! Gostaria de agendar a locação do Ultraformer MPT."
  },
  {
    logo: "/logo1.png",
    name: "Etherea MX",
    description: "Plataforma multifuncional para diversos tratamentos a laser e luz pulsada.",
    details: "Radiofrequência fracionada microagulhada que atinge camadas profundas da pele, promovendo contração tecidual e remodelação do colágeno. Indicado para flacidez, textura irregular e melhora do contorno. Benefícios: firmeza, rejuvenescimento profundo e melhora da qualidade da pele. Tempo de recuperação: de 2 a 5 dias, com possível edema leve e pontos discretos.",
    image: "/morpheu.png",
    buttonText: "QUERO LOCAR O ETHEREA MX",
    wppMessage: "Olá! Quero saber a disponibilidade de datas para o Etherea MX."
  }
];

export function EquipamentosSection() {
  const whatsappNumber = "5598984854056";

  return (
    <section 
      // CORREÇÃO DEFINITIVA: border-t e -mt-[1px] para eliminar a linha horizontal
      className="relative py-24 bg-[#CCAA8E] overflow-hidden border-t border-[#CCAA8E] -mt-[1px]"
    >
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-[#f7f1ed] text-center mb-6 leading-tight">
          <span className="italic text-[#fff1cd]">Escolha o melhor</span> da Tecnologia Estética
        </h2>

        <div className="flex md:hidden items-center justify-center gap-2 text-[#fff1cd]/80 mb-10 animate-pulse">
          <MoveHorizontal className="w-5 h-5" />
          <span className="text-xs font-sans uppercase tracking-[0.2em]">Arraste para o lado</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {equipamentos.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-[2.5rem] p-8 shadow-xl flex flex-col items-center text-center h-full border border-gray-100 transition-all hover:shadow-2xl">
                    
                    <div className="h-16 w-full mb-6 flex items-center justify-center">
                      <Image src={item.logo} alt="Logo" width={180} height={70} className="max-h-full object-contain" />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-start w-full min-h-[120px]">
                      <p className="text-[#785340] font-sans text-[17px] leading-relaxed mb-8">
                        {item.description}
                      </p>
                    </div>

                    <div className="h-64 w-full mb-0 flex items-center justify-center">
                      <Image src={item.image} alt={item.name} width={256} height={256} className="max-h-full object-contain" />
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ouro" 
                          className="w-full min-h-[84px] flex items-center justify-center py-4 px-6 font-montserrat font-[900] text-[18px] leading-tight tracking-tighter rounded-2xl border-none text-white whitespace-normal shadow-md transition-transform hover:scale-[1.02] uppercase"
                        >
                          {item.buttonText}
                        </Button>
                      </DialogTrigger>
                      
                      <DialogContent className="w-[95%] sm:max-w-[500px] rounded-[2rem] md:rounded-[2.5rem] bg-[#f7f1ed] border-none p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
                        <DialogHeader className="flex flex-col items-center text-center">
                          <Image src={item.logo} alt="Logo" width={64} height={48} className="h-10 md:h-12 mb-4 object-contain" />
                          <DialogTitle className="text-xl md:text-2xl font-serif text-[#785340] italic leading-tight">
                            Informações sobre {item.name}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="py-4 md:py-6 text-center">
                          <p className="text-[#785340] font-sans text-sm md:text-lg mb-6 leading-relaxed">
                            {item.details}
                          </p>
                          <Image src={item.image} alt={item.name} width={250} height={192} className="h-32 md:h-48 mx-auto mb-8 object-contain" />
                          
                          <Button asChild variant="ouro" className="w-full py-6 md:py-7 text-[16px] md:text-[18px] font-[900] rounded-full uppercase tracking-tighter shadow-lg whitespace-normal leading-tight h-auto">
                            <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.wppMessage)}`} target="_blank" rel="noopener noreferrer">
                              FALAR COM CONSULTOR NO WHATSAPP
                            </a>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="bg-transparent border-none -left-16 hover:bg-transparent shadow-none text-white transition-opacity">
                <SetaReferencia />
              </CarouselPrevious>
              <CarouselNext className="bg-transparent border-none -right-16 hover:bg-transparent shadow-none text-white transition-opacity">
                <SetaReferencia />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}