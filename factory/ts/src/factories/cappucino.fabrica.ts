import { CafeInterface } from "../cafe.interface";
import { Cappucino } from "../cappucino";
import { CafeFactoryInterface } from "./cafe-fabrica.interface";

export class CappucinoFabrica implements CafeFactoryInterface{
    criar(): CafeInterface {
       const cappucino = new Cappucino();
       cappucino.preparar();
       return cappucino;
    }
}