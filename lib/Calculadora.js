function Calculadora(nome,email,salario,cargo){    
    if (cargo == 'Desenvolvedor')
        if (salario >= 3.000)
            return salario - (salario/100 * 20);
        else 
            return salario - (salario/100 * 10);
    if (cargo == 'DBA')
        if (salario >= 2.000)
            return salario - (salario/100 * 25);
        else 
            return salario - (salario/100 * 15);
}
module.exports = Calculadora;