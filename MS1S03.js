
//exercicio 
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
  
  
  
  function mediaAluno(aluno, nota){
      if(nota >= 7 ){
          return ` ${aluno} passou com uma media de ${media}`;
      }else{
          return `o ${aluno} não passou!`
      }
  }
  
  let notas = (student[0].mathematics + student[1].mathematics + student[2].mathematics + student[3].mathematics + student[4].mathematics);
  let media = notas / 5
  
  console.log(media);
  console.log(mediaAluno(student[0].name, student[0].mathematics));
  console.log(mediaAluno(student[1].name, student[1].mathematics));
  console.log(mediaAluno(student[2].name, student[2].mathematics));
  console.log(mediaAluno(student[3].name, student[3].mathematics));
  console.log(mediaAluno(student[4].name, student[4].mathematics));