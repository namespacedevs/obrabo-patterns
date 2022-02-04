import { Fedex } from "../servicos/envios/fedex";
import { Jadlog } from "../servicos/envios/jadlog";
import { Sedex } from "../servicos/envios/sedex";
import { FreteServico } from "../servicos/frete.servico";

var expect    = require("chai").expect;
describe("FreteServico Test", function() {
    
    describe("Calcular [fedex]", function() {
        const servico = new FreteServico(new Fedex());
        it("Deve retornar 0,2 quanto o peso for 1 e o servico for fedex", function() {
            const valorDoEnvio = servico.calcula(1);
            expect(valorDoEnvio).to.equal(0.2);
        });
    });
    describe("Calcular [jadlog]", function() {
        const servico = new FreteServico(new Jadlog());
        it("Deve retornar 0,3 quanto o peso for 1 e o servico for jadlog", function() {
              const valorDoEnvio = servico.calcula(1);
              expect(valorDoEnvio).to.equal(0.3);
        });
      });
    describe("Calcular [sedex]", function() {
        it("Deve retornar 0,6 quanto o peso for 1 e o servico for sedex", function() {
            const servico = new FreteServico(new Sedex());
            const valorDoEnvio = servico.calcula( 1);
            expect(valorDoEnvio).to.equal(0.6);
        });
    });
});