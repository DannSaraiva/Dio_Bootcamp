// Criando uma calculadora...
function calculadora() {

    // Recebendo a operação matemática do usuário.
    const operacao = prompt('Escolha uma operação:\n 0 - Soma (+)\n 1 - Subtração (-)\n 2 - Multiplicação (*)\n 3 - Divisão real (/)\n 4 - Divisão inteira (%)\n 5 - Potenciação (**)');


    // Verificando se a operação é válida.
    if (!operacao || operacao >= 6) {
        alert('Erro - Operação inválida');
        calculadora();
    } else {

        // Definindo e atribuindo as variáveis (Somente tipo number).
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // Verificando se as variáveis são válidas.
        if (!n1 || !n2) {
            alert('Erro - Parâmetros inválidos');
            calculadora();
        } else {

            // Definindo as funções da calculadora.
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }

            // Opçao do usuário após realizar sua função.
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra Operação?\n 0 - Sim\n 1 - Não');

                if (opcao == 0) {
                    calculadora();

                } else if (opcao == 1) {
                    alert('Até mais...');

                } else {
                    alert('Digite uma opção valida!');
                    novaOperacao();
                }
            }

        }


        // Estrutura para escolher a opção do cálculo.

        //Estrutura condicional utilizando - (if - else). 
        if (operacao == 0) {
            soma();
        } else if (operacao == 1) {
            subtracao();
        } else if (operacao == 2) {
            multiplicacao();
        } else if (operacao == 3) {
            divisaoReal();
        } else if (operacao == 4) {
            divisaoInteira();
        } else if (operacao == 5) {
            potenciacao();
        }

        //Estrutura condicional utilizando - (switch - case).
        // switch (operacao) {
        //     case 1:
        //         soma();
        //         break;
        //     case 2:
        //         subtracao();
        //         break;
        //     case 3:
        //         multiplicacao();
        //         break;
        //     case 4:
        //         divisaoReal();
        //         break;
        //     case 5:
        //         divisaoInteira();
        //         break;
        //     case 6:
        //         potenciacao();
        //         break;
        // }

    }
}

calculadora();