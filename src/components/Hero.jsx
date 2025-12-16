import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import React from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        function handleMouseMove(event) {
            setMousePosition({ x: event.clientX, y: event.clientY });
        }
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-start md:items-center justify-center pt-28 md:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 92, 190, 0.5), rgba(30, 41, 59, 0.5), transparent 40%)`,
            }}/>

            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 bg-blue-500/50 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-72 bg-purple-500/50 rounded-full blur-3xl animate-pulse delay-200 pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    {/* COLUNA 1*/}
                    <div className="flex flex-col items-center text-center">
                        
                        <div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'>
                            <Sparkles className='w-4 h-4 text-blue-400'/>
                            <span className='text-xs sm:text-sm text-blue-300'>Trabalho de Interação Homem-Máquina</span>
                            <Sparkles className='w-4 h-4 text-blue-400'/>
                        </div>

                        <h1 className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight text-white'>
                            <span className='bg-linear-to-r from-blue-400 via-blue-300 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2'>Busca de Vagas</span>
                        </h1>

                        <p className='text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl md:max-w-lg mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed'>
                            Solução criada para organizar a busca por vagas, usando filtros por curso e habilidades e permitindo enviar currículos dentro da própria plataforma.
                        </p>

                        <div className='w-full flex justify-center mb-8 animate-in slide-in-from-bottom duration-700 delay-300'>

                            <a 
                                href="https://mecrym.github.io/Projeto-Final-lab-S05/vagas.html" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-l border-r border-white/20 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 text-white hover:bg-white/20 cursor-pointer'
                            >
                                <span>Acessar Plataforma</span>
                                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300'/>
                            </a>
                        </div>

                        {/* Tech Stack*/}
                        <div className="mt-2 animate-in slide-in-from-bottom duration-700 delay-500">
                            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-medium">Desenvolvido com</p>
                            <div className="flex items-center justify-center gap-3 text-gray-400">
                                <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 hover:border-blue-500/30 transition-colors cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    <span className="text-xs sm:text-sm">HTML5</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 hover:border-yellow-500/30 transition-colors cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                    <span className="text-xs sm:text-sm">JS</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 hover:border-cyan-500/30 transition-colors cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                    <span className="text-xs sm:text-sm">CSS3</span>
                                </div>
                            </div>
                        </div>

                    </div> 

                    {/* COLUNA 2:Iframe */}
                    <div className="w-full animate-in slide-in-from-bottom duration-700 delay-400">
                        <div className='relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/5 max-w-sm mx-auto md:max-w-full md:mx-0'>
                            <div className='flex flex-col bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[420px] md:h-[350px] lg:h-[400px] border border-white/5 w-full'>

                                {/* Barra de Título */}
                                <div className="flex-none flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/5">
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"/>
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"/>
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"/>
                                        </div>
                                        <span className='text-xs sm:text-sm text-gray-300'>Projeto Final</span>
                                    </div>
                                    <ChevronDown className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400'/>
                                </div>
                                
                                {/* Iframe */}
                                <div className="flex-1 relative w-full h-full bg-white overflow-hidden">
                                    <iframe 
                                        src="https://mecrym.github.io/Projeto-Final-lab-S05/vagas.html"
                                        title="Integração Projeto Final"
                                        className="w-full h-full border-0"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}