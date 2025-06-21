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
      '"Faça a pessoa que você gosta se sentir especial ao invés de só mais uma."',
      '"Um ato aleatório de bondade, por menor que seja, pode ter um tremendo impacto na vida de outra pessoa." ',
      '"De todos os animais selvagens, o homem é o mais difícil de domar."',
      '"Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta."',
      '"O amor é a força mais abstrata, e também a mais potente que há no mundo."',
      '"Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro."',
      '"Se essa mensagem apareceu no seu fyp +90000 aura, se voce recebeu do seu amigo essa mensagem -90000 aura"',
      '"Aprendemos a voar como os pássaros e a nadar como os peixes, mas não aprendemos a conviver como irmãos."',
      '"Somos feitos de carne, mas temos de viver como se fôssemos de ferro."',
      '"Nas palmas de tuas mãos leio as linhas da minha vida."',
    ];
    const index = Math.floor(Math.random() * frasesEngracadas.length);
    return frasesEngracadas[index];
  }
}
