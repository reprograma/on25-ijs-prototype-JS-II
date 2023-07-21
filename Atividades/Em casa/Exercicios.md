Nome: Alexandra Ribeiro

Nossa veterinária agora atende quatro espécies diferentes de animais: dois domésticos (`Gato` e `Cachorro`), e dois exóticos (`Hamster` e `Papagaio`). Usando o que você aprendeu essa semana (classes, herança, sobrescritas, campos privados...) e os exemplos de animais abaixo, escreva um sistema que atenda aos critérios listados:

1. Gatos
```
{
    nome: "Nina",
    idade: 1.5
    cor: "frajola",
    castrado: true,
    externo: false,
    vacinas: ["raiva],
    consultas: [],
    social: true,

    miar(),
    vacinar(),
    consultar(),
    castrar(),
    brincar(),
    acariciar(),
    alimentar(),
}
```
 - Gatos sociáveis ronronam ao serem acariciados. Se um gato não for sociável, ele deve silvar.
 - Você pode tornar um gato sociável alimentando ele com uma das comidas favoritas dos gatos: frango, sachê ou peixe.

 2. Cachorro
 ```
 {
    nome: "Zeus",
    idade: 3.5
    cor: "preto",
    castrado: false,
    raça: "labrador",
    vacinas: [],
    consultas: [],
    ferido: false,

    latir(),
    vacinar(),
    consultar(),
    castrar(),
    brincar(),
    acariciar(),
    alimentar(),
}
 ```
  - Cachorros costumam esconder quando estão feridos. Use um campo privado para essa informação, e só a exiba ao tentar `brincar()` com um cãozinho que está ferido.

3. Hamster
```
{
    nome: "Iogurte",
    idade: 1.5,
    cor: "branco e laranja",
    tipo: "sírio",
    consultas: [],

    consultar(),
    brincar(),
    acariciar(),
    alimentar(),
}
```
  - Ao consultar um hamster, você deve brincar com ele para que ele não fique estressado e tente fugir.

4. Papagaio
```
{
    nome: "José",
    idade: 13,
    cor: "verde"
    consultas: [],

    falar(),
    consultar(),
    brincar(),
    acariciar(),
    alimentar(),
}
```
 - Ao brincar com ou alimentar um papagaio, ele deve falar com você.

5. Outros
  - Sempre que vacinar um paciente, você deve adicionar uma nova consulta na lista. O mesmo vale para castrar um animal.
  - Você deve ter uma função `chamar()`, que recebe uma lista de animais e retorna quais dos animais da lista responderam e vieram brincar. Todos os cachorros respondem quando chamados, assim como os gatos que são sociais. Hamsters, papagaios e gatos não sociais não virão.
  - Tentar castrar um animal que já está castrado deve retornar um erro.

**Dica:** assinaturas possíveis para as funções:
```
function acariciar() { ... }

function alimentar(comida) { ... }

function brincar() { ... }

function castrar() { ... }

function chamar([listaAnimais]) { ... return [listaAnimaisQueResponderam] }

function consultar(dataConsulta) { ... }

function falar() { ... }

function latir() { ... }

function miar() { ... }

function vacinar(vacina) { ... }
```
