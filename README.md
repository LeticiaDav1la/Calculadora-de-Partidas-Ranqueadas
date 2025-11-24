# 🧮 Calculadora de Partidas Rankeadas

**Desafio do curso Fundamentos de Lógica de Programação – DIO**

## 📌 Sobre o Desafio

Este repositório contém a resolução do desafio "Calculadora de Partidas Rankeadas", proposto pela plataforma Digital Innovation One (DIO).
O objetivo é praticar lógica de programação utilizando variáveis, operadores, funções, condicionais e loops, construindo assim uma lógica simples porém essencial para quem está iniciando.



## 🎯 Objetivo

Criar uma função capaz de receber o número de vitórias e derrotas de um jogador e calcular seu saldo de partidas.
Com base nesse valor, o sistema deve classificar o jogador em um nível ranqueado, conforme tabela abaixo:

| Número de Vitórias  | Nível |
| ------------- | ------------- |
|< 10	|Ferro|
|11–20	|Bronze|
|21–50	|Prata|
|51–80	|Ouro|
|81–90	|Diamante|
|91–100	|Lendário|
|≥ 101	|Imortal|


**O saldo deve ser calculado como:**
```
saldo = vitórias - derrotas
```

## 🧠 Tecnologias e conceitos utilizados

- Variáveis

- Operadores aritméticos

- Estruturas de decisão (if/else)

- Funções

- Laço de repetição (for para percorrer jogadores)


## 🖥️ Trecho do Código Utilizado
``` JavaScript
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
```
## 🖨️ Saída esperada

**Ao final, o programa deve exibir:**
```
O Herói <nome> tem saldo de <saldoVitorias> e está no nível de <nivel>
```


## 🏆 Resultado Final

**Este projeto reforça conceitos essenciais de programação e pode ser expandido com:**

- Entrada de dados pelo terminal

- Validação de valores

- Ranking visual

- Interface gráfica futuramente
