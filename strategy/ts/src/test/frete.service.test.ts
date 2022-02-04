import { Jadlog } from "../servicos/envios/jadlog";
import { FreteServico } from "../servicos/frete.servico";

var expect    = require("chai").expect;
describe("FreteServico Test", function() {
    const servico = new FreteServico();
    describe("Calcular [fedex]", function() {
      it("Deve retornar 0,2 quanto o peso for 1 e o servico for fedex", function() {
            const valorDoEnvio = servico.calcula('fedex', 1);
            expect(valorDoEnvio).to.equal(0.2);
      });
    });
    describe("Calcular [jadlog]", function() {
        it("Deve retornar 0,3 quanto o peso for 1 e o servico for jadlog", function() {
              const valorDoEnvio = servico.calcula('jadlog', 1);
              expect(valorDoEnvio).to.equal(0.3);
        });
      });
      describe("Calcular [sedex]", function() {
        it("Deve retornar 0,6 quanto o peso for 1 e o servico for sedex", function() {
              const valorDoEnvio = servico.calcula('sedex', 1);
              expect(valorDoEnvio).to.equal(0.6);
        });
      });
});