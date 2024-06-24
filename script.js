// Seleciona todos os elementos que possuem o atributo 'required'
const fields = document.querySelectorAll("[required]")

// Função de validação personalizada para os campos
function customValidation(event) {
  const field = event.target // O campo que disparou o evento

  // Função para verificar se existem erros no campo
  function verifyErrors() {
    let foundError = false

    // Itera sobre todas as possíveis propriedades de erro do campo
    for (let error in field.validity) {
      // Se não for um erro customizado e o campo estiver inválido
      if (error != "customError" && field.validity[error]) {
        foundError = error // Define o tipo de erro encontrado
      }
    }
    return foundError // Retorna o tipo de erro encontrado (ou false se não houver erro)
  }

  const error = verifyErrors() // Chama a função para verificar erros

  if (error) {
    // Se houver erro, define uma mensagem de erro personalizada
    field.setCustomValidity("Esse campo é obrigatório")
  } else {
    // Se não houver erro, limpa a mensagem de erro personalizada
    field.setCustomValidity("")
  }
}

// Adiciona um ouvinte de evento para cada campo 'required' para o evento 'invalid'
for (field of fields) {
  field.addEventListener("invalid", customValidation)
}

// Adiciona um ouvinte de evento para o formulário para o evento 'submit'
document.querySelector("form").addEventListener("submit", (event) => {
  console.log("Enviar o formulario") // Log para indicar que o formulário está tentando ser enviado

  // Impede o envio do formulário
  event.preventDefault()
})
