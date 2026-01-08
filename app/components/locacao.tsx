// app/components/locacao-chamada-section.tsx
import { Button } from "@/components/ui/button";

export function LocacaoChamadaSection() {
    const whatsappNumber = "5598984854056"; // Número atualizado
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para locação sob medida na minha clínica.");
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* IMAGEM DE BACKGROUND DA SESSÃO */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg3.png" // Substitua pelo caminho da sua foto de fundo
          alt="Background"
          className="w-full h-full object-top"
        />
        {/* Overlay opcional para garantir contraste com o texto branco */}
        <div className="absolute inset-0 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LADO ESQUERDO: TEXTO E BOTÃO */}
          <div className="max-w-2xl text-center md:text-left">
            {/* Título: The Seasons com "sob medida" em itálico */}
            <h2 className="text-6xl md:text-8xl font-serif text-[#f7f1ed] leading-[1.1] mb-10">
              Locação <span className="italic font-light text-[#fff1cd]">sob medida</span> para sua clínica
            </h2>

            {/* BOTÃO: Grosso com Montserrat Black */}
            <a href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer">
            <Button 
              variant="marromExato" 
              className="font-montserrat w-fit px-8 h-20 text-3xl font-black rounded-xl shadow-lg tracking-widest uppercase transition-transform hover:scale-105"
            >
              QUERO LOCAR
            </Button>
            </a>
          </div>

          {/* LADO DIREITO: GRUPO DE EQUIPAMENTOS */}
          <div className="relative w-full max-w-3xl h-[400px] md:h-[600px]">
            <img 
              src="/maquinas2.png" 
              alt="Equipamentos Locar Estética" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}