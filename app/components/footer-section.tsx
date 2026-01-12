// app/components/footer-section.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  const whatsappNumber = "5598984854056"; 
  const message = encodeURIComponent("Olá! Gostaria de solicitar uma proposta personalizada.");

  return (
    <section className="relative w-full flex flex-col">
      {/* 1. PARTE SUPERIOR (Bege Claro) */}
      <div className="bg-[#f2e3d7] pt-24 pb-16 px-4 text-center flex flex-col items-center">
        {/* Estrela PNG */}
        <div className="mb-8 relative w-20 h-20">
          <Image 
            src="/star.png" 
            alt="Estrela Decorativa" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Títulos - Aplicada a classe font-serif (The Seasons) */}
        <h2 className="text-[#b89a55] text-4xl md:text-5xl font-serif leading-tight mb-2">
          Solicite uma proposta personalizada
        </h2>
        <p className="text-[#85532c] text-3xl md:text-5xl font-serif italic font-light mb-8">
          Atendemos em Maranhão e Piauí
        </p>

        {/* Lista de Equipamentos */}
        <p className="text-[#785340]/80 text-sm md:text-0.2rem lg:text-base font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
          Ultraformer MPT, BodyTite Morpheus, Laser Lavieen, <br />
          CO₂ Fracionado, Endolaser e Freddo.
        </p>
      </div>

      {/* 2. PARTE INFERIOR (Marrom Escuro) - Restaurado tamanho original */}
      <div className="bg-[#8D6547] h-48 w-full flex flex-col items-center justify-center pt-16">
        {/* Redes Sociais - Tamanho w-15 h-15 restaurado conforme seu original */}
        <div className="flex gap-6 mt-4">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            <Image src="/whatsapp-icon.png" alt="WhatsApp" width={70} height={70} />
          </a>
          <a 
            href="https://www.instagram.com/locarestetica" 
            className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            <Image src="/instagram-icon.png" alt="Instagram" width={70} height={70} />
          </a>
        </div>
      </div>

      {/* 3. BOTÃO CENTRALIZADO NA DIVISÃO - Tamanho h-14 original mantido */}
      <div className="absolute left-1/2 top-[calc(100%-12rem)] -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-xs px-4">
        <Button 
          asChild
          variant="marromExato" 
          className="w-full h-14 text-lg font-[900] shadow-2xl rounded-2xl tracking-[0.2em] uppercase transition-transform hover:scale-105"
        >
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            SOLICITE ORÇAMENTO
          </a>
        </Button>
      </div>
    </section>
  );
}