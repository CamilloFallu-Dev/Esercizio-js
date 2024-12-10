const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

//stampa i nomi degli studenti
studenti.forEach((studenti) => {
  console.log(studenti.nome);
});

//trovare UNO studente con un voto superiore a 90
const studenteSopraIlNovanta = studenti.find((studenti) => studenti.voto >= 90);
console.log(studenteSopraIlNovanta);

//calcolare la media dei voti degli studenti
const sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);
const mediaVoti = sommaVoti / studenti.length;
console.log(mediaVoti);

// creare un nuovo array contente i nomi degli stuedenti in maiuscolo
const nomiMaiuscolo = studenti.map((studente) => studente.nome.toUpperCase());
console.log(nomiMaiuscolo);

// trovare gli studenti con voti superiori a 85
const studentiSopraAOttantacinque = studenti.filter(
  (studente) => studente.voto > 85
);
console.log(studentiSopraAOttantacinque);
