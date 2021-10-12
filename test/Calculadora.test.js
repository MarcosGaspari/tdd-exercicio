const { expect } = require('@jest/globals');
const Calculadora = require('../lib/Calculadora');

describe('Calcula Salario', () =>{
    test('Teste desenvolvedor', () => {
        const res = Calculadora("Marcos Henrique", "marcos@hotmail.com",2.500,"Desenvolvedor");
        expect(res).toBe(2.250);
    });
    test('Teste DBA', () => {
        const res = Calculadora("Carlos Henrique", "carlos@hotmail.com",2.200,"DBA");
        expect(res).toBe(1.6500000000000001);
    });
    test('Teste TESTADOR', () => {
        const res = Calculadora("Carlos Marcos", "carlosmarcos@hotmail.com",1.900,"DBA");
        expect(res).toBe(1.615);
    });
});