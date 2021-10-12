const { expect } = require('@jest/globals');
const Calculadora = require('../lib/calculadora');

describe('Calculo DESENVOLVEDOR', () =>{
    test('Teste desenvolvedor', () => {
        const res = Calculadora("Marcos Henrique", "marcos@hotmail.com",2.500);
        expect(res).toBe(2.250);
    });
});