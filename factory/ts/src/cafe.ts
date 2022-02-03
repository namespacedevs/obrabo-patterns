import { CoffeInterface } from "./cafe.interface";

export class Cafe implements CoffeInterface{
    preparar(): void {
        throw new Error("Method not implemented.");
    }
}