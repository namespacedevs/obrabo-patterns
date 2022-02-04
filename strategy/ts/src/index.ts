import { Sedex } from "./servicos/envios/sedex";
import { FreteServico } from "./servicos/frete.servico";

console.log('[strategy] aplicação iniciado com sucesso!');
const servico = new FreteServico(new Sedex());
const valorDoFrete = servico.calcula(1);
console.log('Valor do frete: ',valorDoFrete,'R$');