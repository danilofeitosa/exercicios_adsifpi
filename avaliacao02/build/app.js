"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const banco_1 = require("./banco");
let input = (0, prompt_sync_1.default)();
let b = new banco_1.Banco();
let opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar       2 - Consultar saldo       3 - Sacar\n' +
        '4 - Depositar       5 - Excluir               6 - Transferir\n' +
        '7 - Totalizações' +
        '0 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "6":
            transferir();
            break;
        //...
    }
    input("\nOperação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = input('Digite o número da conta:');
    let conta;
    conta = new banco_1.Conta(numero, 0);
    b.inserir(conta);
    exibirConta(numero);
}
function exibirConta(numero) {
    console.log(`Número: ${b.consultar(numero).numero} - Saldo: ${b.consultar(numero).saldo}`);
}
function consultar() {
    console.log("\nConsultar conta\n");
    let numero = input('Digite o número da conta:');
    let conta = b.consultar(numero);
    exibirConta(conta.numero);
}
function sacar() {
    let numero = input('Digite o numero da conta: ');
    let valor = parseFloat(input('Digite o valor: '));
    b.sacar(numero, valor);
    exibirConta(numero);
}
function depositar() {
    console.log("\nDepositar em conta\n");
    let numero = input('Digite o número da conta:');
    let valor = parseFloat(input('Digite o valor:'));
    b.depositar(numero, valor);
    exibirConta(numero);
}
function transferir() {
    let contaDebitada = input('Digite a conta que sera debitada: ');
    let contaCreditada = input('Digite a conta que sera creditada: ');
    let valor = parseFloat(input('Digite o valor:'));
    b.transferir(contaCreditada, contaDebitada, valor);
    exibirConta(contaDebitada);
    exibirConta(contaCreditada);
}
//# sourceMappingURL=app.js.map