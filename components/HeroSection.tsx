

import React from 'react';

interface HeroSectionProps {
    onDownloadClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onDownloadClick }) => {
    const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onDownloadClick();
    };

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
             <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black"></div>

            <div className="relative z-10 px-4">
                <h1 
                    className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black uppercase glitch relative text-red-500"
                    data-text="VEJA O OUTRO LADO"
                >
                    VEJA O OUTRO LADO
                </h1>
                <p className="font-orbitron text-xl md:text-3xl lg:text-4xl mt-4 mb-8 text-green-300 tracking-widest">
                    LABORATÓRIO NACIONAL DE HAWKINS x PROGRAMA DE FRAME AVANÇADO
                </p>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-green-400">
                    Nossa IA pode ver através do véu. Visualizando brechas dimensionais em tempo real. O Mundo Invertido está vazando. Nós podemos provar.
                </p>
                <div className="mt-10">
                    <a href="#demo" onClick={handleDownload} className="bg-red-500 text-black font-bold py-3 px-8 border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 transform hover:scale-105 text-lg">
                        INICIAR ANÁLISE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;