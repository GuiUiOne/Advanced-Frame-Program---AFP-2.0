

import React from 'react';

const processSteps = [
    {
        title: "Entrada de Quadro de Baixa Resolução",
        description: "O processo começa com um quadro padrão de resolução mais baixa renderizado pelo motor de jogo.",
        icon: "M17.657 18.657l-4.243-4.243m0 0l-4.243 4.243m4.243-4.243l4.243 4.243m-4.243-4.243l-4.243-4.243"
    },
    {
        title: "Análise de Vetores de Movimento",
        description: "O AFP analisa o movimento de pixels e os dados do motor de jogo para entender a ação na tela.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
        title: "Motor Preditivo de IA",
        description: "A rede neural AFPNet prevê o próximo quadro mais provável com base nos dados analisados.",
        icon: "M5 12h14M12 5l7 7-7 7"
    },
    {
        title: "Geração de Quadro Sintético",
        description: "Um quadro totalmente novo e de alta qualidade é gerado e inserido para suavizar o movimento.",
        icon: "M12 4v16m8-8H4"
    },
    {
        title: "Saída de Alta Fidelidade",
        description: "A sequência final de quadros é ampliada e apresentada com clareza e suavidade impressionantes.",
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    },
];

const HowItWorksSection: React.FC = () => {
    return (
        <section id="howitworks" className="py-16 md:py-24 bg-black/70 fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Desconstruindo o Futuro</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-green-300">Uma visão do processo de cinco estágios que alimenta o Programa de Frame Avançado.</p>
                </div>

                <div className="relative mb-8">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-900/50"></div>
                     <div 
                        className="hidden md:block absolute top-1/2 left-0 w-full h-0.5"
                        style={{
                            background: `linear-gradient(90deg, transparent, #0f0, transparent)`,
                            backgroundSize: '800px 100%',
                            animation: 'flow-line-anim 4s linear infinite'
                        }}
                     ></div>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="text-center p-4 border border-transparent hover:border-green-700 hover:bg-green-900/10 transition-all duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 border-2 border-green-600 flex items-center justify-center bg-black">
                                     <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="font-orbitron text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-green-300">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;