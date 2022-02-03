import { CafeInterface } from "./cafe.interface";

export class Cappucino implements CafeInterface{
    pronto: boolean = false;
    preparar(): string {
        const mensagemDeRetorno = `Seu ${Cappucino.name} está pronto!`
        console.log('Modo de Preparo: \n');
        console.log('Misture no liquidificador o leite em pó e o café solúvel (para triturar o café). \n');
        console.log('Coloque a mistura em um recipiente com tampa e acrescente os outros ingredientes. \n');
        console.log('Agite vigorosamente o recipiente até que a mistura esteja homogênea \n');
        console.log(mensagemDeRetorno);
        this.pronto = true;
        return mensagemDeRetorno;
    }
}