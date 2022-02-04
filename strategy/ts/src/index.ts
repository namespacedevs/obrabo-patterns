import { FreteServico } from "./servicos/frete.servico";

console.log('[strategy] aplicação iniciado com sucesso!');

const service = new FreteServico();
const valorDoFrete = service.calcula('sedex', 1);
console.log('Valor do frete: ',valorDoFrete,'R$');