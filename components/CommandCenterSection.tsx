

import React, { useState, useRef, useEffect } from 'react';

const CommandCenterSection: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>(['Terminal HNL v4.2. Digite "help" para uma lista de comandos.']);
    const [isProcessing, setIsProcessing] = useState(false);
    const endOfOutputRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands: { [key: string]: string[] | (() => string[]) } = {
        help: [
            'Comandos disponíveis:',
            '  help            - Mostra esta lista de comandos',
            '  scan hawkins    - Escaneia Hawkins, IN em busca de assinaturas de energia anômalas',
            '  check rift_status - Exibe o status atual do portal principal',
            '  list agents     - Lista os agentes de campo ativos',
            '  clear           - Limpa a saída do terminal',
        ],
        'scan hawkins': [
            'Escaneando...',
            'Múltiplos picos de PKE detectados perto do Starcourt Mall.',
            'O fluxo geomagnético está fora de escala.',
            'Recomendação: Enviar equipe de campo imediatamente.',
        ],
        'check rift_status': [
            'Status do Portal Principal: CONTIDO',
            'Integridade da Membrana: 98.7% (FLUTUANDO)',
            'Última Brecha: 06/11/1983',
            'AVISO: VAZAMENTOS MENORES DE ENERGIA DETECTADOS.',
        ],
        'list agents': [
            'Agentes de Campo Ativos:',
            '  - Hopper, J.',
            '  - Byers, J.',
            '  - Wheeler, N.',
            '  - Henderson, D. (Consultor)',
            '  - Sujeito 011 (Recurso - Paradeiro Desconhecido)',
        ],
        clear: () => [],
    };

    useEffect(() => {
        endOfOutputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [output]);

    useEffect(() => {
        if (!isProcessing) {
            inputRef.current?.focus();
        }
    }, [isProcessing]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const processCommand = (command: string) => {
        const response = commands[command];
        if (command === 'clear') {
            setOutput([]);
            setIsProcessing(false);
            return;
        }

        let linesToAdd: string[];
        if (response) {
            linesToAdd = typeof response === 'function' ? response() : response;
        } else {
            linesToAdd = [`Erro: comando não encontrado: ${command}. O acesso não autorizado será reportado.`];
        }

        let i = 0;
        const interval = setInterval(() => {
            if (i < linesToAdd.length) {
                setOutput(prev => [...prev, linesToAdd[i]]);
                i++;
            } else {
                clearInterval(interval);
                setIsProcessing(false);
            }
        }, 100);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isProcessing) return;

        const command = input.toLowerCase().trim();
        setOutput(prev => [...prev, `> ${input}`]);
        setInput('');

        if (command) {
            setIsProcessing(true);
            setTimeout(() => processCommand(command), 100);
        }
    };

    return (
        <section id="command" className="py-16 md:py-24 bg-black/50 fade-in-section">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">Terminal de Comando HNL</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-green-300">Interaja diretamente com o mainframe do Laboratório de Hawkins. Acesse arquivos restritos e monitore as operações de campo.</p>
                </div>
                <div className="max-w-4xl mx-auto h-96 bg-black border-2 border-green-800/50 p-4 font-mono text-sm text-green-400 flex flex-col" onClick={() => inputRef.current?.focus()}>
                    <div className="flex-grow overflow-y-auto pr-2">
                        {output.map((line, index) => (
                            <p key={index} className={line.startsWith('Erro:') || line.startsWith('AVISO:') ? 'text-red-500' : ''}>{line}</p>
                        ))}
                        <div ref={endOfOutputRef} />
                    </div>
                    <form onSubmit={handleFormSubmit} className="flex mt-4">
                        <span className="text-green-400 mr-2">&gt;</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            className="bg-transparent border-none text-green-400 w-full focus:outline-none"
                            disabled={isProcessing}
                            autoFocus
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CommandCenterSection;