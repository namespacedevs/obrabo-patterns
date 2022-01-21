import { Coffe } from "./coffe";

export class CoffeFactoy {
    static make(name: string, type: string) : Coffe {
        const coffe = new Coffe(name, type);
        coffe.boil();
        coffe.addCoffe()
        coffe.waitForPreparationTime()
        return coffe;
    }
}