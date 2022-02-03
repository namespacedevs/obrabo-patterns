import { CafeInterface } from "../cafe.interface";

export interface CafeFactoryInterface{
    criar(): CafeInterface;
}