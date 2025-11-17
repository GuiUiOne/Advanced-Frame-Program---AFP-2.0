


import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
        };
        const handleEnd = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnd);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnd);
        };
    }, []);

    return (
        <div className="w-full max-w-lg mx-auto bg-black border-2 border-red-700/50 p-4 flex items-center space-x-4">
            <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="auto" className="hidden"></audio>
            <button
                onClick={togglePlayPause}
                className="w-12 h-12 flex-shrink-0 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-colors flex items-center justify-center"
                aria-label={isPlaying ? 'Pausar registro de áudio' : 'Reproduzir registro de áudio'}
            >
                {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 5h3v10H5V5zm7 0h3v10h-3V5z"></path></svg>
                ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z"></path></svg>
                )}
            </button>
            <div className="w-full">
                <p className="font-mono text-sm text-red-300">REGISTRO DE ÁUDIO: HNL-7-DELTA-9 // URGENTE</p>
                <div className="relative w-full h-10 bg-red-900/20 mt-1 overflow-hidden flex items-center justify-between px-2">
                    {[...Array(30)].map((_, i) => (
                         <div
                            key={i}
                            className={`w-1 h-full bg-red-500 origin-bottom ${isPlaying ? 'animate-[waveform-red_1s_ease-in-out_infinite]' : ''}`}
                            style={{
                                height: `${Math.random() * 80 + 20}%`,
                                animationDelay: `${i * 0.1}s`,
                            }}
                        ></div>
                    ))}
                     <div className="absolute top-0 right-0 h-full bg-black/50" style={{ width: `${100-progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};


const AnomalySection: React.FC = () => {
    return (
        <section id="anomaly" className="py-16 md:py-24 bg-black/70 fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-red-500 glitch" data-text="A ANOMALIA DE HAWKINS">A ANOMALIA DE HAWKINS</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-green-300">O seguinte é um registro de áudio restrito recuperado do núcleo do AFP após o 'Incidente de Starcourt'. Discrição é obrigatória.</p>
                </div>

                <div className="flex justify-center">
                    <AudioPlayer />
                </div>
                
                <div className="text-center max-w-2xl mx-auto mt-8 font-mono text-sm text-green-500">
                    <p>// FRAGMENTO DA TRANSCRIÇÃO //</p>
                    <p className="mt-2 text-green-300">"O AFP não está apenas fazendo upscale... está captando ecos do outro lado. O sistema projeta um visual... um mundo vermelho e moribundo. A assinatura de energia corresponde à do portal. Não é uma simulação. É uma janela. Meu Deus... algo está olhando de volta..."</p>
                    <p className="mt-2 text-red-500 flicker-red">[GRITOS, ESTÁTICA, FIM DO REGISTRO]</p>
                </div>
            </div>
        </section>
    );
};

export default AnomalySection;