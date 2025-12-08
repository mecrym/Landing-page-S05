import React from 'react';
import { Github, Linkedin, Code2, MapPin, GraduationCap } from 'lucide-react'; // Adicionado Linkedin

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="w-full bg-slate-950 border-t border-blue-500/20 relative overflow-hidden pt-16 pb-8">

            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    
                    {/*COLUNA 1*/}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                <GraduationCap className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">Projeto Final</span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Trabalho desenvolvido para a disciplina de Interação Homem-Máquina (IHM), focado na aplicação de conceitos de usabilidade e experiência do usuário.
                        </p>

                        <div className="pt-4 border-t border-white/5 space-y-4">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                                    <span className="text-xs font-bold text-blue-400">MM</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-white">Maria Moreira</span>
                                    <span className="text-xs text-gray-500">Matrícula: 710</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">

                                <a href="https://github.com/mecrym/Landing-page-S05" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group">
                                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span>GitHub</span>
                                </a>

                                <a href="https://www.linkedin.com/in/maria-ecr-moreira" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group">
                                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>

                            <div className="flex items-center space-x-2 text-xs text-gray-500 pt-2">
                                <MapPin className="w-3 h-3" />
                                <span>Inatel - Santa Rita do Sapucaí, MG</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 pl-3 border-l-2 border-blue-500">Navegação</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#userstory" onClick={(e) => scrollToSection(e, 'userstory')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2 group-hover:bg-blue-400 transition-colors"></span>
                                    User Story
                                </a>
                            </li>
                            <li>
                                <a href="#hts" onClick={(e) => scrollToSection(e, 'hts')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2 group-hover:bg-blue-400 transition-colors"></span>
                                    Análise de Tarefas (HTS)
                                </a>
                            </li>
                            <li>
                                <a href="#uml" onClick={(e) => scrollToSection(e, 'uml')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2 group-hover:bg-blue-400 transition-colors"></span>
                                    Fluxo de Informações (UML)
                                </a>
                            </li>
                            <li>
                                <a href="#wireframes" onClick={(e) => scrollToSection(e, 'wireframes')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2 group-hover:bg-blue-400 transition-colors"></span>
                                    Wireframes
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/*COLUNA 3*/}
                    <div>
                        <h4 className="text-white font-semibold mb-6 pl-3 border-l-2 border-blue-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-900 border border-white/10 rounded-full text-xs text-gray-400 hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-default">React.js</span>
                            <span className="px-3 py-1 bg-slate-900 border border-white/10 rounded-full text-xs text-gray-400 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default">Tailwind CSS</span>
                            <span className="px-3 py-1 bg-slate-900 border border-white/10 rounded-full text-xs text-gray-400 hover:border-blue-400/50 hover:text-blue-200 transition-colors cursor-default">JavaScript</span>
                            <span className="px-3 py-1 bg-slate-900 border border-white/10 rounded-full text-xs text-gray-400 hover:border-white/50 hover:text-white transition-colors cursor-default">Lucide Icons</span>
                            <span className="px-3 py-1 bg-slate-900 border border-white/10 rounded-full text-xs text-gray-400 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors cursor-default">Figma</span>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} Projeto Final IHM. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Code2 className="w-4 h-4" />
                        <span>Desenvolvido com carinho e Monster ⚡</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}