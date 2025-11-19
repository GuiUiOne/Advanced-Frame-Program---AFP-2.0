import React, { useRef } from 'react';

const features = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104l-2.28 2.28-1.292 1.292a.996.996 0 000 1.414l2.28 2.28 1.292 1.292a.996.996 0 001.414 0l2.28-2.28 1.292-1.292a.996.996 0 000-1.414l-2.28-2.28-1.292-1.292a.996.996 0 00-1.414 0zM14.25 12.896l-2.28 2.28-1.292 1.292a.996.996 0 000 1.414l2.28 2.28 1.292 1.292a.996.996 0 001.414 0l2.28-2.28 1.292-1.292a.996.996 0 000-1.414l-2.28-2.28-1.292-1.292a.996.996 0 00-1.414 0z" />
            </svg>
        ),
        title: "Super Resolução",
        description: "Algoritmo de reconstrução temporal que utiliza vetores de movimento para criar imagens 4K a partir de 1080p.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "FPS Boost",
        description: "Gera quadros intermediários (Frame Gen) dobrando a fluidez sem sobrecarregar a CPU.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5l4 4v8a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "Anti-Aliasing IA",
        description: "Substitui o TAA tradicional por uma solução de aprendizado profundo que elimina serrilhados e cintilação.",
    },
];

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateX = -((height / 2 - y) / (height / 2)) * 5;
        const rotateY = ((width / 2 - x) / (width / 2)) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
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
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out' }}
            className="group relative border border-green-900 bg-black p-8 hover:border-green-500 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div style={{ transform: 'translateZ(20px)' }} className="mb-6 text-green-500 bg-green-900/20 inline-block p-3 rounded-lg border border-green-800 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-shadow">
                {icon}
            </div>
            <h3 style={{ transform: 'translateZ(40px)' }} className="font-orbitron text-2xl font-bold mb-3 text-white">{title}</h3>
            <p style={{ transform: 'translateZ(30px)' }} className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};


const FeatureSection: React.FC = () => {
    return (
        <section id="features" className="py-16 md:py-24 bg-black fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">TECNOLOGIA PRINCIPAL</h2>
                    <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        A arquitetura AFPNet integra vetores de movimento temporais com aprendizado profundo para redefinir a fidelidade visual.
                    </p>
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