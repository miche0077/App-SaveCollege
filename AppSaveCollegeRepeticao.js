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



let soma = 0;
student.forEach((math)=>{
  soma = soma + math.mathematics
  console.log(soma) 
})

let div = soma / student.length
console.log(`A nota media é ${div}`)

student.forEach((students)=>{
if(students.mathematics >= 7){
  console.log(`O Aluno ${students.name} passou com uma media de ${div}`)
}else{
  console.log(`O Aluno ${students.name} infelizmente não passou`)
}
});