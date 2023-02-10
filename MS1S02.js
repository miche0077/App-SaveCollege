var student = [
    {
      name: "Gabriel",
      height: 1.56,
      sex: "masculino",
      room: "trindade",
      age: 16,
      mathematics: 7
    },
    {
      name: "Mariana",
      height: 1.7,
      sex: "feminino",
      room: "trindade",
      age: 26,
      mathematics : 8
    },
    {
      name: "Andressa",
      height: 1.6,
      sex: "feminino",
      room: "trindade",
      age: 24,
      mathematics: 10
    },
    {
      name: "Xavier",
      height: 1.69,
      sex: "masculino",
      room: "trindade",
      age: 17,
      mathematics: 5
    },
    {
      name: "alex",
      height: 1.75,
      sex: "masculino",
      room: "trindade",
      age: 27,
      mathematics: 7
    },
  ];
  
let notas = (student[0].mathematics + student[1].mathematics + student[2].mathematics + student[3].mathematics + student[4].mathematics);
let media = notas / 5

console.log(media);