import { EstrategiaInterface } from "./estrategia.interface";

export class Fedex implements EstrategiaInterface {
    calcular(peso: number): number {
        return peso * 0.2;
    }
}