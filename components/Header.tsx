


import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onDownloadClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onDownloadClick();
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm border-b border-red-900/50' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-3 text-green-400 hover:text-white transition-colors duration-300">
                           {/* AFP LOGO */}
                           <span className="font-orbitron text-2xl font-bold flicker-green" style={{'--stranger-red': '#e03434'} as React.CSSProperties}>AFP</span>
                            {/* SEPARATOR */}
                           <span className="text-xl text-red-600 font-mono self-end pb-1">X</span>
                            {/* STRANGER THINGS LOGO */}
                            <span className="font-orbitron text-xl font-bold text-red-500 flicker-red" style={{ textShadow: '0 0 5px var(--stranger-red)' }}>
                                STRANGER THINGS
                           </span>
                        </a>
                    </div>
                    <nav className="hidden md:flex md:space-x-6 text-sm">
                        <a href="#demo" className="hover:text-white transition-colors duration-300">Anomalia</a>
                        <a href="#features" className="hover:text-white transition-colors duration-300">Tecnologia Principal</a>
                        <a href="#gaming" className="hover:text-white transition-colors duration-300">Contenção</a>
                        <a href="#intel" className="hover:text-white transition-colors duration-300">Arquivos de Caso</a>
                        <a href="#command" className="hover:text-white transition-colors duration-300">Comando</a>
                        <a href="#community" className="hover:text-white transition-colors duration-300">Monitoramento</a>
                        <a href="#anomaly" className="hover:text-white transition-colors duration-300 text-red-500">Registro 7-D-9</a>
                        <a href="#faq" className="hover:text-white transition-colors duration-300">Instruções</a>
                    </nav>
                    <a href="#" onClick={handleDownload} className="hidden md:block bg-red-500 text-black font-bold py-2 px-4 border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 transform hover:scale-105">
                        ATIVAR PROTOCOLO
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;