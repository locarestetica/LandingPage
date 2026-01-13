// app/components/footer.tsx
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#85532C] text-white/90">
      {/* SEÇÃO PRINCIPAL DO FOOTER */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright e Direitos */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-sm md:text-base font-light tracking-wide">
              © {currentYear} Locar Estética
            </p>
            <p className="text-xs md:text-sm opacity-80 mt-1">
              Todos os direitos reservados.
            </p>
          </div>

          {/* Logo Locar Estética */}
          <div className="relative w-48 h-12 order-1 md:order-2">
            <Image
              src="/logo-footer.png" 
              alt="Locar Estética Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* BARRA DE DESENVOLVIMENTO (DESBUG DIGITAL) */}
      <div className="w-full border-t border-white/10 bg-[#785340]/50 py-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70">
            Desenvolvido por{" "}
            <Link 
              href="https://wa.me/5585987525404" 
              target="_blank"
              className="font-bold hover:text-white transition-colors underline underline-offset-4"
            >
              Desbug Digital
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}