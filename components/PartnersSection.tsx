

import React from 'react';

const partners = [
    "CYBERDINE SYSTEMS",
    "QUANTUM REALMS",
    "NEO-TOKYO GAMING",
    "GIGAWATT HARDWARE",
    "SYNTHWAVE STUDIOS",
    "AEON VIRTUAL",
];

const PartnersSection: React.FC = () => {
    return (
        <section id="partners" className="py-16 md:py-24 bg-black fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-2xl md:text-4xl font-bold">Aprovado por Líderes da Indústria</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">O AFP é a tecnologia fundamental para a próxima geração de entretenimento interativo e hardware.</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-16">
                    {partners.map((partner, index) => (
                        <div key={index} className="font-orbitron text-lg md:text-xl text-green-600/70 font-bold tracking-widest transition-all duration-300 hover:text-white hover:text-shadow-[0_0_10px_theme(colors.green.400)]">
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;