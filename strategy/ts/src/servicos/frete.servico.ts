import { EstrategiaInterface } from "./envios/estrategia.interface";
export class FreteServico{
    constructor(private servico: EstrategiaInterface) { }
    calcula(peso: number){
        return this.servico.calcular(peso);
    }
}