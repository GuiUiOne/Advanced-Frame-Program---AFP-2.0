

import React from 'react';

const testimonials = [
    {
        quote: "O AFP não é apenas uma atualização; é um salto geracional. A clareza e o desempenho são simplesmente inigualáveis. Parece que estamos olhando para o futuro.",
        author: "Jax Ryder",
        source: "REVISTA NEO-GAMER"
    },
    {
        quote: "Implementar o AFP foi uma revelação. Nossos ambientes estão mais ricos, nossas taxas de quadros estão mais altas e nossos jogadores estão mais imersos do que nunca.",
        author: "Dra. Aris Thorne",
        source: "Dev. Líder de Engine, Quantum Realms"
    },
    {
        quote: "Pensávamos que tínhamos atingido o auge da fidelidade gráfica. Estávamos errados. O AFP reescreveu completamente o livro de regras.",
        author: "CyberVision Semanal",
        source: "Jornal de Hardware & Tecnologia"
    },
];

const TestimonialCard: React.FC<{ quote: string; author: string; source: string; }> = ({ quote, author, source }) => (
    <div className="border border-green-800 bg-black/20 p-6 backdrop-blur-sm">
        <blockquote className="text-lg text-green-300 mb-4">"{quote}"</blockquote>
        <footer className="text-right">
            <p className="font-orbitron font-bold text-white">{author}</p>
            <p className="text-sm text-green-500">{source}</p>
        </footer>
    </div>
);

const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-black/70 fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Aclamação da Indústria</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">Veja o que os especialistas estão dizendo sobre a revolução do AFP.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;