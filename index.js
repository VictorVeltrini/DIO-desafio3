function md10(vitorias, derrotas) {
    const calculo = vitorias - derrotas

    let rank
    if (calculo < 10) {
        rank = 'Ferro'
    } else if (calculo >= 11 && calculo <= 20){
        rank = 'Bronze'
    } else if (calculo >= 21 && calculo <= 50){
        rank = 'Prata'
    } else if (calculo >= 51 && calculo <= 80){
        rank = 'Ouro'
    } else if (calculo >= 81 && calculo <= 90){
        rank = 'Diamante'
    } else if (calculo >= 91 && calculo <= 100){
        rank = 'Lendário'
    } else {
        rank = 'Imortal'
    }
    return { calculo, rank }
}

let vitorias = 10
let derrotas = 5

let resultado = md10(vitorias, derrotas)

console.log(`Seu saldo foi ${resultado.calculo} está no rank de ${resultado.rank} agora vc ira executar o treinamento`)

while (resultado.rank !== 'Imortal') {
    console.log(`Vitórias: ${vitorias}, Rank: ${resultado.rank}`)
    vitorias += 20
    derrotas += 2
    resultado = md10(vitorias, derrotas)
}

console.log(`O Herói tem de saldo de ${resultado.calculo} está no rank de ${resultado.rank}`)