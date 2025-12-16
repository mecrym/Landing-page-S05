import React from 'react';
import { Send, Mail } from 'lucide-react';

export default function Feedback() {
    return (
        <section id="feedback" className="w-full py-20 px-4 sm:px-16 lg:px-8 bg-slate-950 overflow-hidden relative">

            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto">

                <div className="relative mb-16 w-full animate-in slide-in-from-left duration-700">
                    <h3 className="text-left text-white/70 font-bold text-sm sm:text-base uppercase tracking-widest pl-6 pb-4">
                        Feedback & Contato
                    </h3>
                    <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-blue-500/30" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/30" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    
                    {/* COLUNA 1: Texto */}
                    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
                        <div>
                            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white leading-tight'>
                                Sua opinião é fundamental para <br/>
                                <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-100 bg-clip-text text-transparent">
                                    nossa evolução
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Encontrou algum bug? Tem sugestões de melhoria para a usabilidade? Ou quer apenas deixar um comentário sobre o projeto?
                            </p>
                            <p className="text-gray-500 mt-4">
                                Este formulário envia sua mensagem diretamente para meu email pessoal. Ficarei feliz em receber seu feedback sobre o desempenho e funcionamento do trabalho.
                            </p>
                        </div>

                        {/* Card Email */}
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl flex items-center space-x-4 hover:border-blue-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                <Mail className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Prefere enviar diretamente?</p>
                                <a href="mailto:maria.moreira0410@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                                    maria.moreira0410@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA 2: Form */}
                    <div className="relative w-full animate-in slide-in-from-bottom duration-700 delay-200">
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                            
                            <form 
                                action="https://formsubmit.co/maria.moreira0410@gmail.com" 
                                method="POST"
                                className="space-y-6"
                            >
                                <input type="hidden" name="_subject" value="Novo Feedback do Projeto IHM!" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nome</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name"
                                        required
                                        placeholder="Como devo te chamar?"
                                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        required
                                        placeholder="seu@email.com"
                                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Mensagem / Feedback</label>
                                    <textarea 
                                        name="message" 
                                        id="message"
                                        rows="4"
                                        required
                                        placeholder="O que você achou do projeto? Encontrou algum problema?"
                                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="group w-full px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-l border-r border-white/20 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 text-white hover:bg-white/20 cursor-pointer"
                                >
                                    <span>Enviar Feedback</span>
                                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}