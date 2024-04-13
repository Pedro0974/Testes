import { Vetor } from "../src/Vetor"

describe('Testando os metodos do vetor', () => {
    let vetor: Vetor;
    beforeEach(() => {
        vetor = new Vetor();
    });
    it('somar os valores dos elementos do vetor', () => {
        vetor.adicionar(7)
        vetor.adicionar(3)
        vetor.adicionar(5)
        vetor.adicionar(9)
        expect(vetor.somarVetor()).toBe(24)
    });
    it('buscar o maior valor do array', () => {
        vetor.adicionar(7)
        vetor.adicionar(3)
        vetor.adicionar(5)
        vetor.adicionar(9)
        vetor.adicionar(1)
        vetor.adicionar(20)
        expect(vetor.buscarMaior()).toBe(20)
    });
    it('buscar o valor medio do vetor', () => {
        vetor.adicionar(7)
        vetor.adicionar(3)
        vetor.adicionar(5)
        vetor.adicionar(9)
        vetor.adicionar(1)
        vetor.adicionar(20)
        expect(vetor.buscarMedia()).toBe(7.5)
        expect(vetor.buscarMedia()).not.toBe(7)
    })

})

