export class User {
  constructor(public email: string, private senha: string) {}

  validarSenha(senhaDigitada: string): boolean {
    return this.senha === senhaDigitada;
  }
}
