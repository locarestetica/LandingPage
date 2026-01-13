// app/components/hero-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const whatsappNumber = "5598984854056";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a locação das máquinas de estética.");

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[url('/bg1.png')] bg-cover bg-no-repeat bg-top 
                 pt-1 pb-10 md:pt-14 md:pb-20 h-auto md:min-h-[850px] flex flex-col items-center md:items-start" 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        
        {/* TÍTULO */}
        <div className="max-w-5xl mb-6 md:mb-12 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-7xl font-serif leading-[1.2] md:leading-[1.1] font-light text-[#f7f1ed]">
            <span className="italic text-[#fff1cd]">Eleve o nível</span> da sua clínica com equipamentos de <span className="italic text-[#fff1cd]">alto padrão</span>
          </h1>
        </div>

        {/* IMAGEM DOS EQUIPAMENTOS */}
        <div className="flex justify-center mb-6 md:mb-16 w-full">
          <Image
            src="/maquinas.png"
            alt="Equipamentos de alta tecnologia para estética"
            width={1100} 
            height={550} 
            priority
            className="object-contain w-full max-w-4xl md:max-w-5xl h-auto" 
          />
        </div>
        
        {/* TEXTO INFERIOR */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center w-full px-2"> 
          <p className="text-[#785340] text-base md:text-2xl lg:text-3xl mb-6 md:mb-10 font-sans font-medium leading-tight md:leading-relaxed">
            Garanta sua tecnologia premium e eleve a qualidade dos seus tratamentos.
          </p>
          
          <Button 
            asChild
            variant="marromExato" 
            className="font-montserrat w-full md:w-fit px-6 md:px-10 h-14 md:h-20 text-lg md:text-3xl font-[900] rounded-xl shadow-lg tracking-widest uppercase transition-transform hover:scale-105 active:scale-95"
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              CONHECER TECNOLOGIAS
            </a>
          </Button>         
        </div>
        
      </div>
    </section>
  );
}