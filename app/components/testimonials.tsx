// app/components/testimonials.tsx
import Image from "next/image";
import { X } from "lucide-react";

interface Testimonial {
  name: string;
  clinic: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "NETTY DINIZ",
    clinic: "Safir Clínica",
    image: "/netty.png",
    text: "Estamos muito satisfeitos com a Locar Estetica, os equipamentos são de qualidade e o suporte pós-venda é excelente! Foi o match perfeito!",
  },
  {
    name: "KARLLA OLIVEIRA",
    clinic: "Clínica Laví Estetica",
    image: "/karlla.png",
    text: "Sem dúvidas, a Locar Estetica é a melhor opção para aluguel de equipamentos de estética. Sempre tivemos excelentes resultados e recomendo a todos!",
  },
  {
    name: "SAMARA LISBOA",
    clinic: "Clínica Reviva",
    image: "/samara.png",
    text: "Nossa experiência com a Locar Estetica foi incrível! O atendimento foi ótimo, alugamos vários equipamentos e todos funcionaram perfeitamente.",
  },
];

export function Testimonials() {
  return (
    <section 
      id="depoimentos"
      className="relative w-full py-24 overflow-hidden bg-[#F2E6D9] bg-[url('/bg2.png')] bg-no-repeat bg-bottom bg-[length:100.1%_auto] pb-20 lg:pb-70"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-serif text-[#785340] leading-tight">
            Sua clínica merece{" "}
            <span className="italic font-light text-[#b89a55]">excelência</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-32 lg:gap-x-24 xl:gap-x-32 max-w-7xl mx-auto items-stretch pb-30">
          {testimonials.map((item, index) => (
            <div key={index} className="relative flex justify-center pt-10">

              <div className="border-2 border-[#785340] rounded-[45px] w-[85%] lg:w-full max-w-[400px] lg:max-w-none flex flex-col relative bg-transparent h-full">
                

                <div className="relative w-[calc(100%+2px)] -ml-[1px] h-14 bg-[#785340] rounded-t-[43px] flex items-center px-6 shrink-0 -mt-[2px]">
                  <span className="text-white font-montserrat font-bold text-[16px] tracking-[0.15em] uppercase truncate pr-14">
                    {item.name}
                  </span>

                  <div className="absolute -top-8 right-2 w-20 h-20 border-[5px] border-[#F2E9E1] rounded-full overflow-hidden shadow-xl z-50 bg-[#f7f1ed]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover scale-125"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center px-4 pb-10 flex-grow">

                  <div className="bg-[#f7f1ed] w-[130%] -mx-[15%] rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 mt-10 relative z-40 border border-gray-100/50 flex-grow">
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-8 h-8 relative bg-[#b89a55]/20 rounded-full flex items-center justify-center shrink-0">
                        <Image
                          src="/star2.png"
                          alt="Star"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[#b89a55] font-sans font-bold text-xl uppercase tracking-tighter px-2 text-center">
                        {item.clinic}
                      </span>
                      <X className="w-4 h-4 text-gray-300 cursor-pointer shrink-0" />
                    </div>

                    <p className="text-[#785340] text-[15px] leading-relaxed font-sans text-center">
                      {`"${item.text}"`}
                    </p>
                  </div>


                  <div className="flex justify-center gap-1.5 mt-8 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 relative">
                        <Image
                          src="/star2.png"
                          alt="rating"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}