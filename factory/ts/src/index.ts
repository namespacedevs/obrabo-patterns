import { Cappucino } from "./cappucino";
import { CappucinoFabrica } from "./factories/cappucino.fabrica";
import { MacchiatoFabrica } from "./factories/macchiato.fabrica";
import { Macchiato } from "./macchiato";

const cappucino = new Cappucino();
cappucino.preparar();

const macchiato = new Macchiato();
macchiato.preparar();

const cappucinoFabrica = new CappucinoFabrica();
const cappucino1 = cappucinoFabrica.criar();

console.log(cappucino1);

const macchiatoFabrica = new MacchiatoFabrica();
const macchiato1 = macchiatoFabrica.criar();

console.log(macchiato1);