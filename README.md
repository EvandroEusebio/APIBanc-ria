# 📌 Gerenciador de PIX

Gerencie suas transações PIX de forma simples e eficiente com este sistema. Este projeto é composto por um frontend desenvolvido em React e um backend baseado em Node.js.

---

## 🚀 **Funcionalidades**

### **Frontend**

- Interface limpa e responsiva.
- Visualização de transações PIX recebidas e enviadas.
- Formulário de registro e login.

### **Backend**

- API RESTful para gerenciamento de transações PIX.
- Autenticação de usuários (JWT).
- Suporte a operações de criação, leitura (CRUD).

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend**

- **React** (com Vite para otimização)
- **Tailwind CSS** para estilização.
- **Shadcn** para componentes.
- **React icons** para icones.
- **React Router Dom** para rotas.
- **Universal Cookie** para Cookies.
- **Date fns** para datas.
- **React Hook Form & Zod** para validação de formulários.
- **Axios** para consumo da API.

### **Backend**

- **Node.js** com **Express**.
- **MYSQL** para banco de dados.
- **JWT** para autenticação.

## ⚙️ **Pré-requisitos**

Certifique-se de ter instalado:

- **Node.js** >=22.x
- **PostgreSQL** >= 8.x
- **PNPM** ou **NPM**.

## 🛠️ **Como Configurar o Projeto**

### **Backend**

1. Clone o repositório:

```bash
   git clone https://github.com/EvandroEusebio/APIBanc-ria.git
   cd back
```

2. Instale as dependencias

```bash
   npm install
```

3. Configure o arquivo config/config.json

```bash
"development":{
  "username": "NOME_DO_USUARIO_DO_SEU_BANCO (root)",
  "password": "SENHA_DO_SEU_BANCO (null)",
  "database": "NOME_DO_SEU_BANCO",
  "host": "ENDEREÇO_DO_SEU_BANCO (127.0.0.1)",
  "dialect": "mysql" }
```

4. Execute as migrações do banco

```bash
npx sequelize-cli db:migrate
```

5. Inicie o servidor

```bash
npm start
```

### **Frontend**

1. Clone o repositório:

```bash
   git clone https://github.com/EvandroEusebio/APIBanc-ria.git
   cd front/Pix-front
```

2. Instale as dependencias

```bash
   pnpm i
   ou
   npm install
```

3. Acesse o arquivo src/service/axios.ts e configure:

```bash
   const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Insira sua url do servidor
  headers: {
    "Content-Type": "application/json",
  },
});
```

4. Inicie o projeto:

```bash
   pnpm run dev
```

🧪 Como Usar

- **Acesse o Frontend: http://localhost:5173.**
- **Crie uma conta e faça login.**
- **Gerencie suas transações PIX no painel.**

📖 Rotas da API

- **POST /users** Registra um novo usuário.
- **POST /users/login** Realiza login.
- **POST /users/pix** Envia um novo pix.
- **POST /users/pix/{id}** pega os pixs do usuário.
- **POST /users/pix/receive/{id}** pega os pixs recebidos do usuário.
- **POST /users/pix/send/{id}** pega os pixs enviados do usuário.

📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

📧 Contato

- **Email: ** eusebioevandro01@gmail.com
- **GitHub: ** https://github.com/EvandroEusebio
- **Linkedin: ** https://www.linkedin.com/in/evandro-eus%C3%A9bio-121a5a26a/
