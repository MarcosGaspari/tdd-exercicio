function Calculadora(nome,email,salario,cargo){    
    if (cargo == 'Desenvolvedor')
        if (salario >= 3.000)
            return salario - (salario/100 * 20);
        else 
            return salario - (salario/100 * 10);
    else
        return salario - (salario/100 * 25);
}
module.exports = Calculadora;