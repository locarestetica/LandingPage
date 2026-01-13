// app/landing-page.tsx

// Importações corretas - mesma pasta
import { EquipamentosSection } from "./equipamentos-section";
import { Features } from "./features";
import { Footer } from "./footer";
import { FooterSection } from "./footer-section";
import { Header } from "./header"; 
import { HeroSection } from "./hero-section";
import { LocacaoChamadaSection } from "./locacao";
import { Testimonials } from "./testimonials";
import { WorkshopSection } from "./workshop-section";

export function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            
            <main className="flex-1 pt-20"> 
                <HeroSection />
                <Features />
                <Testimonials />
                <WorkshopSection />
                <EquipamentosSection />
                <LocacaoChamadaSection />
                <FooterSection />
                <Footer />
            </main>
        </div>
    );
}