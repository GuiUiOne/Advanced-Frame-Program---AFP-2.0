

import React, { useState, useEffect } from 'react';

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const logMessages = [
    'INICIANDO NÚCLEO AFP...',
    'CONECTANDO À REDE NEURAL...',
    'AUTENTICANDO ASSINATURA DE HARDWARE...',
    'CALIBRANDO ALGORITMO DE PREDIÇÃO DE QUADRO...',
    'DESCOMPRIMINDO RECURSOS VISUAIS...',
    'VERIFICAÇÃO DO SISTEMA CONCLUÍDA. PRONTO.',
];

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
    const [progress, setProgress] = useState(0);
    const [log, setLog] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setProgress(0);
            setLog([]);
            setIsComplete(false);
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsComplete(true);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 30); // 3 segundos total

            let logIndex = 0;
            const logInterval = setInterval(() => {
                if(logIndex < logMessages.length) {
                    setLog(prev => [...prev, logMessages[logIndex]]);
                    logIndex++;
                } else {
                    clearInterval(logInterval);
                }
            }, 500); // 0.5 segundos por mensagem


            return () => {
                clearInterval(interval);
                clearInterval(logInterval);
            };
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} modal-overlay`}
            onClick={onClose}
        >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div 
                className={`relative w-full max-w-2xl bg-black border-2 border-green-700/50 shadow-[0_0_20px_theme(colors.green.500)] p-8 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} modal-content`}
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-green-400 hover:text-white transition-colors">&times;</button>
                <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-6">{isComplete ? 'Download Pronto' : 'Iniciando Download'}</h2>
                
                <div className="h-40 bg-black border border-green-800 p-2 overflow-y-auto font-mono text-sm mb-6">
                    {log.map((line, index) => (
                        <p key={index} className="text-green-400">&gt; {line}</p>
                    ))}
                </div>

                <div className="w-full bg-green-900/50 border border-green-700 h-6 p-1 mb-2">
                    <div className="bg-green-500 h-full transition-width duration-100 ease-linear" style={{width: `${progress}%`}}></div>
                </div>
                <p className="text-center font-bold text-lg">{progress}%</p>

                {isComplete && (
                    <div className="text-center mt-6">
                         <a href="#" className="bg-green-500 text-black font-bold py-3 px-8 border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300 transform hover:scale-105 text-lg">
                            BAIXAR AFP_v2.1.zip
                        </a>
                        <p className="text-xs mt-2 text-green-600">Tamanho do arquivo: 1.21 GB (Fictício)</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DownloadModal;