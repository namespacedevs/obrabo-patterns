import { Coffe } from "../coffe";

const expect    = require("chai").expect;
const coffeAttributes = {
    name: 'Machiato',
    type: 'torrado'
}

describe("Coffe", function() {
    describe("Boil", function(){
        it("Should be set watterIsHot to true", function() {
            const coffe = new Coffe(coffeAttributes.name, coffeAttributes.type);
            coffe.boil();
            expect(coffe.watterIsHot).to.equal(true);
        });
    })
    describe("addCoffe", function(){
        it("Should be add coffe in the water ", function() {
            const coffe = new Coffe(coffeAttributes.name, coffeAttributes.type);
            coffe.boil();
            expect( coffe.addCoffe()).to.equal(true);
        });
        it("Should be return false if watterIsHot equals false", function() {
            const coffe = new Coffe(coffeAttributes.name, coffeAttributes.type);
            expect( coffe.addCoffe()).to.equal(false);
        });
    })
    describe("waitForPreparationTime", function(){
        it("Should return true when the coffee is ready", function() {
            const coffe = new Coffe(coffeAttributes.name, coffeAttributes.type);
            coffe.boil();
            coffe.addCoffe()
            expect(coffe.waitForPreparationTime()).to.equal(true);
        });
    })
});