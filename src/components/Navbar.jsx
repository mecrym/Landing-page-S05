import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setMobileMenuIsOpen(false);

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
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <div>
                            <img src="/logo-branco.png" alt="Inatel" className="h-6 sm:h-8" />
                        </div>
                    </div>

                    {/* Nav Links Desktop */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a 
                            href="#userstory" 
                            onClick={(e) => scrollToSection(e, 'userstory')} 
                            className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors"
                        >
                            User Story
                        </a>
                        <a 
                            href="#hts" 
                            onClick={(e) => scrollToSection(e, 'hts')} 
                            className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors"
                        >
                            Análise de Tarefas
                        </a>
                        <a 
                            href="#uml" 
                            onClick={(e) => scrollToSection(e, 'uml')} 
                            className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors"
                        >
                            Fluxo de informações
                        </a>
                        <a 
                            href="#feedback" 
                            onClick={(e) => scrollToSection(e, 'feedback')} 
                            className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors"
                        >
                            Feedbacks
                        </a>
                    </div>

                    <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuIsOpen((prev) => !prev)} aria-label="Toggle menu">
                        {mobileMenuIsOpen ? ( <X className="w-6 h-6" /> ) : (<Menu className="w-6 h-6" />)}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-slate-900 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <a 
                            href="#userstory" 
                            onClick={(e) => scrollToSection(e, 'userstory')} 
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                        >
                            User Story
                        </a>
                        <a 
                            href="#hts" 
                            onClick={(e) => scrollToSection(e, 'hts')} 
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                        >
                            Análise de Tarefas
                        </a>
                        <a 
                            href="#uml" 
                            onClick={(e) => scrollToSection(e, 'uml')} 
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                        >
                            Fluxo de informações
                        </a>
                        <a 
                            href="#feedback" 
                            onClick={(e) => scrollToSection(e, 'feedback')} 
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                        >
                            Feedbacks
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}