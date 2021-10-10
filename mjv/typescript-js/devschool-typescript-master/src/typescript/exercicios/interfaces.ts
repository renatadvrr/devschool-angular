// Crie uma interface para representar cada um dos objetos abaixo e coloque o tipo apropriado para cada uma das constantes.
interface Lingugem {
    nome: string;
    tipada: boolean;
}
const linguagem: Lingugem = {
    nome: 'Typescript',
    tipada: true,
}

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    amigos: object;
}
const pessoa: Pessoa = {
    nome: 'Alan',
    sobrenome: 'Jhonnes',
    idade: 31,
    amigos: [
        {
            nome: 'Nathan',
            sobrenome: 'Lima',
            idade: 22,
            amigos: [],
        }
    ]
}


