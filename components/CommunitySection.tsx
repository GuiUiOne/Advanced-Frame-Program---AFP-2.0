

import React from 'react';

const Globe: React.FC = () => (
    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full globe-rotation">
            {/* Globe wireframe */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="#0f0" strokeOpacity="0.1" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="48" ry="15" fill="none" stroke="#0f0" strokeOpacity="0.2" strokeWidth="0.5" transform="rotate(20 50 50)" />
            <ellipse cx="50" cy="50" rx="48" ry="30" fill="none" stroke="#0f0" strokeOpacity="0.2" strokeWidth="0.5" transform="rotate(50 50 50)" />
            <ellipse cx="50" cy="50" rx="48" ry="40" fill="none" stroke="#0f0" strokeOpacity="0.2" strokeWidth="0.5" transform="rotate(80 50 50)" />
            <ellipse cx="50" cy="50" rx="15" ry="48" fill="none" stroke="#0f0" strokeOpacity="0.2" strokeWidth="0.5" transform="rotate(120 50 50)" />
            <ellipse cx="50" cy="50" rx="30" ry="48" fill="none" stroke="#0f0" strokeOpacity="0.2" strokeWidth="0.5" transform="rotate(150 50 50)" />
        </svg>
        {/* Monitoring stations */}
        <div className="absolute top-[20%] left-[50%]" style={{ animation: 'pulse-dot 2s infinite 0.5s' }}><div className="w-1 h-1 bg-green-400 rounded-full"></div></div>
        <div className="absolute top-[50%] left-[80%]" style={{ animation: 'pulse-dot 2s infinite 1s' }}><div className="w-1 h-1 bg-green-400 rounded-full"></div></div>
        <div className="absolute top-[70%] left-[25%]" style={{ animation: 'pulse-dot 2s infinite 1.5s' }}><div className="w-1 h-1 bg-green-400 rounded-full"></div></div>
        <div className="absolute top-[80%] left-[60%]" style={{ animation: 'pulse-dot 2s infinite 0.2s' }}><div className="w-1 h-1 bg-green-400 rounded-full"></div></div>
        
        {/* Hawkins Anomaly */}
        <div className="absolute top-[39.5%] left-[30%]" style={{ animation: 'pulse-red 1.5s infinite' }}>
            <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_theme(colors.red.500)] relative">
                <span className="absolute -top-5 -left-8 font-mono text-xs text-red-400">HAWKINS, IN</span>
            </div>
        </div>
    </div>
);

const CommunitySection: React.FC = () => {
    return (
        <section id="community" className="py-16 md:py-24 bg-black fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Monitoramento Global de Fendas</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">O AFP conecta nossas estações de monitoramento globais, criando uma rede para detectar e rastrear brechas dimensionais. Todos os sinais apontam para Hawkins.</p>
                </div>
                <Globe />
            </div>
        </section>
    );
};

export default CommunitySection;