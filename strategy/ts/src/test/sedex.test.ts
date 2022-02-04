import { Jadlog } from "../servicos/envios/jadlog";
import { Sedex } from "../servicos/envios/sedex";

var expect    = require("chai").expect;
describe("Sedex Test", function() {
    describe("Calcular", function() {
      it("Deve retornar 0,6 quanto o peso for 1", function() {
            const sedex = new Sedex();
            const valorDoEnvio = sedex.calcular(1);
            expect(valorDoEnvio).to.equal(0.6);
      });
    });
});