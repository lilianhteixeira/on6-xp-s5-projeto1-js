console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database');
const readline = require('readline-sync');

const {produtos} = db;

produtos.sort((a,b) => a.preco - b.preco);
console.table(produtos);

const carrinhoCompras = [];

class Pedido {
    constructor(carrinhoCompras) {
        this.productos = carrinhoCompras;
        this.data = new Date();
        this.subtotal = 0;
    }
    calcularSubtotal() {
        this.subtotal = this.productos.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0);
    }

}

let comprar = 'Sim';

do {

    const idProdutos = parseInt(readline.question("Informe o ID do produto desejado: "));
    const quantidade = parseInt(readline.question("Informe a quantidade do produto desejado: "));
    const desconto = readline.question("Voce possui cupom de desconto? (Sim/Não)");

    function procurar(produto) {
        return produto.id === idProdutos;
    }

    const produtoEncontrado = produtos.find(procurar);

    if (!produtoEncontrado) {
        return 'Erro. O produto informado não foi encontrado.';
    } else {
        const produtoSolicitado = {
            ...produtoEncontrado,
            quantidade: quantidade
        }
        carrinhoCompras.push(produtoSolicitado);
    }

    const pedido = new Pedido(carrinhoCompras)
    console.table(pedido.productos)

    pedido.calcularSubtotal()

    console.log(`O valor subtotal(sem desconto) do seu pedido é R$${pedido.subtotal.toFixed(2)}`);

    if(desconto.toUpperCase() === "SIM"){

        const cupomDesconto = parseInt(readline.question("Digite o valor do cupom de desconto: "));
        const valorDesconto = (cupomDesconto > 0 && cupomDesconto <= 15) ? pedido.subtotal * (cupomDesconto / 100) : 0;
        console.log('O valor do desconto é de R$', valorDesconto.toFixed(2));
        const valorTotal = pedido.subtotal - valorDesconto;
        console.log('O valor total da sua compra é de R$', valorTotal.toFixed(2));

    }else{
        console.log("Você não possuí cupom de desconto");
        const valorTotal = pedido.subtotal;
        console.log('O valor total da sua compra é de R$', valorTotal.toFixed(2));

    }

    comprar = readline.question('Deseja comprar mais algum item? (Sim/Não)');

    const dia = pedido.data.getDate();
    const mes = pedido.data.getMonth() + 1;
    const ano = pedido.data.getFullYear();
   
    if(comprar.toUpperCase() === "SIM"){
        "";
    }else{
        console.log('A compra foi realizada em ', dia, '/', mes, '/', ano);
    }

} while (comprar.toUpperCase() === 'SIM');
