function hogwarts() {
    let nome = document.getElementById("nome").value
    console.log(nome)
    switch (nome) {
        case 'Sibila Trelawney':
            console.log('Corvinal');
            break;
        case 'Cho Chang':
            console.log('Corvinal');
            break;
        case 'Peter Pettigrew':
            console.log('Grifinoria');
            break;
        case 'Ninfadora Tonks':
            console.log('Lufa-Lufa');
            break;
        case 'Narcisa Malfoy':
            console.log('Sonserina');
            break;
        default:
            console.log('Nome ' + nome + ' desconhecido');
    }
}

function calculadora(n1, n2) {
    n1 = parseInt(document.getElementById("n1").value)
    n2 = parseInt(document.getElementById("n2").value)
    calc = document.getElementById("calc").value

    switch (calc) {
        case "+":
            let soma = n1 + n2
            console.log("Resultado: " + soma)
            break;
        case "-":
            let subtracao = n1 - n2
            console.log("Resultado: " + subtracao)
            break;
        case "*":
            let multiplicacao = n1 * n2
            console.log("Resultado: " + multiplicacao)
            break;
        case "/":
            let divisao = n1 / n2
            console.log("Resultado: " + divisao)
            break;
        default:
            console.log('Número inválido');
    }
}
function troca1() {
    document.getElementById("calc").value = "+"
}
function troca2() {
    document.getElementById("calc").value = "-"
}
function troca3() {
    document.getElementById("calc").value = "*"
}
function troca4() {
    document.getElementById("calc").value = "/"
}



