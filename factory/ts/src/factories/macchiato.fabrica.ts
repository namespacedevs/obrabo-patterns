import { CafeInterface } from "../cafe.interface";
import { Macchiato } from "../macchiato";

import { CafeFactoryInterface } from "./cafe-fabrica.interface";

export class MacchiatoFabrica implements CafeFactoryInterface{
    preparar(): CafeInterface {
       const machiato = new Macchiato();
       machiato.preparar();
       return machiato;
    }
}