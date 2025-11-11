# dados-atletas
 🏋️‍♀️ Projeto: Dados dos Atletas

📘 Resumo do Projeto

Aplicação desenvolvida em JavaScript para receber informações de atletas, calcular parâmetros e exibi-los de forma clara ao usuário.
O sistema retorna categoria, IMC (Índice de Massa Corporal) e média válida das notas, desconsiderando a maior e a menor nota.

🎯 Objetivo

Criar uma classe Atleta que:

Armazene os dados do atleta;

Calcule e retorne:

Categoria conforme a idade;

IMC com base em peso e altura;

Média válida das notas (ignorando extremos).

🧩 Especificações da Classe
🔹 Atributos

nome

idade

peso

altura

notas

🔹 Métodos
| Método                 | Descrição                                |
| ---------------------- | ---------------------------------------- |
| `calculaCategoria()`   | Determina a categoria do atleta          |
| `calculaIMC()`         | Calcula o índice de massa corporal       |
| `calculaMediaValida()` | Calcula a média sem a maior e menor nota |
| `obtemNomeAtleta()`    | Retorna o nome                           |
| `obtemIdadeAtleta()`   | Retorna a idade                          |
| `obtemPesoAtleta()`    | Retorna o peso                           |
| `obtemAlturaAtleta()`  | Retorna a altura                         |
| `obtemNotasAtleta()`   | Retorna o conjunto de notas              |
| `obtemCategoria()`     | Retorna a categoria                      |
| `obtemIMC()`           | Retorna o IMC                            |
| `obtemMediaValida()`   | Retorna a média válida                   |


🧮 Regras de Cálculo
🏷️ Categoria
| Faixa Etária  | Categoria     |
| ------------- | ------------- |
| 9 a 11 anos   | Infantil      |
| 12 a 13 anos  | Juvenil       |
| 14 a 15 anos  | Intermediário |
| 16 a 30 anos  | Adulto        |
| Outras idades | Sem categoria |

⚖️ IMC

Fórmula:
IMC = peso / (altura * altura)

🧠 Média Válida

Ordenar as notas em ordem crescente;

Remover a menor e a maior nota;

Calcular a média das notas restantes.
💻 Exemplo de Código
// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// Exibe os resultados
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);


🧾 Saída Esperada
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333332

⚙️ Como Executar o Projeto
# 1️⃣ Clone o repositório
git clone https://github.com/RogeriaAPereira/dados-atletas.git

# 2️⃣ Acesse a pasta do projeto
cd dados-atletas

# 3️⃣ Execute no Node.js
node dados-atletas.js

📁 Estrutura do Repositório
dados-atletas/
│
├── dados-atletas.js     # Código principal
└── README.md            # Documentação do projeto

👩‍💻 Autora

Rogéria Pereira
💼 Desenvolvedora em formação | Foco em BI e Análise de Dados
📊 Entusiasta de projetos com dados e automação
🌐 GitHub: github.com/RogeriaAPereira

💌 E-mail: rogeria1993@gmail.com
