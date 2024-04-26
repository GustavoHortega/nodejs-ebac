const {novaListaCarros} = require("./exCarros");

const rodizio = (diaSemana) =>{
    let rodizio = [];
    switch (diaSemana) {
        case 0: //Domingo
        case 6: //Sabado 
            break;
        case 1: //Segunda
            rodizio = novaListaCarros.filter(carro => carro.placa.endsWith('1') || carro.placa.endsWith('2'));
            break;
        case 2: //Terça
            rodizio = novaListaCarros.filter(carro => carro.placa.endsWith('3') || carro.placa.endsWith('4'));
            break;
        case 3: //Quarta
            rodizio = novaListaCarros.filter(carro => carro.placa.endsWith('5') || carro.placa.endsWith('6'));
            break;
        case 4: //Quninta
            rodizio = novaListaCarros.filter(carro => carro.placa.endsWith('7') || carro.placa.endsWith('8'));
            break;
        case 5: //Sexta
            rodizio = novaListaCarros.filter(carro => carro.placa.endsWith('9') || carro.placa.endsWith('0'));
            break;
        default:
            console.log("Dia invalido!");
            break;
    }
    return rodizio;
}

let contadorDia = 0;
while(contadorDia <= 6){
    console.log("No dia ", contadorDia, " da semana, os veículos de rodízio são: ", rodizio(contadorDia));
    contadorDia += 1;
}