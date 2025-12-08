import React from 'react';

export default function Hts() {
    return (
        <section id="hts" className="w-full py-20 px-4 sm:px-8 lg:px-8 bg-slate-950 overflow-x-hidden">
            <div className="relative z-10 w-full max-w-7xl mx-auto">

                <div className="relative mb-12 w-full">
                    <h3 className="text-left text-white/70 font-bold text-sm sm:text-base uppercase tracking-widest pl-6 pb-4">
                        Análise de Tarefas
                    </h3>
                    <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-blue-500/30" />
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500/30" />
                </div>

                <div className="flex flex-col items-center space-y-12">

                    <div className="text-center max-w-4xl animate-in slide-in-from-bottom duration-700">
                        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white leading-tight'>
                            Mapeando a <br className="md:hidden" />
                            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-100 bg-clip-text text-transparent">
                                lógica do usuário
                            </span>
                        </h2>
                        <p className='text-gray-400 text-lg leading-relaxed'>
                            A Análise Hierárquica de Tarefas (HTA) decompõe o objetivo de "Conseguir uma Vaga" em sub-tarefas operacionais, permitindo otimizar o fluxo de cliques e reduzir a carga cognitiva necessária.
                        </p>
                    </div>

                    <div className="w-full animate-in slide-in-from-bottom duration-700 delay-200">
                        <div className="relative w-full group">

                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 sm:p-4 shadow-2xl overflow-hidden">
                                <img 
                                    src="/hts.png" 
                                    alt="Diagrama HTS" 
                                    className="block w-full h-auto rounded-lg bg-white/5"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}