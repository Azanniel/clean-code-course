# ⚛️ Dicas de clean code

## 📋 Anotações da aulas

**Quando eu separo meu código em um componente?**

- Quando eu tenho algo repetitivo
- Quando eu consigo isolar algo do seu contexto, sem prejudicar o comportamento original

**Com o que devo me preocupar na hora de separar meus componentes?**

O ReactJS é constituído em camadas (JS, CSS, HTML) e sempre que possível
olhe para sua camada Javascript, pois é ela que deverá ser pensada ao separar um trecho
do seu código em um ou mais componentes

**Componentes puros?**

São funções que não dependem de um contexto externo, ou seja, são funções que
dependem só dos parâmetros enviados para elas e com isso elas conseguem fazer
tudo que precisam fazer e devolver uma resposta

**Condicionais em render?**

Evite utilizar ao máximo operações condicionais dentro da camada HTML, ao invés, mova todas
as condicionais necessárias para a camada de JS

## 🏷️ Prefixos para padrões

**handle**

Sempre que eu for criar uma função dentro do meu componente e essa função é
disparada através de um evento do usuário (click, submit) então deve ser prefixada
com handle

**on**

Quando eu crio um componente e este precisa receber uma função que é disparada
por um evento do usuário então usar o prefixo On