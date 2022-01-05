# API de Rede Social com NestJS 

Este projeto consiste em uma API de controle para rede social que permite ao usuário postar tweets, seguir e ser seguido de volta.


## Dependências:
 **Node.js** - LTS Version: **16.13.1**

[Download](https://nodejs.org/en/download/)
[Documentação](https://nodejs.org/en/docs/)

**NestJS** - Version: 8.2.4
[Documentação](https://docs.nestjs.com/)

**Prisma**
[Documentação](https://www.prisma.io/docs/)

**PostgreSQL** - Version **14.1**
[Download](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
[Documentação](https://www.postgresql.org/docs/14/release-14.html)

**JWT**
[Documentação](https://www.npmjs.com/package/jwt)

**Bcrypt**
[Documentação](https://www.npmjs.com/package/bcrypt)

<br/><br/>

Após ter instalado o Node.js, basta executar o seguinte comando em um terminal e as outras depedências serão instaladas automaticamente
```bash
$ npm install
```

## Como executar: 

Para iniciar o servidor, execute o seguinte comando no terminal
```bash
$ npm run start:dev
```

O servidor rodará em http://localhost:3000

A documentação através do Swagger pode ser vista em http://localhost:3000/api

---

#### AUTH
<br/><br/>
#### POST - `/auth`
Essa rota gera um token de autenticação.

###### Request:

```javascript
{   
  "email": String,
  "password": String
}
```

###### Response:

```javascript
{
  "email": "pedro@pedro.com",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQHBlZHJvLmNvbSIsImlhdCI6MTY0MTI2Mzc3OSwiZXhwIjoxNjQxMjYzODM5fQ.zZ_T3s4n4kjhwLG-1v4KzcXZMg4KcY7MAqSA2NsrnjA"
}
```

<br/><br/>

#### GET - `/auth`
Nessa rota você insere o token de acesso para autenticação.

###### Request:

```javascript
{
    "email": "pedro@pedro.com",
    "password": "teste123"
}
```

---

#### USER
<br/><br/>
#### POST - `/user`
Adiciona um novo usuário à database.

###### Request:

```javascript
{   
  "name": String,
  "birthday": String, 
  "image": String, 
  "bio" String, 
  "email": String,
  "password": String
}
```
<br/><br/>
#### GET - `/user`
Retorna todos os usuários.

###### Response:

```javascript
{
    "id": 1,
    "name": "Pedro",
    "birthday": "1997-12-21",
    "email": "pedro@pedro.com",
    "password": "$2b$10$7UpceIIvile6eexRxE37vuaR4mrczOxLFvGdFGEjNnrxY1KJKlBwW",
    "image": "profilepic.jpg",
    "bio": "Hello, World.",
    "createdAt": "2022-01-04T02:07:05.105Z",
    "updatedAt": "2022-01-04T02:07:05.153Z"
  }
```
<br/><br/>
#### DELETE - `/user/:id` 
Apaga um usuário pelo id.
<br/><br/>
#### GET - `/user/:id`
Busca um usuário pelo id.
<br/><br/>
#### PATCH - `/user/:id`
Atualiza as informações de um usuário pelo id.

---

#### TWEET
<br/><br/>
#### POST - `/tweet` 
Cria um novo tweet.

###### Request:

```javascript
{   
  "text": String,
  "emoji": String 
}
```
<br/><br/>
#### GET - `/tweet` 
Retorna todos os tweets.
<br/><br/>

#### DELETE - `/tweet/:id`
Apaga um tweet pelo id.
<br/><br/>
#### GET - `/tweet/:id`
Retorna um tweet pelo id.
<br/><br/>
#### PATCH - `/tweet/:id`
Atualiza o tweet pelo id.

---

#### FOLLOWERS
<br/><br/>
#### POST - `/followers`  
Segue um usuário.


###### Request:

```javascript
{   
  "followerId": Number,
  "userId"  Number
}
```

#### GET - `/followers`
Retorna todos os seguidores.
<br/><br/>
#### DELETE - `/followers/:id`
Remove um seguidor pelo id.
<br/><br/>
#### GET - `/followers/:id`
Retorna um seguidor pelo id.
<br/><br/>
#### PATCH - `/followers/:id`
Atualiza um seguidor pelo id.


---

#### FOLLOWING
<br/><br/>
#### POST - `/following`
Segue um usuário.

###### REQUEST:

```javascript
{   
  "followingId": Number,
  "userId"  Number,
}
```
<br/><br/>
#### GET - `/following`
Retorna todos que estão seguindo.
<br/><br/>
#### DELETE - `/following/:id` 
Apaga quem segue pelo id.
<br/><br/>
#### GET - `/following/:id`
Retorna quem segue pelo id.
<br/><br/>
#### PATCH - `/following/:id`
Atualiza quem segue pelo id.