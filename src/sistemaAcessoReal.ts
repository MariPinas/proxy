import { ISystemAccess } from "./iSistemaAcesso";

export class RealSystemAccess implements ISystemAccess {
  accessResource(): void {
    console.log(">> Recurso protegido acessado com sucesso!");
  }
}
