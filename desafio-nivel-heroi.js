// Insira o seu nome na entrada abaixo 
let nomeHeroi = "SEU NOME AQUI"

// Insira o valor num�rico dos seus pontos de experi�ncia (XP) na entrada abaixo
let xp = 0


let nivelHeroi

if (xp <= 1000){
  nivelHeroi = "Ferro"
} else if ((xp > 1000) && (xp <= 2000)){
  nivelHeroi = "Bronze"
} else if ((xp > 2000) && (xp <= 5000)){
  nivelHeroi = "Prata"
} else if ((xp > 5000) && (xp <= 7000)){
  nivelHeroi = "Ouro"
} else if ((xp > 7000) && (xp <= 8000)){
  nivelHeroi = "Platina"
} else if ((xp > 8000) && (xp <= 9000)){
  nivelHeroi = "Ascendente"
} else if ((xp > 9000) && (xp <= 10000)){
  nivelHeroi = "Imortal"
} else if ((xp > 10000) && (xp <= 20000)){
  nivelHeroi = "Radiante"
} else if (xp > 20000){
  nivelHeroi = "Supernova"
}

mensagemSaida = "O Her�i de nome " + nomeHeroi + " est� no n�vel " + nivelHeroi

for (let i = 1; i <= 10; i++){
  console.log(mensagemSaida)
}
