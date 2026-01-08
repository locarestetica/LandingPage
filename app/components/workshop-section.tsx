// app/components/workshop-section.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function WorkshopSection() {
  const whatsappNumber = "5598984854056";
  const message = encodeURIComponent("Olá! Gostaria de garantir minha vaga no Workshop Masterclass e saber mais sobre a capacitação.");

  return (
    <section 
      className="relative bg-[#CCAA8E] py-12 lg:py-20 px-4 border-t border-[#CCAA8E] -mt-[1px]"
    >
      {/* SOLUÇÃO DEFINITIVA PARA A LINHA:
         1. border-t border-[#CCAA8E]: Cria uma borda da mesma cor do fundo para selar o topo.
         2. -mt-[1px]: Garante que a seção suba um pixel para cobrir qualquer falha de arredondamento.
      */}
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          
          {/* LADO ESQUERDO: GRADE DE MÍDIA */}
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 h-auto xl:h-[700px] items-center">
            
            <div className="flex flex-col gap-6 w-full max-w-[300px] sm:max-w-[350px] xl:max-w-none h-auto xl:h-full xl:grid xl:grid-cols-1 xl:grid-rows-2">
              <div className="relative aspect-square xl:aspect-auto rounded-[20px] lg:rounded-[30px] overflow-hidden border-2 border-white shadow-xl">
                <Image src="/wk1.jpg" alt="Workshop Alunas" fill className="object-cover object-top" />
              </div>
              <div className="relative aspect-square xl:aspect-auto rounded-[20px] lg:rounded-[30px] overflow-hidden border-2 border-white shadow-xl">
                <Image src="/wk2.jpg" alt="Workshop Atendimento" fill className="object-cover object-top" />
              </div>
            </div>

            <div className="flex justify-center w-full h-auto xl:h-full">
              <div className="relative rounded-[30px] lg:rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-black 
                            aspect-[9/16] w-full max-w-[300px] sm:max-w-[350px] xl:max-w-none h-[530px] sm:h-[620px] xl:h-auto">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO"
                  title="Workshop Masterclass"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: TEXTO E BOTÃO */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left mt-10 xl:mt-0 space-y-6 xl:pl-10">
            <h2 className="text-4xl sm:text-5xl xl:text-8xl font-serif italic text-[#85532c] leading-[0.9]">
              Workshop <br />
              <span className="text-[#fff1cd]">Masterclass</span>
            </h2>
            
            <p className="text-[#f7f1ed] font-montserrat font-bold text-lg xl:text-2xl max-w-md leading-tight">
              Capacitação prática, certificada e focada em resultados reais para sua clínica.
            </p>

            <div className="pt-4 flex justify-center xl:justify-start w-full">
              <Button 
                asChild
                variant="marromExato" 
                className="font-montserrat w-fit px-8 h-12 sm:h-14 xl:h-24 text-lg sm:text-xl xl:text-5xl font-[900] rounded-xl xl:rounded-2xl shadow-lg tracking-widest uppercase transition-transform hover:scale-105"
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Garantir Vaga
                </a>
              </Button> 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}