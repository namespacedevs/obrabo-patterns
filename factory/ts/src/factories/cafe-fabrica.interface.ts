import { CafeInterface } from "../cafe.interface";

export interface CafeFactoryInterface{
    preparar(): CafeInterface;
}