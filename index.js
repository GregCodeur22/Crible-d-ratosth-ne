// Cet algorithme imaginé par Ératosthène (un savant grec antique) permet de trouver tous les nombres premiers inférieurs à un certain nombre. Un nombre premier est un nombre qui n'est divisible que par 1 et lui-même, comme 5, 7 ou 31. Nous allons implémenter pas à pas son algorithme :

const limit = Number(prompt("Entrer la limite du crible"));

// Liste des premiers nombres entiers jusqu'à limit
const L = [];
for (let i = 2; i <= limit; i++) {
  L.push(i);
}
const primeNumbers = [];

while (L.length > 0) {
  primeNumbers.push(L[0]);
  i = 1;
}
while (i < L.length) {
  if (L[i] % L[0] === 0) {
    L.splice(i, 1);
  } else {
    i++;
  }
  L.splice(0, 1);
}

console.log(primeNumbers);
