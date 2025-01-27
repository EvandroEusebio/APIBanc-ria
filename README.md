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

---

## 📂 **Estrutura do Projeto**

### **Frontend**


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
2. Instale as dependencias
   ```bash
   pnpm i
   ou
   npm install
3. Configure o arquivo config/config.json
```bash
  "development":
    "username": "NOME_DO_USUARIO_DO_BANCO",
    "password": "SENHA_DO_BANCO",
    "database": "NOME_DO_BANCO",
    "host": "ENDEREÇO_DO_BANCO (127.0.0.1)",
    "dialect": "mysql"
