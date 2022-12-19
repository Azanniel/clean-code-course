// Regras em condicionais

// 1º Evite sempre que possível negações, pois são mais difíceis de serem lidas

// Don't this
const isUserOlderThan18Years = true;
const isUserLivesOnBrazil = true;

if(!isUserOlderThan18Years && !isUserLivesOnBrazil) {

}

// Do this
const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

if(isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {

}

// ----------------------------

// 2º Early return VS else
// Ou seja, prefira early return e use else somente de forma mais semântica

// Don't this
function isUserOlderThan18Years() {
  if(!user) {
    return { error: true }
  } else{
    return user.age >= 18
  }
}

// Do this
function isUserOlderThan18Years() {
  if(!user) {
    return { error: true }
  }

  return user.age >= 18
}

// 3º Evite condicionais aninhadas