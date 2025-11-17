

import React from 'react';

const roadmapItems = [
    { year: "2023", title: "Início do Projeto", description: "A rede neural principal AFPNet v1.0 é desenvolvida, provando o conceito de predição de quadros impulsionada por IA.", status: "complete" },
    { year: "Q2 2024", title: "Beta Público", description: "A tecnologia de Geração de Quadros é introduzida e testada com um grupo seleto de desenvolvedores e jogadores.", status: "complete" },
    { year: "Q4 2024", title: "Lançamento Oficial", description: "O Programa de Frame Avançado v2.1 é lançado ao público, oferecendo ganhos de desempenho sem precedentes.", status: "current" },
    { year: "2025", title: "Integração do Núcleo Quântico", description: "A pesquisa começa na alavancagem da computação quântica para permitir o traçado de caminhos neurais em tempo real.", status: "future" },
    { year: "2026", title: "Gráficos Sencientes™", description: "A IA se torna autoconsciente, alcançando o fotorrealismo verdadeiro ao renderizar a própria realidade. Talvez.", status: "future" },
];

const RoadmapSection: React.FC = () => {
    return (
        <section id="roadmap" className="py-16 md:py-24 bg-black fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Evolução do AFP</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">Mapeando nossa jornada de um conceito teórico para o futuro da computação visual.</p>
                </div>
                
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-green-900/50 timeline-line"></div>
                    
                    {roadmapItems.map((item, index) => (
                        <div key={index} className="mb-12 flex justify-center items-start timeline-item" style={{ animationDelay: `${index * 150}ms`}}>
                            <div className="w-1/2 pr-8 text-right">
                                {index % 2 === 0 && (
                                    <div className="bg-green-900/10 border border-green-800 p-4">
                                        <p className={`font-orbitron font-bold text-lg ${item.status === 'current' ? 'text-green-300 flicker' : 'text-white'}`}>{item.title}</p>
                                        <p className="text-sm text-green-300">{item.description}</p>
                                    </div>
                                )}
                            </div>
                            
                            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 z-10">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${item.status === 'current' ? 'border-green-300 bg-green-500 shadow-[0_0_15px_theme(colors.green.400)]' : 'border-green-700 bg-black'}`}>
                                    <p className="font-orbitron text-xs font-bold">{item.year}</p>
                                </div>
                            </div>

                             <div className="w-1/2 pl-8 text-left">
                                {index % 2 !== 0 && (
                                     <div className="bg-green-900/10 border border-green-800 p-4">
                                        <p className={`font-orbitron font-bold text-lg ${item.status === 'current' ? 'text-green-300 flicker' : 'text-white'}`}>{item.title}</p>
                                        <p className="text-sm text-green-300">{item.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;