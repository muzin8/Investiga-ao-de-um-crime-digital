# Rastro Digital

Jogo educativo de investigação forense digital, feito com HTML, CSS e JavaScript puro. São 15 etapas com três escolhas em cada uma, feedback imediato, pontuação e relatório final.

## Como jogar

Abra `index.html` em um navegador. Como o projeto usa módulos JavaScript, se o navegador bloquear módulos ao abrir arquivos diretamente, inicie um servidor local na pasta, por exemplo:

```sh
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Arquivos

- `index.html`: estrutura e telas do jogo.
- `style.css`: apresentação responsiva.
- `pergunta.js`: conteúdo das 15 etapas e escolhas.
- `aleatorio.js`: embaralha a ordem das escolhas.
- `main.js`: pontuação, navegação e resultado.
- `script.js`: inicializa o jogo.