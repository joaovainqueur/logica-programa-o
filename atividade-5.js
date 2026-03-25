
let consumokwh = 800

let consumoalto = consumokwh*0.90
let consumomedio = consumokwh*0.75
let consumobaixo = consumokwh*0.60

if ( consumoalto > 200 ) {
    console.log("consumo alto: ", consumoalto)
    console.log("consumo acima de 200")
} else if ( consumomedio >= 101) {
    console.log("consumo medio: ", consumomedio)
    console.log("consumo entre 101 e 200")
} else if ( consumobaixo <= 100) {
    console.log("consumo minimo: ", consumobaixo)
    console.log("consumo abaixo de 100")
} else 
    console.log("sem consumo")