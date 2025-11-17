


import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ComparisonSlider from './components/ComparisonSlider';
import TechSpecSection from './components/TechSpecSection';
import Footer from './components/Footer';
import GameDemoSection from './components/GameDemoSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import DownloadModal from './components/DownloadModal';
import HowItWorksSection from './components/HowItWorksSection';
import RoadmapSection from './components/RoadmapSection';
import FAQSection from './components/FAQSection';
import IntelSection from './components/IntelSection';
import CommandCenterSection from './components/CommandCenterSection';
import CommunitySection from './components/CommunitySection';
import LiveFeed from './components/LiveFeed';
import AnomalySection from './components/AnomalySection';
import UpsideDownEffect from './components/UpsideDownEffect';

const Particles: React.FC = () => (
    <div className="upside-down-particles" aria-hidden="true">
        {[...Array(50)].map((_, i) => (
            <div
                key={i}
                className="particle"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 10 + 5}s`,
                }}
            />
        ))}
    </div>
);


const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showGlitch, setShowGlitch] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });
        
        const titles = ["LABORATÓRIO NACIONAL DE HAWKINS", "ASSUNTO: AFP", "STATUS: MONITORANDO", "AVISO: ANOMALIA DETECTADA"];
        let titleIndex = 0;
        const titleInterval = setInterval(() => {
            titleIndex = (titleIndex + 1) % titles.length;
            document.title = titles[titleIndex];
        }, 3000);

        // FIX: Substituído NodeJS.Timeout por ReturnType<typeof setTimeout> para compatibilidade com o navegador.
        // O tipo de retorno de setTimeout em um ambiente de navegador é um número, não um objeto NodeJS.Timeout.
        let glitchTimeout: ReturnType<typeof setTimeout>;
        const triggerRandomGlitch = () => {
            const randomDelay = Math.random() * 15000 + 5000; // entre 5-20 segundos
            glitchTimeout = setTimeout(() => {
                setShowGlitch(true);
                setTimeout(() => setShowGlitch(false), 300);
                triggerRandomGlitch();
            }, randomDelay);
        };
        triggerRandomGlitch();


        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
            clearInterval(titleInterval);
            clearTimeout(glitchTimeout);
        };
    }, []);

    return (
        <div className="bg-black min-h-screen text-green-400 overflow-x-hidden relative scanlines">
            <Particles />
            {showGlitch && <UpsideDownEffect />}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" style={{backgroundImage: 'radial-gradient(rgba(0,128,0,0.1) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
            <div className="relative z-10">
                <Header onDownloadClick={() => setIsModalOpen(true)} />
                <main>
                    <HeroSection onDownloadClick={() => setIsModalOpen(true)} />
                    <section id="demo" className="py-16 md:py-24 px-4 container mx-auto fade-in-section">
                        <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-center mb-4 text-red-500 flicker-red">VISUALIZE A ANOMALIA</h2>
                        <p className="text-center max-w-3xl mx-auto mb-12 text-green-300">Arraste o controle deslizante para comparar a realidade de Hawkins com a invasão da dimensão do Mundo Invertido. O AFP nos permite ver o que está por baixo.</p>
                        <ComparisonSlider 
                            beforeImg="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            afterImg="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        />
                    </section>
                    <FeatureSection />
                    <GameDemoSection />
                    <TechSpecSection />
                    <HowItWorksSection />
                    <RoadmapSection />
                    <TestimonialsSection />
                    <IntelSection />
                    <CommandCenterSection />
                    <CommunitySection />
                    <AnomalySection />
                    <PartnersSection />
                    <FAQSection />
                </main>
                <Footer />
            </div>
            <LiveFeed />
            <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default App;