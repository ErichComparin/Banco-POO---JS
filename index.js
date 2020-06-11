import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// Como criar o package.json via NPM:
// npm init
// package.json: add ', "type": "module"'

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1002);

conta1.depositar(500);
conta1.transferir(200, conta2);
conta2.sacar(100);

console.log("Número de contas: ", ContaCorrente.numeroDeContas, "\n");
console.log("Conta 1: ", conta1, "\n");
console.log("Conta 2: ", conta2, "\n");
