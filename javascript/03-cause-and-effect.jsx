// Causa vs Efeito
// Sempre devemos criar as variáveis da nossa aplicação pela causa e não pelo efeito

function Button() {
  // const isButtonDisabled = true;
  const isFormSubmitting = true; // Levando em conta que estamos lidando com um formulário

  return (
    <button disabled={isFormSubmitting}>
      <span></span>
      { isFormSubmitting ? 'Carregando' : 'Enviar' }
    </button>
  )
}