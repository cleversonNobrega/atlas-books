# 📚 Atlas Books
 
> Sua próxima leitura está a um clique de distância.
 
Uma aplicação web desenvolvida em React para descoberta e pesquisa de livros, com interface moderna e experiência fluida para leitores que querem encontrar seu próximo título favorito.
 
---
 
## 🖥️ Visão Geral
 
O **Atlas Books** é uma plataforma de catálogo de livros que permite ao usuário pesquisar títulos, conferir os últimos lançamentos e receber recomendações personalizadas — tudo em uma interface elegante com tema escuro em tons de azul.
 
### Funcionalidades
 
- 🔍 **Pesquisa de livros** — busca em tempo real pelo nome do título no acervo disponível
- 🆕 **Últimos Lançamentos** — seção dedicada aos livros mais recentes do catálogo
- 💡 **Card de Recomendação** — sugestão de leitura com título, subtítulo e descrição
- 🎨 **Interface responsiva** — layout fluido com gradientes e styled-components
---
 
## 🚀 Tecnologias
 
| Tecnologia | Versão |
|---|---|
| [React](https://reactjs.org/) | ^18.2.0 |
| [Styled Components](https://styled-components.com/) | ^5.3.5 |
| [Create React App](https://create-react-app.dev/) | 5.0.1 |
 
---
 
## 📁 Estrutura do Projeto
 
```
atlas-books/
├── public/
│   ├── index.html
│   └── favicon.ico
└── src/
    ├── App.js
    ├── imagens/
    └── componentes/
        ├── Header/
        ├── Logo/
        ├── OpcoesHeader/
        ├── IconesHeader/
        ├── Input/
        ├── Titulo/
        ├── Pesquisa/
        │   └── dadosPesquisa.js
        ├── UltimosLancamentos/
        │   └── dadosUltimosLancamentos.js
        └── CardRecomenda/
```
 
---
 
## ⚙️ Como Executar
 
### Pré-requisitos
 
- [Node.js](https://nodejs.org/) (v14 ou superior)
- npm ou yarn
### Instalação
 
```bash
# Clone o repositório
git clone https://github.com/cleversonNobrega/atlas-books.git
 
# Entre na pasta do projeto
cd atlas-books
 
# Instale as dependências
npm install
```
 
### Rodando em desenvolvimento
 
```bash
npm start
```
 
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.
 
### Build para produção
 
```bash
npm run build
```
 
Os arquivos otimizados serão gerados na pasta `build/`.
 
---
 
## 🧪 Testes
 
```bash
npm test
```
 
---
 
## 📌 Componentes Principais
 
| Componente | Descrição |
|---|---|
| `Header` | Barra de navegação com logo e opções |
| `Pesquisa` | Seção de busca com filtro dinâmico de livros |
| `UltimosLancamentos` | Grid com os livros mais recentes |
| `CardRecomenda` | Card de recomendação de leitura personalizada |
| `Input` | Campo de texto estilizado para pesquisa |
| `Titulo` | Componente de título reutilizável e configurável |
 
---
 
## 🎨 Design
 
A interface utiliza um gradiente azul escuro como tema principal (`#002F52` → `#326589`), transmitindo sofisticação e imersão — ideal para um ambiente de leitura. Os componentes são estilizados com **Styled Components**, garantindo estilos encapsulados e fáceis de manter.
 
---
