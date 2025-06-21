import { ISystemAccess } from "./iSistemaAcesso";

export class RealSystemAccess implements ISystemAccess {
  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  accessResource(): void {
    console.log(">> Recurso protegido acessado com sucesso!");
    console.log(this.getFraseAleatoria());
  }

  getFraseAleatoria(): string {
    const frasesEngracadas = [
      "Que o Sigma te abençoe",
      "Acesso liberado, mas cuidado pra não tomar ratio no debug",
      "Bem-vindo(a), Ohio coder, só não deixa o código dar backflip no scope",
      "Sistema ON, vai codar ou só ficar no Rizzler mode?",
      "Autenticado, meu consagrado, hora de dropar bugs e gritar receba",
      "Los tralaleritos dizem ?",
      "Se essa mensagem apareceu no seu fyp +90000 aura, se voce recebeu do seu amigo essa mensagem -90000 aura",
    ];
    const index = Math.floor(Math.random() * frasesEngracadas.length);
    return frasesEngracadas[index];
  }
}
