import * as readline from "readline-sync";
import { SystemAccessProxy } from "./proxy";

const proxy = new SystemAccessProxy();

while (true) {
  console.log("\n====== Sistema de Login ======");

  const email = readline.question(
    "Digite seu email (ou 'sair' para encerrar): "
  );

  if (email.toLowerCase() === "sair") {
    console.log("Saindo do sistema...");
    break;
  }
  if (!email.includes("@")) {
    console.log("Email invalido! Tente novamente.");
    continue;
  }

  const senha = readline.question("Digite sua senha: ", { hideEchoBack: true });

  proxy.loginEAccessar(email, senha);
}
