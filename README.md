
# A3 Data - Pedido Cirurgico

## Tecnologias utilizadas

| Tecnologias Backend| Descrição  |
|--|--|
| [Nest](https://docs.nestjs.com/)  | Framework para construir aplicativos Node.js do lado do servidor eficientes e escaláveis.|
| [Postgres](https://www.postgresql.org/) | Banco de dados |
| [Prisma](https://polished.js.org/) |Ferramenta para auxiliar na manipulação do banco de dados  |

| Tecnologias Frontend| Descrição  |
|--|--|
| [React](https://pt-br.reactjs.org/)  |  Biblioteca front-end Javascript para criação de interfaces |
| [Vite](https://vitejs.dev/) | Ferramenta para criação do ambiente de desenvolvimento web |
| [Styled Components](https://styled-components.com/)| Biblioteca CSS-in-JS para estilização |
| [React Hooks Form](https://www.react-hook-form.com/) | Biblioteca para auxiliar na criação e validação de formulários  |
| [Zod](https://zod.dev/) | Biblioteca typescript para declaração e validação de schemas  |

## Design Patterns
* <b>Backend</b>: Foi utilizado o Abstract Factory - Essa abordagem possibilita a geração de conjuntos de elementos interligados ou interdependentes através de uma única interface, sem a necessidade de especificar a classe real.

* <b>Frontend</b>: Foi utilizado o MVVM Architectural  - Separação clara de responsabilidades, facilitando a manutenção e teste do código, além de permitir o desenvolvimento de interfaces de usuário mais flexíveis e reutilizáveis.



# Passos para executar
Requer [Node.js](https://nodejs.org/) v14+ para executar.

## Docker
`verificar issues` 

Instalar o docker [Docker](https://www.docker.com/).

### Criar BD

* Criando a imagem do postgres:
```sh
docker run --name pg_a3data -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

* Iniciando o docker
```sh
docker start pg_a3data
```

* Criando BD

```sh
docker exec -it pg_a3data bash
```


```sh
psql -U root
```

```sh
CREATE DATABASE pg_a3data;
```

### Clonar a aplicação
```sh
git clone https://github.com/arthurlopesr/a3data-challenge.git
```
### Instalar as dependências
```sh
cd api | cd frontend
yarn | npm i
```

### Rodar
```sh
/api yarn start:dev | npm run start:dev
/frontend yarn dev | npm run dev
```
A api estará sendo executada em [http://localhost:3001/](http://localhost:3001/)
O frontend estará sendo executada em [http://localhost:5173/](http://localhost:5173/)
