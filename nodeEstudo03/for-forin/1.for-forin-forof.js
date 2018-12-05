//para importar modulos criados pelo usuario usa-se './nomeDoModulo'
const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []
        //usando o for, forIn e for off para iterar pela lista de nomes e salvar no array names:
        //tempos
        /*
        for: 0.094ms
        forin: 0.023ms
        toutforOff: 0.020ms
        */
        
        console.time('for')
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)

        }
        console.timeEnd('for')

        console.time('forin')
        for (let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin')

        console.time('forOff')
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forOff')

        console.log('names', names)
    }
    catch (error) {
        console.error('error interno', error)
    }
}
main()