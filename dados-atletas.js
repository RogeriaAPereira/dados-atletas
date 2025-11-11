// Classe Atleta - versão funcional que processa uma lista de atletas e imprime
// nome, notas (no mesmo formato do enunciado) e média válida (sem maior e menor).
class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  // Categoria (mantive do exemplo original)
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) return "Infantil";
    if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
    if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
    if (this.idade >= 16 && this.idade <= 30) return "Adulto";
    return "Sem categoria";
  }

  // IMC (seguro)
  calculaIMC() {
    if (!this.altura || this.altura <= 0) return null;
    return this.peso / (this.altura * this.altura);
  }

  // Calcula a média válida:
  // - usa uma cópia das notas e ordena numericamente
  // - descarta o menor e o maior
  // - retorna a média das notas do meio
  calculaMediaValida() {
    if (!Array.isArray(this.notas) || this.notas.length < 3) return null;

    // cópia e ordenação numérica
    const notasOrdenadas = [...this.notas].sort((a, b) => a - b);

    // pega as notas do meio (elimina menor e maior)
    const notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

    const soma = notasValidas.reduce((acc, n) => acc + n, 0);
    return soma / notasValidas.length;
  }

  // Retorna as notas no formato "Notas Obtidas" parecido com o enunciado.
  // Observação: o enunciado original parece ter usado sort() padrão (lexicográfico)
  // para exibir as notas — isto faz "10" aparecer antes de "8", por exemplo.
  // Para replicar exatamente o formato do enunciado, imprimimos uma cópia das notas
  // usando sort() sem comparator (comportamento lexicográfico).
  notasParaExibicao() {
    return [...this.notas].sort().join(',');
  }
}

// Função utilitária para formatar a média de forma legível:
// - se for inteiro, imprime sem casas decimais: "9"
// - se couber exatamente em 2 casas (ex.: 9.11) imprime 2 casas: "9.11"
// - caso contrário, imprime até 6 casas significativas, removendo zeros finais.
// (Essa regra busca produzir saídas semelhantes às do exemplo; ajuste se quiser outra formatação.)
function formataMedia(num) {
  if (num === null || num === undefined) return 'N/A';
  if (Number.isInteger(num)) return String(num);
  // verifica se com 2 casas volta ao mesmo número (ex.: 9.11)
  if (parseFloat(num.toFixed(2)) === num) return num.toFixed(2);
  // usa 6 casas como padrão e remove zeros finais
  let s = num.toFixed(6);
  s = s.replace(/(\.\d*?[1-9])0+$/, '$1'); // remove zeros à direita
  s = s.replace(/\.0+$/, ''); // remove .0 final
  return s;
}

// ==================== Uso com a entrada do enunciado ====================
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// Converte cada objeto em uma instância de Atleta e imprime as informações
for (let i = 0; i < atletas.length; i++) {
  const obj = atletas[i];
  const atleta = new Atleta(obj.nome, obj.idade || null, obj.peso || null, obj.altura || null, obj.notas);

  const mediaValida = atleta.calculaMediaValida();
  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas Obtidas: ${atleta.notasParaExibicao()}`);
  console.log(`Média Válida: ${formataMedia(mediaValida)}`);
  console.log(''); // linha em branco entre atletas
}

/*
Saída esperada (aproximação):
Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.833333
*/
