const { obterPessoas } = require('./service')

async function main() {
    try{
        const{
            results
        } = await obterPessoas('a')
        const familiaLars = results.filter(function(item){
            // por padrao precisa retornar um bool para informar se deve manter ou remover da lista false = remove , true = mantem nao encontrou retorna -1 caso contrario retorna a posicao do array
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
        })
        const names = familiaLars.map((pessoa)=>pessoa.name)
        console.log(names)
    }
    catch(error){
        console.error('deu Ruim', error)
    }
}
main()