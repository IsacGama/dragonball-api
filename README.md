# Dragon Ball API REST - NestJS + Prisma

Esta API foi construída com **NestJS**, **Prisma** e documentada com **Swagger**.
Ela permite gerenciar dados relacionados ao universo de Dragon Ball, como personagens, sagas, planetas e transformações.

## 📚 Documentação Swagger

Disponível em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 🔧 Instalação

```bash
# Clonar o repositório
git clone <url-do-repo>

# Acessar o diretório
cd dragon-ball-api

# Instalar dependências
npm install

# Executar aplicação
npm run start:dev
```

Crie um arquivo `.env` com a variável `DATABASE_URL` apontando para seu banco de dados.

---

## 🔌 Endpoints Principais

### `/characters`
- `GET /characters`: Lista personagens com filtros opcionais.
- `GET /characters/:id`: Retorna personagem por ID.
- `POST /characters`: Cria novo personagem.
- `PATCH /characters/:id`: Atualiza personagem.
- `DELETE /characters/:id`: Remove personagem.

### `/sagas`
- `GET /sagas`: Lista sagas com filtros opcionais.
- `GET /sagas/:id`: Retorna saga por ID.
- `POST /sagas`: Cria nova saga.
- `PATCH /sagas/:id`: Atualiza saga.
- `DELETE /sagas/:id`: Remove saga.

### `/planets`
- `GET /planets`: Lista planetas com filtros opcionais.
- `GET /planets/:id`: Retorna planeta por ID.
- `POST /planets`: Cria novo planeta.
- `PATCH /planets/:id`: Atualiza planeta.
- `DELETE /planets/:id`: Remove planeta.

### `/transformations`
- `GET /transformations`: Lista transformações com filtros.
- `GET /transformations/:id`: Retorna transformação por ID.
- `POST /transformations`: Cria nova transformação.
- `PATCH /transformations/:id`: Atualiza transformação.
- `DELETE /transformations/:id`: Remove transformação.

---

## 🛠 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Swagger (OpenAPI)](https://swagger.io/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 👨‍💻 Autor

Este projeto foi desenvolvido com fins de aprendizado e prática com NestJS e banco de dados relacional.