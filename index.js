const fs = require("fs");

function calculaTempoMedioEntrePicos(dados) {
  let picos = [];
  for (let i = 1; i < dados.length - 1; i++) {
    if (dados[i] > dados[i - 1] && dados[i] > dados[i + 1] && dados[i] >= 50) {
      picos.push(i);
    }
  }

  if (picos.length < 2) {
    return "Não há picos suficientes para calcular o tempo médio.";
  }

  let temposEntrePicos = [];
  for (let i = 1; i < picos.length; i++) {
    let tempoEntrePicos = picos[i] - picos[i - 1];
    temposEntrePicos.push(tempoEntrePicos);
  }

  let tempoMedioEmSegundos =
    temposEntrePicos.reduce((acc, val) => acc + val, 0) / (picos.length - 1);

  let minutos = Math.floor(tempoMedioEmSegundos / 60);
  let segundos = Math.floor(tempoMedioEmSegundos % 60);

  let tempoMedioFormatado = `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;

  return tempoMedioFormatado;
}

fs.readFile("exemplo.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const dados = data.trim().split("\n").map(Number);

  const tempoMedio = calculaTempoMedioEntrePicos(dados);
  console.log("Tempo médio entre os picos:", tempoMedio);
});
