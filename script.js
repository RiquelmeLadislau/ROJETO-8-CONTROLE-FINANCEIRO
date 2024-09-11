let options = 0
let money2 = 0
let removedMoney = 0

let money1= parseInt(prompt('Qual a quantia inicial de dinheiro na sua conta?'))

do {
    options = prompt(`Dinheiro: R$${money1}.
    Opções:
    1 - Adicionar dinheiro.
    2 - Remover dinheiro.
    3 - Sair.
   `)

    if (options == '1'){
        money2 = parseInt(prompt('Qual será quantia de dinheiro a ser adicionada?'))
        money1 += money2
    }

    if (options == '2'){
        money2 = parseInt(prompt('Qual será quantia de dinheiro a ser removida?'))
        money1 -= money2
    }
} while ( options != '3' )
    alert('Você decidiu sair!')
