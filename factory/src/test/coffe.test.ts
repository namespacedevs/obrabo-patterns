import { Coffe } from "../coffe";

const expect    = require("chai").expect;
describe("Coffe", function() {
    describe("Boil", function(){
        it("Should be set watterIsHot to true", function() {
            const coffe = new Coffe('Café Viana', 'Extra Forte');
            coffe.boil();
            expect(coffe.watterIsHot).to.equal(true);
        });
    })
    describe("addCoffe", function(){
        it("Should be add coffe in the water ", function() {
            const coffe = new Coffe('Café Viana', 'Extra Forte');
            expect( coffe.addCoffe()).to.equal(true);
        });
    })
});