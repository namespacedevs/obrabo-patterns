import { Jadlog } from "./envios/jadlog";
import { Sedex } from "./envios/sedex";
import { Fedex } from "./envios/fedex";
export class FreteServico{
    calcula(servico: string, peso: number){
        if(servico === 'sedex') return Sedex.calcular(peso);
        if(servico === 'jadlog') return Jadlog.calcular(peso);
        if(servico === 'sedex') return Fedex.calcular(peso);
        throw 'Ops! o serviço que você esta tentando consumir não existe.';
    }
}