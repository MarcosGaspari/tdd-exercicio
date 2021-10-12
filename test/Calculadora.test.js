const { expect } = require('@jest/globals');
const Calculadora = require('../lib/calculadora');

describe('Calcula Salario', () =>{
    test('Teste desenvolvedor', () => {
        const res = Calculadora("Marcos Henrique", "marcos@hotmail.com",2.500,"Desenvolvedor");
        expect(res).toBe(2.250);
    });
    test('Teste DBA', () => {
        const res = Calculadora("Carlos Henrique", "carlos@hotmail.com",2.200,"DBA");
        expect(res).toBe(1.650);
    });
});