# 🚀 API Express com TypeScript

API RESTful construída com Node.js, Express e TypeScript. Inclui autenticação com JWT, hash de senha com bcrypt e integração com MySQL.

---

## ⚡ Como rodar rapidamente

```bash
npm install
cp .env.example .env
npm run setup
npm run dev
```

---

## 📋 Funcionalidades

- Registro de usuários  
- Login de usuários  
- Perfil do usuário (protegido por autenticação)  
- Integração com banco de dados MySQL  

---

## 🧰 Pré-requisitos

- Node.js (versão 14 ou superior)  
- MySQL instalado e rodando localmente  

> ⚠️ Importante: você precisa ter um usuário e senha válidos no MySQL

---

## ⚙️ Configuração

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd projeto
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o ambiente:

```bash
cp .env.example .env
```

Você também pode renomear manualmente o arquivo `.env.example` para `.env`, mas o comando acima é o mais recomendado.

Agora edite o arquivo `.env` com suas credenciais do MySQL:

```env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=registerapi
DB_PORT=3306
JWT_SECRET=sua_chave_secreta_jwt
```

---

## 🗄️ Setup do banco de dados

Execute o comando:

```bash
npm run setup
```

Esse script irá automaticamente criar o banco de dados (caso não exista) e criar as tabelas necessárias.

---

## ▶️ Executando o projeto

```bash
npm run dev
```

O servidor será iniciado na porta definida no `.env`.

---

## 🔐 Endpoints da API

### Autenticação

- POST /auth/register → Registrar usuário  
- POST /auth/login → Login  

### Usuário

- GET /auth/profile → Obter perfil do usuário (requer token JWT no header Authorization)

---

## 📁 Estrutura do Projeto

```
src/
  app.ts
  server.ts
  controllers/
  routes/
  services/
  middleware/
  database/

migrations/
  migration.js
  001_create_user_table.sql
```

---

## ⚠️ Possíveis erros

Erro de conexão com o banco:
- Verifique se o MySQL está rodando  
- Verifique usuário e senha no `.env`  

Erro "Unknown database":
- O comando `npm run setup` deve resolver automaticamente  

---

## 📦 Dependências principais

- Express  
- TypeScript  
- MySQL2  
- bcryptjs  
- jsonwebtoken  
- dotenv  

---