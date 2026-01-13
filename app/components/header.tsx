"use client"; // Necessário para usar o estado do menu

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Tecnologias", href: "#tecnologias" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-[100] bg-[#CCAA8E] border-none shadow-none">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo/Marca */}
        <Link href="/" className="relative h-12 w-32 md:w-40 flex items-center">
          <Image
            src="/logo.png"
            alt="Logo Locar Estética"
            width={160}
            height={48}
            priority
            className="object-contain" 
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-white hover:text-white/80 transition-colors uppercase tracking-wider"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botão Menu Mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white flex items-center gap-2 font-bold text-xs tracking-widest"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span>MENU</span>
          </button>
        </div>
      </div>

      {/* Overlay do Menu Mobile */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#CCAA8E] border-t border-white/10 shadow-xl md:hidden animate-in fade-in slide-in-from-top-5">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // Fecha ao clicar
                className="py-4 text-center text-sm font-semibold text-white hover:bg-white/5 transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}