let valor = 2000
let desconto1 = 5
let desconto2 = 10
let desconto3 = 15
//calculos
console.log("__________________________________________________")
let valored1 = valor*0.05
let valored2 = valor*0.10
let valored3 = valor*0.15
//descontos aplicados
console.log("__________________________________________________")
console.log("valor do desconto com valor de 100 a 299.99: ", valored1)
console.log("valor do desconto com valor de 300 a 499.99: ", valored2)
console.log("valor do desconto com valor >= a 500: ", valored3)
//saber se o desconto foi aplicado
console.log("__________________________________________________")
if (valor >= 100) 
    console.log("desconto aprovado")
else 
    console.log("desconto recusado")

let valortt = valor-valored1
let valortt2 = valor-valored2
let valortt3 = valor-valored3
//valor com desconto
console.log("__________________________________________________")
console.log("valor real com desconto aplicado na compra de 100 a 299.99: ", valortt)
console.log("valor real com desconto aplicado na compra de 300 a 499.99: ", valortt2)
console.log("valor real com desconto aplicado na compra >= a 500: ", valortt3)