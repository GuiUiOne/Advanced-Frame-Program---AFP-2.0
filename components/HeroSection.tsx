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
            {/* Background Dynamic Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ 
                    backgroundImage: "url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                    filter: 'contrast(1.2) saturate(0)'
                }}
            ></div>
            
            {/* Cyber Overlay */}
            <div className="absolute inset-0 grid-bg opacity-50 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-0"></div>

            <div className="relative z-10 px-4 max-w-5xl mx-auto">
                <div className="inline-block border border-green-500/30 bg-green-900/20 px-4 py-1 mb-6 rounded-full backdrop-blur-md">
                    <span className="text-green-400 font-mono text-sm tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        SISTEMA OPERACIONAL AFP v2.1 ONLINE
                    </span>
                </div>

                <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-6 relative">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)] filter">
                        MAXIMIZE A
                    </span>
                    <span className="block text-white glitch" data-text="REALIDADE">
                        REALIDADE
                    </span>
                </h1>
                
                <p className="font-orbitron text-lg md:text-2xl lg:text-3xl mb-8 text-green-300/80 tracking-widest uppercase border-y border-green-900/50 py-4">
                    Tecnologia de Upscaling Neural do Laboratório de Hawkins
                </p>
                
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                    Experimente jogos com até <span className="text-white font-bold">3X mais performance</span>. 
                    O AFP utiliza IA generativa para reconstruir detalhes perdidos entre dimensões, 
                    entregando qualidade superior à nativa.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a href="#demo" onClick={handleDownload} className="group relative px-8 py-4 bg-green-600 overflow-hidden rounded-sm font-orbitron font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span className="relative flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            BAIXAR AFP AGORA
                        </span>
                    </a>
                    
                    <a href="#features" className="px-8 py-4 border border-green-500/50 text-green-400 font-orbitron font-bold rounded-sm hover:bg-green-500/10 transition-all hover:border-green-400 flex items-center gap-2">
                        VER SPECS TÉCNICAS
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;