


import React, { useState } from 'react';

const faqData = [
    {
        question: "Quais são os requisitos mínimos de sistema para o AFP?",
        answer: "O AFP requer uma GPU compatível com DirectX 12 com suporte a tensor core. Recomendamos pelo menos uma placa da série RTX 20 ou RX 6000 para um desempenho ideal. Uma CPU quad-core e 16GB de RAM também são aconselháveis."
    },
    {
        question: "Quais jogos são compatíveis com o AFP?",
        answer: "O AFP é implementado no nível do driver, teoricamente suportando todos os títulos DirectX 11 e 12. No entanto, o desempenho pode variar. Uma lista de títulos oficialmente verificados e otimizados pode ser encontrada em nossa página de suporte."
    },
    {
        question: "Como o AFP é diferente do upscaling tradicional?",
        answer: "O upscaling tradicional (como bilinear ou bicúbico) simplesmente estica uma imagem de resolução mais baixa, resultando em desfoque. O AFP usa um modelo de IA sofisticado para reconstruir detalhes e gerar quadros inteiramente novos, resultando em uma imagem significativamente mais nítida e movimento mais suave."
    },
    {
        question: "O AFP é de código aberto?",
        answer: "O modelo principal AFPNet v2.1 é proprietário. No entanto, fornecemos uma API aberta para que os desenvolvedores integrem os recursos do AFP diretamente em seus motores de jogo para melhor desempenho e estabilidade."
    }
];

const FAQItem: React.FC<{ faq: { question: string, answer: string }, isOpen: boolean, onClick: () => void, index: number }> = ({ faq, isOpen, onClick, index }) => {
    return (
        <div className="border-b border-green-800/50">
            <button
                onClick={onClick}
                className="w-full text-left flex justify-between items-center p-4 hover:bg-green-900/20 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                <h3 id={`faq-question-${index}`} className="font-orbitron text-lg text-white">{faq.question}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <p className="p-4 pt-0 text-green-300">{faq.answer}</p>
            </div>
        </div>
    );
};


const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 bg-black/50 fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Inteligência Desclassificada</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">Suas perguntas, respondidas pela equipe de desenvolvimento principal.</p>
                </div>

                <div className="max-w-3xl mx-auto border-2 border-green-800 bg-black">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            index={index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;