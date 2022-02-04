import { Fedex } from "../servicos/envios/fedex";

var expect    = require("chai").expect;
describe("Fedex Test", function() {
    describe("Calcular", function() {
      it("Deve retornar 0,2 quanto o peso for 1", function() {
            const valorDoEnvio = Fedex.calcular(1);
            expect(valorDoEnvio).to.equal(0.2);
      });
    });
});