export function embaralhar(itens) {
  const resultado = [...itens];

  for (let indice = resultado.length - 1; indice > 0; indice -= 1) {
    const outroIndice = Math.floor(Math.random() * (indice + 1));
    [resultado[indice], resultado[outroIndice]] = [
      resultado[outroIndice],
      resultado[indice],
    ];
  }

  return resultado;
}