import { Fedex } from "./servicos/envios/fedex";
import { Jadlog } from "./servicos/envios/jadlog";
import { Sedex } from "./servicos/envios/sedex";
import { FreteServico } from "./servicos/frete.servico";

console.log('[strategy] aplicação iniciada com sucesso!');
const servico = new FreteServico(new Fedex());
const valorFedex = servico.calcula(1);

servico.definirEnvio(new Jadlog());
const valorJadlog = servico.calcula(1);

servico.definirEnvio(new Sedex())
const valorSedex = servico.calcula(1);

console.log('[Fedex] Valor do frete: ', valorFedex,'R$. \n');
console.log('[Jadlog] Valor do frete: ', valorJadlog,'R$. \n');
console.log('[Sedex] Valor do frete: ', valorSedex,'R$. \n');