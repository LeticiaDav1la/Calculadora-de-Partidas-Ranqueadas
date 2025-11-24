let jogadores = [
  { nome: "Leticia", vitorias: 85, derrotas: 10 },
  { nome: "Arthur", vitorias: 12, derrotas: 4 },
  { nome: "Marina", vitorias: 52, derrotas: 20 },
  { nome: "Carlos", vitorias: 110, derrotas: 30 }
];

function calcularNivel(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel = "";

  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldo, nivel };
}

for (let jogador of jogadores) {
  let resultado = calcularNivel(jogador.vitorias, jogador.derrotas);
  console.log(
    `O Herói ${jogador.nome} tem saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`
  );
}
