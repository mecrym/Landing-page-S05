import React from 'react';
import { User, Quote } from 'lucide-react';

export default function UserStory() {
    return (
        <section id="userstory" className="w-full py-20 px-4 sm:px-16 lg:px-8 bg-slate-950 overflow-hidden">
            <div className="relative z-10 w-full max-w-7xl mx-auto">

                <div className="relative mb-16 w-full">
                    
                    <h3 className="text-left text-white/70 font-bold text-sm sm:text-base uppercase tracking-widest pl-6 pb-4">
                        User Story
                    </h3>

                    <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-blue-500/30" />

                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/30" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="flex flex-col items-center text-center md:order-2 animate-in slide-in-from-right duration-700">
                        
                        <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white leading-tight'>
                            Traduzindo necessidades em <br/>
                            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-100 bg-clip-text text-transparent">
                                funcionalidades
                            </span>
                        </h2>

                        <p className='text-gray-400 text-lg leading-relaxed mb-6'>
                            A User Story conecta a persona do estudante às regras de negócio. Ela garante que cada linha de código tenha um propósito claro: resolver um problema real de quem busca emprego.
                        </p>
                        
                        <p className='text-gray-500 text-base leading-relaxed max-w-lg'>
                            Dessa forma, transformamos requisitos complexos em uma navegação fluida e centrada no valor para o usuário final, eliminando funcionalidades desnecessárias e focando no que realmente importa.
                        </p>
                    </div>

                    <div className="w-full flex justify-center relative group md:order-1 animate-in slide-in-from-left duration-700 delay-200">
                        
                        <div className="relative w-full max-w-sm md:max-w-full">

                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
                                
                                <div className="absolute top-6 right-8 opacity-20">
                                    <Quote className="w-12 h-12 text-blue-400 rotate-180" />
                                </div>

                                <div className="flex flex-col items-center gap-6">

                                    <div className="relative">

                                        <div className="w-20 h-20 rounded-full bg-blue-500/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                                            <User className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
                                        </div>

                                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-center z-10">
                                        <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic">
                                            "Como estudante, eu quero filtrar vagas por habilidades e cursos para que eu possa encontrar oportunidades relevantes rapidamente."
                                        </p>
                                        
                                        <div className="pt-4 border-t border-white/5 w-full flex justify-center">
                                            <div className="flex flex-col items-center">
                                                <span className="text-sm font-semibold text-blue-400">Persona: Estudante</span>
                                                <span className="text-xs text-gray-500">Fluxo Principal de Busca</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}