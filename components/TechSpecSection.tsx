

import React from 'react';

const specs = [
    { label: "Aumento de Desempenho", value: "Até 3X" },
    { label: "Resolução Máxima", value: "8K+" },
    { label: "Modelo de IA", value: "AFPNet v2.1" },
    { label: "Latência", value: "Ultrabaixa" },
];

const TechSpecSection: React.FC = () => {
    return (
        <section id="tech" className="py-16 md:py-24 bg-black fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Poder Incomparável</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">Construído para a próxima geração de computação visual.</p>
                </div>
                <div className="max-w-4xl mx-auto border-2 border-green-800 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {specs.map((spec, index) => (
                        <div key={index}>
                            <p className="font-orbitron text-3xl md:text-5xl font-bold text-white">{spec.value}</p>
                            <p className="text-sm md:text-base text-green-400 tracking-widest uppercase">{spec.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSpecSection;