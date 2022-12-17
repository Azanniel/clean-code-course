// Nomenclatura de variáveis

// 1º Regra -> Evite diminutivos, ou seja, usar uma única letra para nomear variáveis
// 2º Regra -> Use sempre variáveis que expressam o seu significado e para que servem 
const users = ['Leandro', 'Diego', 'Mayk', 'Rodrigo'];

const usersStatingWithLetterL = users.filter(user => {
  return user.startsWith('L');
});

// 3º Regra -> Evite nomes genéricos (data, response, list, args, params)
function getUser() {
  // const data = getUsersFromDatabase();
  const users = getUsersFromDatabase();

  return users;
}

// Dica: Muitas vezes um código maior é mais legível que um código menor