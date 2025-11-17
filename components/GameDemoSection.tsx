


import React, { useState } from 'react';

const StatDisplay: React.FC<{ label: string, value: string | number, className?: string }> = ({ label, value, className }) => (
    <div className="mb-4">
        <p className="text-sm text-green-400">{label}</p>
        <p className={`font-orbitron text-2xl md:text-3xl font-bold ${className}`}>{value}</p>
    </div>
);

const GameDemoSection: React.FC = () => {
    const [containmentActive, setContainmentActive] = useState(true);

    const activeStats = {
        stability: "98.7%",
        energy: "BAIXA",
        flux: "ESTÁVEL",
        status: "ATIVO"
    };

    const inactiveStats = {
        stability: "12.3%",
        energy: "CRÍTICA",
        flux: "ERRÁTICO",
        status: "ROMPIDA"
    };

    const currentStats = containmentActive ? activeStats : inactiveStats;

    return (
        <section id="gaming" className="py-16 md:py-24 bg-black/50 fade-in-section vine-border">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Painel de Contenção de Anomalia</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-green-300">Transmissão ao vivo do perímetro da fenda de Hawkins. Alterne o campo de contenção para observar a análise em tempo real do AFP da brecha dimensional.</p>
                </div>

                <div className="bg-black border-2 border-green-800/50 p-4 md:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    {/* Left Stats Panel */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                         <StatDisplay label="ESTABILIDADE DA FENDA" value={currentStats.stability} className={containmentActive ? 'text-green-300' : 'text-red-500 flicker-red'} />
                         <StatDisplay label="ENERGIA PSIÔNICA" value={currentStats.energy} className={containmentActive ? 'text-green-300' : 'text-red-500'}/>
                         <StatDisplay label="FLUXO GEOMAGNÉTICO" value={currentStats.flux} className={containmentActive ? 'text-green-300' : 'text-red-500'} />
                    </div>

                    {/* Center Gameplay View */}
                    <div className="lg:col-span-3 relative aspect-video border-2 border-red-600 shadow-[0_0_20px_theme(colors.red.500)]">
                        <img 
                            src={"https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
                            alt="Feed da Anomalia" 
                            className={`w-full h-full object-cover transition-all duration-500 ${containmentActive ? 'filter-none' : 'filter brightness-150 contrast-150 saturate-200 hue-rotate-340'}`}
                        />
                         <div className="absolute top-2 left-2 text-white font-bold text-xs bg-black/50 px-2 py-1 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 pulse-live"></span>
                            AO VIVO: HAWKINS_GATE_CAM_01
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-2 left-2 w-[calc(100%-1rem)] h-10 overflow-hidden">
                            <div className="scrolling-text-content absolute top-0 left-0">
                                <p className="text-red-800 text-xs">AVISO: MEMBRANA DIMENSIONAL INSTÁVEL DETECTADA...</p>
                                <p className="text-red-800 text-xs">BIO-ASSINATURAS DETECTADAS: 0 HOSTIL(IS)</p>
                                <p className="text-green-800 text-xs">ANÁLISE AFP: ATIVA</p>
                                <p className="text-green-800 text-xs">ENERGIA DO CAMPO DE CONTENÇÃO: 98%</p>
                                <p className="text-red-800 text-xs">LEITURAS PKE ELEVADAS PERTO DE STARC...</p>
                                <p className="text-green-800 text-xs">SISTEMAS NOMINAIS</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Control Panel */}
                    <div className="lg:col-span-1 flex flex-col items-center">
                        <h3 className="font-orbitron text-lg font-bold mb-4 text-center">CAMPO DE CONTENÇÃO</h3>
                        <div className="flex items-center space-x-3 mb-4">
                            <span className={`font-bold text-sm ${!containmentActive ? 'text-red-500 flicker-red' : 'text-gray-600'}`}>DESL.</span>
                            <button
                                onClick={() => setContainmentActive(!containmentActive)}
                                className="relative inline-block w-14 h-8 bg-gray-800 rounded-full border-2 border-green-700 transition-colors"
                                aria-pressed={containmentActive}
                                aria-label="Alternar campo de contenção"
                            >
                                <span className={`absolute top-1/2 -translate-y-1/2 block w-6 h-6 rounded-full transition-all duration-300 ${containmentActive ? 'left-7 bg-green-400 shadow-[0_0_10px_theme(colors.green.400)]' : 'left-1 bg-red-500 shadow-[0_0_10px_theme(colors.red.500)]'}`}></span>
                            </button>
                            <span className={`font-bold text-sm ${containmentActive ? 'text-green-400 flicker' : 'text-gray-600'}`}>LIG.</span>
                        </div>
                        <StatDisplay label="STATUS DO SISTEMA" value={currentStats.status} className={containmentActive ? 'text-green-300' : 'text-red-500'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameDemoSection;