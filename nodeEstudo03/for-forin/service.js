const axios = require('axios')
const URL = 'https://swapi.co/api/people'

async function obterPessoas(nome){
    const url=`${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

// obterPessoas('r2')
//     .then(function (resultado){
//         console.log('resultado', resultado)
//     })
//     .catch(function(error){
//         console.error('Deu ruim', error)
// })

//exportando o modulo
module.exports ={
    //se a chave do objeto for a mesma do valor nao e necessario passar o valor
    // assim obterPessoas seria o suficiente para exportar o modulo
    
    //obterPessoas: obterPessoas
    obterPessoas
}