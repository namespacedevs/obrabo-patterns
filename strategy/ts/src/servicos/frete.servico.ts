import { EstrategiaInterface } from "./envios/estrategia.interface";
import { Sedex } from "./envios/sedex";
export class FreteServico{
    constructor(private servico: EstrategiaInterface) { }
    calcula(peso: number){
        return this.servico.calcular(peso);
    }
    definirEnvio(servico: EstrategiaInterface) :void{
        this.servico = servico;
    }
}