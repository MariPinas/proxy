// src/proxy.ts
import { ISystemAccess } from "./iSistemaAcesso";
import { RealSystemAccess } from "./sistemaAcessoReal";
import { User } from "./user";

// Banco fake com instâncias da classe User
const fakeDB: User[] = [
  new User("mari@email.com", "123456"),
  new User("renan@dev.com", "abc123"),
  new User("ruhan@aluno.com", "12345*"),
];

export class SystemAccessProxy implements ISystemAccess {
  private realAccess: RealSystemAccess;

  constructor() {
    this.realAccess = new RealSystemAccess();
  }

  private autenticar(email: string, senha: string): boolean {
    const user = fakeDB.find((u) => u.email === email);
    return user ? user.validarSenha(senha) : false;
  }

  accessResource(): void {
    console.log("Voce precisa logar antes de acessar o sistema!");
  }

  loginEAccessar(email: string, senha: string): void {
    if (this.autenticar(email, senha)) {
      console.log("Login bem-sucedido! >> Acesso liberado.");
      this.realAccess.accessResource();
    } else {
      console.log("Email ou senha inválidos. >> Acesso negado.");
    }
  }
}
