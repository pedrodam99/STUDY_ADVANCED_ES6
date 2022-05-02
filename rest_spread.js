//jeito antigo utilizando arguments (é uma forma mais declarativa, mais verbosa)
function soma1(){
valorAtual = 0
    for (i in arguments){
        valorAtual += arguments[i]
    }
    return valorAtual
}

// utilizando o REST
// obrigatoriamente precisa estar dentro de uma lista de argumentos
// o prototype dele é um array, ou seja, traz toda os métodos do array junto dele.

function soma2(...args){
    return args.reduce((acc, value) => {
        return acc += value 
    })
}

//Podemos também armazenar resto dos parametros
//lembrando que retorna um array

const resto = (a, b, ...rest) => {
   console.log('parametros que serão utilizados:', a, b)
   console.log('resto', rest)
}

// Utilizando o Spread
// tem a função de quebrar os itens e repassar para algum lugar
// pode ser utilizado em strings, arrays, objects, objetos iteraveis

//No caso da string e do array, estamos jogando oq o resto quebrou dentro de um parametro da função 

function logArgs(...args){
    console.log(args)
}

//string
const str = 'Digital Innovation One'
//transforma um array que armazena cada caracter da string
logArgs(...str)

//array
const arr = [1, 2, 3, 4]
logArgs(...arr)

// o Spread serve também pra contruir arrays, ou clonar
const arr2 = [...arr, 5, 6]
const arr3 = [...arr, ...arr2]
const arrClone = [...arr3]
console.log(arr3)
console.log(arrClone)

//objetos literais
// podem ser usados apenas para construir novos objetos
// para usar o spread fora do Object, só se for um objeto iterável 

// outro ponto é que o spread faz clonagem rasa

const obj1 = {
    teste: 123,
    subObj: {
        teste: 123
    }
}
obj1.teste = 456 

const obj2 = {
    ...obj1,
    teste: 123
}
console.log(obj2)

