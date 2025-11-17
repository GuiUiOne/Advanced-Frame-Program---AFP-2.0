import React, { useRef } from 'react';

const features = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104l-2.28 2.28-1.292 1.292a.996.996 0 000 1.414l2.28 2.28 1.292 1.292a.996.996 0 001.414 0l2.28-2.28 1.292-1.292a.996.996 0 000-1.414l-2.28-2.28-1.292-1.292a.996.996 0 00-1.414 0zM14.25 12.896l-2.28 2.28-1.292 1.292a.996.996 0 000 1.414l2.28 2.28 1.292 1.292a.996.996 0 001.414 0l2.28-2.28 1.292-1.292a.996.996 0 000-1.414l-2.28-2.28-1.292-1.292a.996.996 0 00-1.414 0z" />
            </svg>
        ),
        title: "Upscaling Acelerado por IA",
        description: "Utiliza uma rede neural de aprendizado profundo para ampliar imagens, reconstruindo detalhes para uma imagem mais nítida e clara em resoluções mais altas.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Aumento de Desempenho",
        description: "Renderiza em uma resolução interna mais baixa e usa IA para gerar um quadro de alta resolução, aumentando drasticamente as taxas de quadros.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5l4 4v8a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "Geração de Quadros",
        description: "Prevê e insere quadros totalmente novos de alta qualidade entre os quadros renderizados para o movimento mais suave possível.",
    },
];

// FIX: Changed icon prop type from `JSX.Element` to `React.ReactElement` to resolve "Cannot find namespace 'JSX'" error.
const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateX = -((height / 2 - y) / (height / 2)) * 10;
        const rotateY = ((width / 2 - x) / (width / 2)) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}
            className="border border-green-800 bg-green-900/10 p-6 backdrop-blur-sm hover:border-green-500 hover:bg-green-900/20"
        >
            <div style={{ transform: 'translateZ(20px)' }} className="mb-4 text-green-400">{icon}</div>
            <h3 style={{ transform: 'translateZ(50px)' }} className="font-orbitron text-xl font-bold mb-2 text-white">{title}</h3>
            <p style={{ transform: 'translateZ(30px)' }} className="text-green-300">{description}</p>
        </div>
    );
};


const FeatureSection: React.FC = () => {
    return (
        <section id="features" className="py-16 md:py-24 bg-black fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Tecnologia Principal</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">O AFP integra múltiplas técnicas de ponta para redefinir a fidelidade visual e o desempenho.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;