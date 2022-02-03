import { CafeInterface } from "./cafe.interface";

export class Macchiato implements CafeInterface{
    pronto: boolean = false;
    preparar(): string {
        const mensagemDeRetorno = `Seu ${Macchiato.name} está pronto!`
        console.log('Modo de Preparo: \n');
        console.log('Moa os grãos. \n');
        console.log('Ponha o pó no porta-filtro. \n');
        console.log('Faça um expresso. \n');
        console.log('Vaporize o leite. \n');
        console.log(' Vire o leite sobre o café e sirva a bebida quente. \n');
        console.log(mensagemDeRetorno);
        return mensagemDeRetorno;
    }
}