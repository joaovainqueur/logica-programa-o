let nota1 = 7.0
let nota2 = 9.5
let notarec = 5.0

let media = (nota1 + nota2) / 2;
let notatt = (media + notarec) / 2;
let nota = (media + notatt) / 2;

console.log("resultado: ", media)
console.log("notatotal: ", notatt)
console.log("nota da recuperação: ", notarec)
console.log("valor real nota: ", nota)

if (media >= 7.0){
    console.log("aluno aprovado")
}else if (notatt >=6.0){
    console.log("aprovado pela nota da rec")
}else 
    console.log ("reprovado")
