// Seleciona o form onde estão os dias
const form = document.querySelector("form")

// Adiciona o objeto/lib NLWSetup para manipular e facilitar os dados
const nlwSetup = new NLWSetup(form)

// Carrega os dados do usuário caso existam
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

// Seleciona o button do header
const button = document.querySelector("header button")

// Adicionando resposta para eventos utilizando funções
button.addEventListener("click", add)
form.addEventListener("change", save)

// Função para registrar o dia
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
  if (nlwSetup.dayExists(today)) {
    alert("O dia já foi adicionado ❌")
  } else {
    nlwSetup.addDay(today)
  }
}

// Função para salvar os dias marcados em local storage
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
