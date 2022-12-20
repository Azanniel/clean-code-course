# 🦾 NodeJS

## ✨ Anotações das aulas

### SOLID

Vamos falar sobre SOLID que na mais é do que a sigla de 5 princípios usados na 
programação backend.

- SRP (Single Responsibility Principle)
- OCP (Open Closed Principle)
- LSP (Liskov Substitution Principle)
- ISP (Inteface Segregation Principle)
- DIP (Dependency Inversion Principle)

### DDD

O DDD (Domain Driven Design), Design dirigido à domínio, é uma prática para pensar 
e desenhar como será o software.

O Domínio é o problema que você está resolvendo e o seu contexto.
Dentro de um Domínio existem vários subdomínios e esses são processos que acontecem
dentro da problemática que estamos querendo resolver.

Subdomínio são diferentes áreas de entendimento dentro de um domínio maior.

Domain Experts: São especialistas em um determinado domínio, ou seja, tem um conhecimento
profundo em cada um dos subdomínios.

### Dicas

- Deveríamos sempre pensar na nossa aplicação desconectada ao banco de dados
- O banco de dados é só uma camada de persistência da nossa aplicação
- Deveria ser possível a nossa aplicação funcionar sem banco de dados
- Deveríamos garantir via testes automatizados que as regras de negócio da aplicação funcionam, estão validadas, mesmo sem banco de dados, mesmo sem rotas no backend, ou seja, ela deveria funcionar sem qualquer dependência externa
- Pense no código na sua maneira mais limpa possível desenvolvendo as regras de negócio, os domínios e subdomínios