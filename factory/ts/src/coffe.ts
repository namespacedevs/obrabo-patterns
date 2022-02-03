import { CoffeInterface } from "./coffe.interface";

export class Coffe implements CoffeInterface{
    make(): Coffe {
        return new Coffe();
     }
}