

import React, { useState, useEffect } from 'react';

const useFluctuatingValue = (base: number, variance: number, interval: number, decimals: number = 0) => {
    const [value, setValue] = useState(base);

    useEffect(() => {
        const timer = setInterval(() => {
            const fluctuation = (Math.random() - 0.5) * variance;
            setValue(base + fluctuation);
        }, interval);
        return () => clearInterval(timer);
    }, [base, variance, interval]);

    return value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
};

const LiveFeed: React.FC = () => {
    const fieldAgents = useFluctuatingValue(42, 2, 5000);
    const anomaliesDetected = useFluctuatingValue(11, 1, 3000);
    const riftStability = useFluctuatingValue(98.7, 2.5, 1500, 1);
    
    return (
        <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm border-t border-red-900 z-40">
            <div className="container mx-auto px-4 h-12 flex items-center justify-between text-xs md:text-sm">
                <div className="flex items-center space-x-4 md:space-x-8">
                    <div><span className="text-green-600">AGENTES DE CAMPO:</span> <span className="font-orbitron text-white">{fieldAgents}</span></div>
                    <div><span className="text-green-600">ANOMALIAS:</span> <span className="font-orbitron text-white">{anomaliesDetected}</span></div>
                    <div><span className="text-green-600">ESTABILIDADE DA FENDA:</span> <span className="font-orbitron text-white">{riftStability}%</span></div>
                </div>
                <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2 pulse-live"></span>
                    <span className="font-bold text-red-400 flicker-red">AVISO DO SISTEMA</span>
                </div>
            </div>
        </div>
    );
};

export default LiveFeed;