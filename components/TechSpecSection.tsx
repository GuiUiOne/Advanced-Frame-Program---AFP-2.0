import React, { useEffect, useState, useRef } from 'react';

const games = [
    { name: "CYBERPUNK: THE FLAYER", native: 34, afp: 98 },
    { name: "STRANGER TALES 3", native: 45, afp: 122 },
    { name: "HAWKINS LAB SIM", native: 60, afp: 165 },
    { name: "DUNGEONS & DRAGONS VR", native: 28, afp: 85 },
];

const TechSpecSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="tech" ref={sectionRef} className="py-16 md:py-24 bg-black grid-bg relative border-y border-green-900/30">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-12">
                    
                    {/* Left Content */}
                    <div className="md:w-1/3">
                        <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-6">
                            DESEMPENHO <br />
                            <span className="text-green-500">SOBRENATURAL</span>
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            O AFP libera todo o potencial do seu hardware. Ao renderizar menos pixels e usar IA para construir o restante, multiplicamos suas taxas de quadros sem sacrificar a qualidade da imagem.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-900/10 border border-green-800 p-4">
                                <div className="text-3xl font-bold text-white font-orbitron">4X</div>
                                <div className="text-xs text-green-400 uppercase tracking-widest">Performance</div>
                            </div>
                            <div className="bg-green-900/10 border border-green-800 p-4">
                                <div className="text-3xl font-bold text-white font-orbitron">8K</div>
                                <div className="text-xs text-green-400 uppercase tracking-widest">Suporte HDR</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Graph */}
                    <div className="md:w-2/3 w-full bg-gray-900/30 border border-gray-800 p-6 md:p-8 rounded-xl backdrop-blur-sm">
                        <h3 className="font-orbitron text-xl text-white mb-8 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            PERFORMANCE EM FPS (4K ULTRA)
                        </h3>

                        <div className="space-y-8">
                            {games.map((game, index) => (
                                <div key={index} className="relative">
                                    <div className="flex justify-between text-sm font-mono text-gray-400 mb-2">
                                        <span>{game.name}</span>
                                    </div>
                                    
                                    {/* Bar Container */}
                                    <div className="h-12 flex gap-1">
                                        {/* Native Bar */}
                                        <div className="relative h-full bg-gray-700/50 flex items-center group" style={{ width: isVisible ? `${(game.native / 200) * 100}%` : '0%', transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                                            <span className="absolute right-2 text-xs font-bold text-white">NATIVO</span>
                                            <span className="absolute -right-8 text-white font-bold">{game.native}</span>
                                        </div>
                                        
                                        {/* AFP Bar */}
                                        <div 
                                            className="relative h-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center bar-animate" 
                                            style={{ '--target-width': `${(game.afp / 200) * 100}%`, width: '0%' } as React.CSSProperties}
                                        >
                                            <span className="absolute right-2 text-xs font-bold text-black">AFP ON</span>
                                            <span className="absolute -right-10 text-green-400 font-bold text-lg">{game.afp}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 pt-4 border-t border-gray-800 flex justify-between text-xs text-gray-500">
                            <span>SISTEMA: RYZEN 9 5900X, 32GB RAM</span>
                            <span>RESOLUÇÃO: 3840x2160</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSpecSection;