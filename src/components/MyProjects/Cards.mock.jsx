import GifRAM from "../../assets/gifs/RAM.gif";
import GifGithubUserSearcher from "../../assets/gifs/github-user-searcher.gif";
import GifPricingComponent from "../../assets/gifs/pricing-component.gif";
import GifCodeGenerator from "../../assets/gifs/qr-code-generator.gif";
import GifAdviceGenerator from "../../assets/gifs/advice-generator.gif";

export const cards = [
    {
        titulo: "Rick and Morty",
        texto: "Bem-vindo a mundo de Rick and Morty. Este é um projeto pessoal que desenvolvi para testar as minhas habilidades com React.js e aulgumas lib que eu aprendi a trabalhar. Como por exemplo, Styled-components: Para estilizar a aplicação. React-Router: Para acessar mais informações de cada card. React-icons: Para utilizar ícones da biblioteca do React.",
        tectnologias: "Projeto com: React.js e API.",
        endereco: GifRAM,
        urlProjeto: "https://rick-and-morty-5bdvfn49a-moiseis-cruzs-projects.vercel.app/",
        urlRepositorio: "https://github.com/Moiseis-Cruz/rick-and-morty",
    },
    {
        titulo: "Finder GitHub User",
        texto: "O Finder GitHub User é um desafio para mostrar o meu conhecimento em trabalhar, principalmente com JavaScript e APIs, e, renderizar os métodos solicitados na tela. Esse métodos renderizado são algumas informações sobre usuários do Github que são buscados através do campo de procura. Se o usuário procurado não existir, apresentará uma mensagem especifica indicando a não existência.",
        tectnologias: "HTML, CSS, JS e API.",
        endereco: GifGithubUserSearcher,
        urlProjeto: "https://github-user-searcher-49iehgol0-moiseis-cruzs-projects.vercel.app/",
        urlRepositorio: "https://github.com/Moiseis-Cruz/github-user-searcher",
    },
    {
        titulo: "Pricing Component With Toggle",
        texto: "Desafio do Frontend Mentor de um Princing Component com um botão que alterna entre as opções de 3 opções de planos, Sendo que esses planos podem ser anuais ou mensais. Que usa um botão para alternar entre eles. Para selecionar os pagamentos anuais/mensais usei um evento de Click em um input do tipo checkbox, que adiciona visibilidade a uma seção e remove de outra, e vice-versa.",
        tectnologias: "HTML, CSS, JS.",
        endereco: GifPricingComponent,
        urlProjeto: "https://moiseis-cruz.github.io/pricing-component/",
        urlRepositorio: "https://github.com/Moiseis-Cruz/pricing-component",
    },
    {
        titulo: "QR-Code Generator",
        texto: "Este projeto gera um QR-Code ao digitar algo no campo. Depois é só clicar no botão ou teclar enter no próprio campo de digitação.",
        tectnologias: "HTML, CSS, JS & API.",
        endereco: GifCodeGenerator,
        urlProjeto: "https://moiseis-cruz.github.io/qr-code-generator/",
        urlRepositorio: "https://github.com/Moiseis-Cruz/qr-code-generator",
    },
    {
        titulo: "Advice Generator",
        texto: "Projeto proposto pelo curso DevQuest, do Frontend Mentor, para testar as minhas habilidades estudadas até então. Um gerador de conselhos aleatórios onde é gerado um novo conselho ao clicar no botão em formato circular com um dado centralizado nele.",
        tectnologias: "HTML, CSS, JS e API.",
        endereco: GifAdviceGenerator,
        urlProjeto: "https://moiseis-cruz.github.io/advice-generator-app/",
        urlRepositorio: "https://github.com/Moiseis-Cruz/advice-generator-app",
    },
];
