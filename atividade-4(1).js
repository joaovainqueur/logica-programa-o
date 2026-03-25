let bairro = brotas
let valorpedido = 50
//bairros+frete
let centro = 5
let brotas = 8
let itapoa = 12
let outros = 15
//pedido+frete
let pedidocentro = valorpedido + centro
let pedidobrotas = valorpedido + brotas
let pedidoitapoa = valorpedido + itapoa
let pedidooutros = valorpedido + outros
//pedido e bairros
console.log("valor centro: ", pedidocentro)
console.log("valor brotas: ", pedidobrotas)
console.log("valor itapoa: ", pedidoitapoa)
console.log("valor outros: ", pedidooutros)

if ( valorpedido >= 80.00){
    console.log("frete gratis")
} else 
    console.log("frete")
