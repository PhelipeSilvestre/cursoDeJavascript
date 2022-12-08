function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 50000, desc: 0.20 }
// no caso do call os parametros são passados diretos na função
console.log(getPreco.call(carro))
console.log(getPreco.apply())
// enquanto no apply os parametros vão direto no array
console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(carro[0.17, '$']))