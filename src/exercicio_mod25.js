const alunos = [
    {nome: 'Gustavo', nota: 90},
    {nome: 'Julia', nota: 80},
    {nome: 'Paula', nota: 95},
    {nome: 'Vagner', nota: 55},
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 60);

console.log(alunosAprovados);
