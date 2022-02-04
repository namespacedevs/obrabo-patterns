import { EstrategiaInterface } from "./estrategia.interface";

export class Sedex implements EstrategiaInterface{
    calcular(peso: number): number{
        return peso * 0.6;
    }
}