# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

# Projeto Final - Interação Homem-Máquina (IHM)

![Project Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> Landing Page desenvolvida para documentar e apresentar o processo de design e desenvolvimento da solução "Busca de Vagas".

## Sobre o Projeto

Este projeto é uma **Landing Page de Documentação** criada como parte da avaliação final da disciplina de **Interação Homem-Máquina (IHM)** no **Inatel**. 

O objetivo desta aplicação web é apresentar, de forma interativa e visualmente agradável, os artefatos de design gerados durante o ciclo de desenvolvimento do software, incluindo Personas (User Stories), Análise de Tarefas (HTA), Modelagem (UML) e Wireframes.

A interface segue uma estética **"Clean Glassmorphism"** com tema escuro (Dark Mode), focada na legibilidade e na elegância visual.

---

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

* **[React.js](https://reactjs.org/):** Biblioteca JavaScript para construção da interface.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utility-first para estilização rápida e responsiva.
* **[Lucide React](https://lucide.dev/):** Biblioteca de ícones leves e consistentes.
* **[FormSubmit](https://formsubmit.co/):** Serviço de backend-as-a-service para envio de feedbacks via formulário.
* **[GitHub Pages](https://pages.github.com/):** Plataforma de hospedagem estática.

---

## Estrutura e Funcionalidades

A página é dividida em seções estratégicas, navegáveis via menu fixo:

### 1. Hero Section (Integração)
Apresenta o projeto e integra a solução final (site de vagas) através de um `iframe` interativo, simulando uma janela de navegador.
* **Destaque:** Efeito de vidro (glass) e integração funcional com a página externa.

### 2. User Story
Apresenta a persona principal ("Estudante") e sua necessidade central.
* **Design:** Card flutuante com indicador de status "Online" (verde) e layout responsivo que alterna a posição do texto/card entre mobile e desktop.

### 3. Análise de Tarefas (HTS)
Explicação teórica e visualização do diagrama HTA (Hierarchical Task Analysis).
* **Foco:** Mapeamento da lógica cognitiva do usuário para a tarefa de "Conseguir uma Vaga".

### 4. Fluxo de Informações (UML)
Apresentação do Diagrama de Classes, demonstrando a integridade e arquitetura dos dados.
* **Visual:** Layout de coluna única para maximizar a visibilidade do diagrama técnico.

### 5. Feedback & Contato
Formulário funcional para coleta de opiniões sobre o projeto.
* **Integração:** Conectado diretamente ao email do desenvolvedor via FormSubmit.

---

## Responsividade

O projeto é **100% responsivo**, adaptando-se a:
* **Desktop:** Layouts em Grid (2 colunas) e alinhamentos laterais.
* **Tablets:** Ajustes de margens e tamanhos de fonte.
* **Mobile:** Layouts em coluna única (Stack), imagens com largura segura (`max-w-full`) e menu "hambúrguer" animado.

---

## 🔧 Como Rodar o Projeto

Para rodar este projeto localmente, siga os passos:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/mecrym/Landing-page-S05.git](https://github.com/mecrym/Landing-page-S05.git)
    ```

2.  **Instale as dependências:**
    ```bash
    cd nome-da-pasta
    npm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Acesse `http://localhost:5173` (ou a porta indicada) no seu navegador.

---

## Autora

**Maria Moreira** 🎓 Estudante de Engenharia de Software - Inatel  
📍 Santa Rita do Sapucaí, MG

* [LinkedIn](https://www.linkedin.com/in/maria-ecr-moreira/)
* [Email](mailto:maria.moreira0410@gmail.com)
