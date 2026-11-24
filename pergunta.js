export const fases = [
  {
    titulo: "O chamado inicial",
    contexto:
      "A equipe da biblioteca relata que vários arquivos ficaram inacessíveis após uma mensagem suspeita recebida por um funcionário. Qual é sua primeira providência?",
    escolhas: [
      {
        texto: "Registrar o relato, o horário e os sistemas afetados antes de qualquer intervenção.",
        pontos: 2,
        feedback:
          "Um registro inicial confiável orienta a investigação e ajuda a preservar a sequência dos fatos.",
      },
      {
        texto: "Pedir que cada funcionário apague mensagens estranhas da caixa de entrada.",
        pontos: 0,
        feedback:
          "Apagar mensagens pode destruir evidências. Oriente a equipe a não alterar os itens suspeitos.",
      },
      {
        texto: "Publicar os detalhes do incidente nas redes sociais para pedir ajuda.",
        pontos: 0,
        feedback:
          "Divulgação precipitada pode expor dados e atrapalhar a apuração. Use os canais oficiais responsáveis.",
      },
    ],
  },
  {
    titulo: "Conter sem apagar rastros",
    contexto:
      "Um computador da recepção continua exibindo alertas incomuns. A prioridade é reduzir o impacto sem perder evidências.",
    escolhas: [
      {
        texto: "Desligar todos os equipamentos da biblioteca imediatamente.",
        pontos: 0,
        feedback:
          "Uma ação ampla pode interromper serviços e eliminar dados voláteis úteis. A contenção deve ser coordenada.",
      },
      {
        texto: "Acionar a equipe técnica para isolar o equipamento afetado de forma documentada.",
        pontos: 2,
        feedback:
          "A contenção direcionada limita possíveis danos e mantém o processo sob controle técnico.",
      },
      {
        texto: "Continuar usando o computador enquanto a equipe observa o que acontece.",
        pontos: 0,
        feedback:
          "Manter um sistema suspeito em uso pode ampliar o impacto. A equipe técnica deve avaliar o isolamento.",
      },
    ],
  },
  {
    titulo: "Preservar a cena digital",
    contexto:
      "A equipe de suporte oferece reiniciar o computador afetado para ver se o alerta desaparece. O que você recomenda?",
    escolhas: [
      {
        texto: "Autorizar a reinicialização e conferir depois se os arquivos voltaram.",
        pontos: 0,
        feedback:
          "Reiniciar pode alterar evidências. Evite testes improvisados antes da coleta orientada.",
      },
      {
        texto: "Copiar os arquivos suspeitos para um pendrive pessoal.",
        pontos: 0,
        feedback:
          "Uma cópia sem controle pode contaminar evidências e criar riscos adicionais.",
      },
      {
        texto: "Manter o estado atual documentado e solicitar coleta por profissional autorizado.",
        pontos: 2,
        feedback:
          "Documentar o estado e usar procedimentos autorizados protege a integridade da evidência.",
      },
    ],
  },
  {
    titulo: "Autorização e escopo",
    contexto:
      "O diretor pede que você examine também os dispositivos pessoais de todos os funcionários. Qual é a resposta correta?",
    escolhas: [
      {
        texto: "Definir escopo e autorização formal com as pessoas responsáveis antes de qualquer análise.",
        pontos: 2,
        feedback:
          "A investigação precisa ter limites claros, base legal e autorização apropriada.",
      },
      {
        texto: "Acessar os dispositivos pessoais, pois o incidente ocorreu no trabalho.",
        pontos: 0,
        feedback:
          "O local do incidente não elimina direitos de privacidade. Não examine dispositivos sem autorização adequada.",
      },
      {
        texto: "Pedir as senhas pessoais de todos para acelerar o trabalho.",
        pontos: 0,
        feedback:
          "Solicitar credenciais pessoais é inadequado. Siga os processos autorizados e preserve a privacidade.",
      },
    ],
  },
  {
    titulo: "Os registros do servidor",
    contexto:
      "A equipe autorizada localiza registros de acesso do servidor da biblioteca. Como eles devem ser tratados?",
    escolhas: [
      {
        texto: "Editar os registros para remover entradas que parecem irrelevantes.",
        pontos: 0,
        feedback:
          "Alterar os registros compromete sua confiabilidade. Preserve os originais.",
      },
      {
        texto: "Preservar uma cópia íntegra, registrar origem e horário e restringir o acesso.",
        pontos: 2,
        feedback:
          "A cadeia de custódia e o controle de acesso ajudam a demonstrar que os registros não foram alterados.",
      },
      {
        texto: "Enviar os registros completos para um grupo público de tecnologia.",
        pontos: 0,
        feedback:
          "Registros podem conter informações sensíveis. Compartilhe apenas com pessoas autorizadas.",
      },
    ],
  },
  {
    titulo: "Uma mensagem suspeita",
    contexto:
      "Um funcionário encaminha a mensagem que recebeu. Ela contém um pedido urgente para revisar um documento compartilhado.",
    escolhas: [
      {
        texto: "Abrir o documento no computador da recepção para confirmar se é malicioso.",
        pontos: 0,
        feedback:
          "Não abra conteúdo suspeito em um equipamento de trabalho. Registre e encaminhe a análise à equipe responsável.",
      },
      {
        texto: "Responder ao remetente fingindo ser o funcionário para obter informações.",
        pontos: 0,
        feedback:
          "Não interaja com o remetente nem conduza uma operação improvisada. Preserve a mensagem para análise autorizada.",
      },
      {
        texto: "Guardar a mensagem original com seus cabeçalhos e registrar quem a recebeu.",
        pontos: 2,
        feedback:
          "A mensagem original e seus metadados podem apoiar a análise sem exigir interação com o conteúdo.",
      },
    ],
  },
  {
    titulo: "Construindo a linha do tempo",
    contexto:
      "Há um alerta às 08:42, um chamado às 09:05 e uma falha de acesso às 09:11. Como avançar?",
    escolhas: [
      {
        texto: "Comparar os horários de fontes diferentes e anotar fusos e possíveis diferenças de relógio.",
        pontos: 2,
        feedback:
          "Correlacionar fontes e considerar diferenças de horário torna a linha do tempo mais precisa.",
      },
      {
        texto: "Assumir que o horário do chamado indica exatamente quando o incidente começou.",
        pontos: 0,
        feedback:
          "O chamado registra quando alguém reportou o problema, não necessariamente quando ele começou.",
      },
      {
        texto: "Escolher o horário que melhor combina com a hipótese inicial.",
        pontos: 0,
        feedback:
          "A hipótese não deve determinar a leitura dos dados. Compare as fontes de forma imparcial.",
      },
    ],
  },
  {
    titulo: "Quem tinha acesso?",
    contexto:
      "Os registros mostram uma conta de serviço ativa durante a janela do incidente. O que isso permite concluir?",
    escolhas: [
      {
        texto: "Que a pessoa dona da conta é certamente responsável pelo incidente.",
        pontos: 0,
        feedback:
          "Uma conta não identifica automaticamente quem a utilizou. Evite conclusões sem evidências corroborantes.",
      },
      {
        texto: "Que é preciso verificar permissões, uso esperado e outras evidências antes de atribuir responsabilidade.",
        pontos: 2,
        feedback:
          "Atribuição exige contexto e corroboração. Uma conta ativa é uma pista, não uma conclusão.",
      },
      {
        texto: "Que a conta deve ser usada para entrar em outros sistemas e procurar pistas.",
        pontos: 0,
        feedback:
          "Não reutilize credenciais nem amplie o acesso. A equipe responsável deve seguir o escopo autorizado.",
      },
    ],
  },
  {
    titulo: "Relatos da equipe",
    contexto:
      "Dois funcionários descrevem a mesma manhã de formas diferentes. Como registrar os depoimentos?",
    escolhas: [
      {
        texto: "Anotar cada relato separadamente, com horário, contexto e palavras da própria pessoa.",
        pontos: 2,
        feedback:
          "Registros individuais reduzem confusão e ajudam a comparar relatos com outras evidências.",
      },
      {
        texto: "Reunir todos e pedir que escolham juntos a versão mais provável.",
        pontos: 0,
        feedback:
          "Uma conversa coletiva pode influenciar as lembranças. Registre relatos separados.",
      },
      {
        texto: "Descartar o relato que não combina com a hipótese principal.",
        pontos: 0,
        feedback:
          "Relatos divergentes também são dados. Registre-os sem favorecer uma hipótese.",
      },
    ],
  },
  {
    titulo: "O alcance do incidente",
    contexto:
      "Alguns arquivos afetados podem conter dados de usuários da biblioteca. Qual deve ser o próximo passo?",
    escolhas: [
      {
        texto: "Publicar uma lista de nomes para que os usuários confirmem se foram afetados.",
        pontos: 0,
        feedback:
          "Expor nomes pode aumentar o dano. Não divulgue dados pessoais em canais públicos.",
      },
      {
        texto: "Ignorar essa possibilidade até que alguém reclame.",
        pontos: 0,
        feedback:
          "A possível exposição precisa ser avaliada proativamente pelos responsáveis adequados.",
      },
      {
        texto: "Acionar privacidade e gestão para avaliar dados envolvidos e obrigações de comunicação.",
        pontos: 2,
        feedback:
          "A avaliação cuidadosa do impacto permite proteger pessoas e cumprir os procedimentos aplicáveis.",
      },
    ],
  },
  {
    titulo: "A pista compartilhada",
    contexto:
      "Um colega quer enviar capturas de tela do incidente a um fórum público para obter uma opinião rápida.",
    escolhas: [
      {
        texto: "Orientar que não publique imagens ou registros e use apenas canais aprovados.",
        pontos: 2,
        feedback:
          "Canais controlados evitam exposição de dados e mantêm a investigação organizada.",
      },
      {
        texto: "Aprovar o envio, desde que os nomes estejam borrados.",
        pontos: 0,
        feedback:
          "Capturas podem revelar mais do que nomes. Não compartilhe evidências em fóruns públicos.",
      },
      {
        texto: "Pedir que envie os arquivos para sua conta pessoal de e-mail.",
        pontos: 0,
        feedback:
          "Contas pessoais não são um canal seguro de custódia. Use os meios institucionais autorizados.",
      },
    ],
  },
  {
    titulo: "A hipótese principal",
    contexto:
      "Os dados sugerem que a mensagem suspeita precedeu o problema, mas ainda não demonstram uma relação definitiva.",
    escolhas: [
      {
        texto: "Declarar que a mensagem causou o incidente e encerrar a análise.",
        pontos: 0,
        feedback:
          "Ordem temporal não prova causalidade. A hipótese precisa ser testada com evidências independentes.",
      },
      {
        texto: "Documentar a hipótese, as evidências que a apoiam e o que ainda falta verificar.",
        pontos: 2,
        feedback:
          "Separar fatos, hipóteses e lacunas deixa o relatório transparente e verificável.",
      },
      {
        texto: "Apagar as pistas que contradizem a hipótese para simplificar o relatório.",
        pontos: 0,
        feedback:
          "Omitir evidências contrárias compromete a imparcialidade. Preserve e avalie todas as pistas.",
      },
    ],
  },
  {
    titulo: "Retomada dos serviços",
    contexto:
      "A equipe técnica informa que pode restaurar arquivos a partir de cópias de segurança verificadas.",
    escolhas: [
      {
        texto: "Restaurar tudo imediatamente, sem confirmar a integridade das cópias.",
        pontos: 0,
        feedback:
          "Uma restauração precipitada pode reintroduzir problemas ou sobrescrever dados úteis.",
      },
      {
        texto: "Solicitar validação das cópias, plano de recuperação e registro das ações.",
        pontos: 2,
        feedback:
          "Validar a recuperação protege a disponibilidade e mantém as ações documentadas.",
      },
      {
        texto: "Pedir a um funcionário que tente reconstruir os arquivos manualmente.",
        pontos: 0,
        feedback:
          "A recuperação deve ser conduzida por profissionais responsáveis, com cópias verificadas.",
      },
    ],
  },
  {
    titulo: "Preparando o relatório",
    contexto:
      "A direção precisa de uma atualização clara enquanto a análise técnica ainda está em andamento.",
    escolhas: [
      {
        texto: "Apresentar fatos confirmados, impactos conhecidos, incertezas e próximos passos.",
        pontos: 2,
        feedback:
          "Uma comunicação objetiva diferencia o que se sabe do que ainda está sendo investigado.",
      },
      {
        texto: "Apontar publicamente um funcionário como responsável para tranquilizar a direção.",
        pontos: 0,
        feedback:
          "Atribuição prematura pode prejudicar pessoas e a investigação. Evite especular.",
      },
      {
        texto: "Prometer que nenhum dado foi afetado, sem concluir a avaliação.",
        pontos: 0,
        feedback:
          "Não prometa resultados ainda não verificados. Comunique incertezas com clareza.",
      },
    ],
  },
  {
    titulo: "Lições para o futuro",
    contexto:
      "O serviço foi retomado e o relatório inicial está pronto. Qual fechamento ajuda a reduzir riscos futuros?",
    escolhas: [
      {
        texto: "Encerrar o caso e descartar as notas para evitar trabalho adicional.",
        pontos: 0,
        feedback:
          "Preservar registros e acompanhar ações corretivas é parte importante da resposta a incidentes.",
      },
      {
        texto: "Registrar melhorias, responsáveis e prazos, mantendo evidências sob guarda apropriada.",
        pontos: 2,
        feedback:
          "Lições documentadas e ações acompanhadas fortalecem a prevenção sem perder a trilha da apuração.",
      },
      {
        texto: "Compartilhar os detalhes técnicos completos em uma postagem aberta.",
        pontos: 0,
        feedback:
          "Divulgue apenas o que foi aprovado e necessário. Detalhes excessivos podem expor pessoas e sistemas.",
      },
    ],
  },
];