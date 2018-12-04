/*
Usando  simulacao de :    
00 obter um usuario 
01 obter o numero de telefone de um usuario a partir de um id
02 obter  o endereco do usuario pelo id
*/
// importamos um modulo interno do node.js

const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario(callback){
    //quando der algum problema  => reject(erro)
    //quando Success => resolve
    return new Promise(function resolvePromise(resolve,reject){

    
    setTimeout(function(){
        // return reject(new Error('Deu muito Ruim, mane!'))
        return resolve({
            id: 1,
            nome: "aladin",
            dataNascimento: new Date()
        })
    },1000)

    })
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(()=>{    
            return resolve({ 
                telefone: "1198132154",
                ddd:11
            })
        },2000);
    })
}

function obterEndereco(idUdsuario, callback){
    setTimeout(()=>{
        return callback(null,{
            rua: 'rua a',
            numero: 0 
        })
    },2000)
}

// 1o passo aficionar a palavra async -> automaticamente vai retornar um Primise 
main()
async function main(){
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
         console.log(`
             Nome: ${usuario.nome}
             Telefone: (${telefone.ddd})${telefone.telefone}
             Endereco: ${endereco.rua}, ${endereco.numero}
            `)
        console.timeEnd('medida-promise')
    }

    catch(error){
        console.error('Deu Ruim', error)
    }
}

// const usuarioPromise = obterUsuario()
// //para manipular o sucesso usamos a funcao .then
// //para manipualr erros, usamos o .catch
// // usario -> telefone -> telefone
// usuarioPromise
//     .then(function(usuario){
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result){
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function(resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result){
//             return{
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         });
//     })
//     .then(function (resultado){
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     })
//     .catch(function(erro){
//         console.error('Deu Ruim', erro)
//     })
// function resolverUsuario(erro, usuario){
//     console.log('usuario:', usuario)
// }

//Por Callback
// obterUsuario(function resolverUsuario(error,usuario){
//     //no js : null || "" || 0 === false 
//     if(error){
//         console.error('DEU RUIM em USUARIO', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error('DEU RUIM EM TELEFONE', error)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.error("Deu Ruim em Endereco", error)
//             }
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua},Numero: ${endereco.numero}
//                 Telefone: (${telefone.ddd})${telefone.telefone}
//                 `)
//         })
//     })

// })
// const telefone = obterTelefone(usuario.id)
 
//console.log('usuario', usuario )
//console.log('telefone', telefone)