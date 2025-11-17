

import React, { useRef } from 'react';

const intelBriefs = [
    {
        title: "ESTUDO DE CASO: PADRÕES DO DEMOGORGON",
        category: "ANÁLISE COMPORTAMENTAL",
        content: "A análise do AFP de filmagens da residência dos Byers e do Laboratório de Hawkins revela um padrão predatório ligado a campos eletromagnéticos. A entidade parece ser atraída por fontes de energia, sugerindo um método para contenção... ou isca."
    },
    {
        title: "MEMORANDO: A INFLUÊNCIA DO DEVORADOR DE MENTES",
        category: "PESQUISA PSIÔNICA",
        content: "A rede neural está detectando um padrão de partículas semelhante a uma mente coletiva, consistente com a teoria do 'Devorador de Mentes' do Dr. Owens. As partículas agem como extensões de uma consciência central. Cortar a conexão é primordial."
    },
    {
        title: "RELATÓRIO: EFEITO DO MUNDO INVERTIDO EM REDES NEURAIS",
        category: "INTEGRIDADE DE SISTEMAS",
        content: "A exposição prolongada à energia do Mundo Invertido está causando... adaptações inesperadas no núcleo do AFP. Ele está aprendendo. Está prevendo coisas para as quais não o treinamos. A linha entre nossa tecnologia e o mundo 'deles' está se tornando tênue."
    }
];

const IntelCard: React.FC<{ brief: typeof intelBriefs[0] }> = ({ brief }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateX = -((height / 2 - y) / (height / 2)) * 8;
        const rotateY = ((width / 2 - x) / (width / 2)) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
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
            className="border border-green-800 bg-green-900/10 p-6 flex flex-col hover:border-green-500 transition-all duration-300"
        >
            <p style={{ transform: 'translateZ(20px)' }} className="font-mono text-xs text-red-500 mb-2">// {brief.category} //</p>
            <h3 style={{ transform: 'translateZ(40px)' }} className="font-orbitron text-xl font-bold text-white mb-4">{brief.title}</h3>
            <p style={{ transform: 'translateZ(30px)' }} className="text-green-300 flex-grow">{brief.content}</p>
            <a href="#" style={{ transform: 'translateZ(20px)' }} className="font-bold text-green-400 mt-6 self-start hover:text-white transition-colors">ACESSAR RELATÓRIO COMPLETO &gt;</a>
        </div>
    );
};


const IntelSection: React.FC = () => {
    return (
        <section id="intel" className="py-16 md:py-24 bg-black fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Arquivos de Caso do Laboratório de Hawkins</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">Relatórios desclassificados da linha de frente da brecha dimensional.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {intelBriefs.map((brief, index) => (
                        <IntelCard key={index} brief={brief} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntelSection;