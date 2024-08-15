const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você cuida do meio ambiente?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "não",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "qual a importância das árvores para o meio ambiente?",
        alternativas: [
            {
                texto: "ajudam a purificar o ar e contribuem para a manutenção da umidade do solo",
                afirmacao: "afirmacao"
            },
            {
                texto: "para liberar gás carbônico no planeta e dar frutos",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "como as sacolas plásticas afetam a vida marinha?",
        alternativas: [
            {
                texto: "não interferem em nada.",
                afirmacao: "afirmacao"
            },
            {
                texto: "os animais marinhos podem confundir com alimentos e ingerir em seu organismo causando sua morte",
                afirmacao: "afirmacao."
            }
        ]
    },
    {
        enunciado: "como podemos economizar água diariamente?",
        alternativas: [
            {
                texto: "demorando no banho, deixando a torneira ligada enquanto escova ops dentes.",
                afirmacao: "afirmacao"
            },
            {
                texto: "fechando a torneira ao escovar os dentes,tomar banhos mais curtos,consertar torneiras com vazamentos.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "o que podemos fazer com o óleo de cozinha usado? ",
        alternativas: [
            {
                texto: "guardar em recipientes adequados e levá-lo até postos de coleta adequados",
                afirmacao: "afirmacao"
            },
            {
                texto: "jogar no ralo da pia.",
                afirmacao: "afirmacao "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();