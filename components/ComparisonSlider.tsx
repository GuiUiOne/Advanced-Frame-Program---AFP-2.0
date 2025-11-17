


import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ComparisonSliderProps {
    beforeImg: string;
    afterImg: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ beforeImg, afterImg }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        isDragging.current = true;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        isDragging.current = true;
    };
    
    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging.current) return;
        handleMove(e.clientX);
    }, [handleMove]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isDragging.current) return;
        handleMove(e.touches[0].clientX);
    }, [handleMove]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleMouseUp);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp, handleTouchMove]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            setSliderPosition(pos => Math.max(0, pos - 2));
        } else if (e.key === 'ArrowRight') {
            setSliderPosition(pos => Math.min(100, pos + 2));
        }
    };

    return (
        <div 
            ref={containerRef} 
            className="relative w-full max-w-5xl mx-auto aspect-video select-none cursor-ew-resize border-4 border-red-700/50 focus:outline-none focus:ring-2 focus:ring-red-500"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Controle deslizante de comparação de imagem"
        >
            <img src={beforeImg} alt="Antes" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            
            <div 
                className="absolute inset-0 w-full h-full object-cover overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img src={afterImg} alt="Depois" className="absolute inset-0 w-full h-full object-cover h-full max-w-none pointer-events-none" style={{filter: 'sepia(0.8) hue-rotate(320deg) saturate(3) brightness(0.6) contrast(1.2)'}}/>
            </div>

            <div 
                className="absolute top-0 h-full w-1 bg-red-400 pointer-events-none" 
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-red-400 bg-black/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                    </svg>
                </div>
            </div>
            
            <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 font-bold text-white text-sm">REALIDADE: HAWKINS</div>
            <div className="absolute top-2 right-2 bg-red-500/80 px-2 py-1 font-bold text-black text-sm">DIMENSÃO: MUNDO INVERTIDO</div>

        </div>
    );
};

export default ComparisonSlider;