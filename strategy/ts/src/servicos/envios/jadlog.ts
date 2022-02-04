import { EstrategiaInterface } from "./estrategia.interface";

export class Jadlog implements EstrategiaInterface{
    calcular(peso: number): number{
        return peso * 0.3;
    }
}