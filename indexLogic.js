// Crear una funcion que reciba un numero e imprima los numeros desde cero hasta el numero indicado
//   - cuando un numero sea divisible por 3 se remplazara por la palabra Fizz
//   - cuando un numero sea divisible por 5 se remplazara por la palabra Buzz
//   - cuando un numero sea divisible por 3 y 5 se remplazara por la palabra fizzbuzz

function task (n) {
    for (let index = 1; index <= n; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            console.log('fizzbuzz');
        }
        else if (index % 5 == 0) {
            console.log('buzz');
        }
        else if (index % 3 == 0) {
            console.log('fizz');
        }
        else
        console.log(index);
    }
}