import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-red-900/50">
            <div className="container mx-auto px-4 py-8 text-green-600">
                <div className="text-center">
                    <p>&copy; 1986 Laboratório Nacional de Hawkins & Programa de Frame Avançado. Todos os direitos reservados.</p>
                    <p className="text-xs mt-1">Uma vitrine de tecnologia e experiência narrativa fictícia.</p>
                    <p className="font-mono text-xs text-red-700 mt-4 flicker-red">// PROJETO ÍNDIGO - APENAS PARA SEUS OLHOS //</p>

                    <div className="mt-6 pt-6 border-t border-green-800/50">
                        <p className="font-mono text-xs text-green-400">// CONSTRUÍDO POR <span className="text-white font-bold">LUMINA FUTURE</span> //</p>
                        <p className="font-mono text-xs text-green-400 mt-1">// LÍDER DO PROJETO <span className="text-white font-bold">GUILHERME TRASPADINI</span> //</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;