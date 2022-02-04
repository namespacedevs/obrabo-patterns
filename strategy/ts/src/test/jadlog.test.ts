import { Jadlog } from "../servicos/envios/jadlog";

var expect    = require("chai").expect;
describe("Jadlog Test", function() {
    describe("Calcular", function() {
      it("Deve retornar 0,3 quanto o peso for 1", function() {
            const valorDoEnvio = Jadlog.calcular(1);
            expect(valorDoEnvio).to.equal(0.3);
      });
    });
});