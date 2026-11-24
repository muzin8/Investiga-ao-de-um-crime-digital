import { embaralhar } from "./aleatorio.js";
import { fases } from "./pergunta.js";

const letras = ["A", "B", "C"];

export function iniciarJogo() {
  const telaInicial = document.querySelector("#intro");
  const telaJogo = document.querySelector("#game");
  const telaResultado = document.querySelector("#result");
  const botaoInicio = document.querySelector("#start-button");
  const botaoContinuar = document.querySelector("#continue-button");
  const botaoReiniciar = document.querySelector("#restart-button");
  const opcoes = document.querySelector("#choices");
  const aviso = document.querySelector("#evidence-note");
  const feedback = document.querySelector("#feedback");
  const faixaProgresso = document.querySelector("#progress-track");
  const progresso = document.querySelector("#progress-fill");
  const rotuloProgresso = document.querySelector("#progress-label");
  const pontuacao = document.querySelector("#score");

  let faseAtual = 0;
  let totalPontos = 0;
  let escolhaFeita = false;

  function iniciar() {
    faseAtual = 0;
    totalPontos = 0;
    pontuacao.textContent = "0";
    telaInicial.hidden = true;
    telaResultado.hidden = true;
    telaJogo.hidden = false;
    mostrarFase();
    document.querySelector("#phase-title").focus();
  }

  function mostrarFase() {
    const fase = fases[faseAtual];
    const numero = String(faseAtual + 1).padStart(2, "0");
    const porcentagem = ((faseAtual + 1) / fases.length) * 100;

    escolhaFeita = false;
    document.querySelector("#phase-number").textContent = numero;
    document.querySelector("#phase-title").textContent = fase.titulo;
    document.querySelector("#phase-context").textContent = fase.contexto;
    rotuloProgresso.innerHTML = `ETAPA ${numero} <span>/ ${fases.length}</span>`;
    faixaProgresso.setAttribute("aria-valuenow", String(faseAtual + 1));
    progresso.style.width = `${porcentagem}%`;
    aviso.hidden = false;
    feedback.hidden = true;
    opcoes.replaceChildren();

    embaralhar(fase.escolhas).forEach((escolha, indice) => {
      const botao = document.createElement("button");
      const letra = document.createElement("span");
      const texto = document.createElement("span");

      botao.className = "choice-button";
      botao.type = "button";
      letra.className = "choice-letter";
      letra.setAttribute("aria-hidden", "true");
      letra.textContent = letras[indice];
      texto.className = "choice-text";
      texto.textContent = escolha.texto;
      botao.append(letra, texto);
      botao.addEventListener("click", () => selecionar(escolha, botao));
      opcoes.append(botao);
    });
  }

  function selecionar(escolha, botaoSelecionado) {
    if (escolhaFeita) return;
    escolhaFeita = true;
    totalPontos += escolha.pontos;
    pontuacao.textContent = String(totalPontos);

    opcoes.querySelectorAll("button").forEach((botao) => {
      botao.disabled = true;
    });
    botaoSelecionado.classList.add("is-selected");
    aviso.hidden = true;
    document.querySelector("#feedback-heading").textContent =
      escolha.pontos === 2 ? "Boa decisão investigativa" : "Ponto de atenção";
    document.querySelector("#feedback-text").textContent = escolha.feedback;
    feedback.hidden = false;
    botaoContinuar.textContent =
      faseAtual === fases.length - 1 ? "Ver relatório final →" : "Próxima etapa →";
    botaoContinuar.focus();
  }

  function avancar() {
    faseAtual += 1;
    if (faseAtual === fases.length) {
      mostrarResultado();
      return;
    }
    mostrarFase();
    document.querySelector("#phase-title").focus();
  }

  function mostrarResultado() {
    const titulo = document.querySelector("#result-title");
    const resumo = document.querySelector("#result-summary");
    const conclusao = document.querySelector("#case-conclusion");
    const total = fases.length * 2;

    telaJogo.hidden = true;
    telaResultado.hidden = false;
    document.querySelector("#final-score").textContent = String(totalPontos);

    if (totalPontos >= 25) {
      titulo.textContent = "Excelente trabalho.";
      resumo.textContent =
        "Você conduziu a apuração com cuidado, preservou evidências e respeitou os limites da investigação.";
      conclusao.textContent =
        "Os registros disponíveis apontam para um incidente iniciado após uma mensagem suspeita. A linha do tempo e as evidências preservadas permitem orientar a resposta, mas a atribuição definitiva depende de análise técnica e validação por profissionais autorizados.";
    } else if (totalPontos >= 15) {
      titulo.textContent = "Caso encaminhado.";
      resumo.textContent =
        "Você reuniu pistas importantes. Algumas decisões poderiam ser mais cuidadosas com a preservação ou o escopo.";
      conclusao.textContent =
        "Há indícios de que uma mensagem suspeita antecedeu a indisponibilidade dos arquivos, mas ainda existem lacunas. A equipe deve manter as evidências preservadas, revisar os procedimentos e evitar atribuir responsabilidade sem corroboração.";
    } else {
      titulo.textContent = "Investigue com mais cuidado.";
      resumo.textContent =
        "A apuração terminou, mas algumas escolhas poderiam comprometer evidências ou a privacidade. Vale tentar novamente.";
      conclusao.textContent =
        "O incidente permanece inconclusivo. Antes de qualquer conclusão, será necessário revisar os registros preservados, documentar as ações e envolver profissionais autorizados. Em uma investigação real, não altere sistemas nem compartilhe dados fora dos canais aprovados.";
    }

    document.querySelector("#final-score").setAttribute("aria-label", `${totalPontos} de ${total} pontos`);
    titulo.focus();
  }

  botaoInicio.addEventListener("click", iniciar);
  botaoReiniciar.addEventListener("click", iniciar);
  botaoContinuar.addEventListener("click", avancar);
}