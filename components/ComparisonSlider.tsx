import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ComparisonSliderProps {
    beforeImg: string;
    afterImg: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ beforeImg, afterImg }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    // Magnifier Configuration
    const MAGNIFIER_SIZE = 150;
    const ZOOM_LEVEL = 3;

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    }, []);

    const updateCursorPos = (clientX: number, clientY: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPos({
            x: clientX - rect.left,
            y: clientY - rect.top
        });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        isDragging.current = true;
    };
    
    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        // Update cursor position logic for magnifier
        if(containerRef.current && containerRef.current.contains(e.target as Node)) {
            updateCursorPos(e.clientX, e.clientY);
            setShowMagnifier(true);
        } else {
            setShowMagnifier(false);
        }

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
        <div className="relative group">
             {/* Magnifier Lens - Shows the 'After' image magnified regardless of side to show quality */}
             {showMagnifier && (
                <div 
                    className="hidden md:block absolute pointer-events-none z-30 border-2 border-green-400 rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)] bg-black overflow-hidden"
                    style={{
                        width: `${MAGNIFIER_SIZE}px`,
                        height: `${MAGNIFIER_SIZE}px`,
                        left: `${cursorPos.x - MAGNIFIER_SIZE / 2}px`,
                        top: `${cursorPos.y - MAGNIFIER_SIZE / 2}px`,
                        backgroundImage: `url(${afterImg})`,
                        backgroundRepeat: 'no-repeat',
                        // Calculate position: negative (cursor% * imageWidth * zoom) + halfLens
                        backgroundPosition: `calc(${-(cursorPos.x * ZOOM_LEVEL) + MAGNIFIER_SIZE / 2}px) calc(${-(cursorPos.y * ZOOM_LEVEL) + MAGNIFIER_SIZE / 2}px)`,
                        backgroundSize: `${containerRef.current?.offsetWidth ? containerRef.current.offsetWidth * ZOOM_LEVEL : 0}px auto`,
                        filter: 'sepia(0.8) hue-rotate(320deg) saturate(3) brightness(0.8) contrast(1.2)'
                    }}
                >
                    <div className="absolute inset-0 border border-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500/50 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                    <div className="absolute bottom-2 left-0 w-full text-center text-[10px] font-mono text-green-400 bg-black/60">ZOOM 300%</div>
                </div>
            )}

            <div 
                ref={containerRef} 
                className="relative w-full max-w-5xl mx-auto aspect-video select-none cursor-col-resize border-2 border-gray-800 hover:border-green-500/50 transition-colors shadow-2xl"
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
                {/* Before Image */}
                <img src={beforeImg} alt="Antes" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-gray-700 px-3 py-1 pointer-events-none">
                    <span className="text-gray-400 font-bold text-xs tracking-wider">NATIVO 1080P</span>
                </div>
                
                {/* After Image (Clipped) */}
                <div 
                    className="absolute inset-0 w-full h-full object-cover overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src={afterImg} 
                        alt="Depois" 
                        className="absolute inset-0 w-full h-full object-cover h-full max-w-none pointer-events-none" 
                        style={{filter: 'sepia(0.8) hue-rotate(320deg) saturate(3) brightness(0.6) contrast(1.2)'}}
                    />
                     <div className="absolute top-4 right-4 bg-red-900/80 backdrop-blur border border-red-500 px-3 py-1 pointer-events-none">
                        <span className="text-red-400 font-bold text-xs tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            AFP 4K LIGADO
                        </span>
                    </div>
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 h-full w-0.5 bg-white pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-black/90 border-2 border-green-500 rotate-45 flex items-center justify-center shadow-[0_0_15px_theme(colors.green.500)]">
                         <div className="-rotate-45">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="text-center mt-4 text-gray-500 text-sm font-mono">
                <span className="text-green-500">[MOUSE OVER]</span> PARA ZOOM DE ANÁLISE • <span className="text-green-500">[ARRASTE]</span> PARA COMPARAR
            </p>
        </div>
    );
};

export default ComparisonSlider;