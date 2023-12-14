alert('Olá mundo');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 110;

//para cada numero alterado
>>>>>>> origin

// enquanto chute não for igualç ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`escolha um número entre 1 e ${numeroMaximo}`);
// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    break;
} else {
    if (chute > numeroSecreto) {alert(`O número secreto é menor ${chute}`);
} else { alert(`O número secreto é maior que ${chute}`);}
tentativas++;
}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


//if (tentativas > 1) {
//    alert(`isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {alert(`isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);}
