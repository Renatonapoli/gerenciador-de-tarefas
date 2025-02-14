## 📌 Lista de Tarefas

### 📖 Descrição

- Este projeto é uma aplicação web para gerenciamento de tarefas, desenvolvida com Angular e Bootstrap. Ele permite adicionar, editar, excluir, marcar tarefas como concluídas e filtrá-las.

## 🚀 Funcionalidades

### 📌 Adicionar tarefas

✅ Marcar tarefas como concluídas ou pendentes

✏️ Editar tarefas  

🗑 Excluir tarefas  

🔍 Filtrar tarefas por título

📄 Paginação da lista de tarefas

🔔 Notificações de sucesso e erro

🛠 Tecnologias Utilizadas

Angular 15

TypeScript

Bootstrap (para estilização)

JSON Server (simulação de backend)

## 📦 Instalação e Configuração

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/lista-de-tarefas-angular.git
cd lista-de-tarefas-angular
```
### 2️⃣ Instalar as dependências
```bash
npm install
```
### 3️⃣ Iniciar o servidor fake (JSON Server)
```bash
npm run server
O JSON Server simula um backend e roda na porta 3000.
```
### 4️⃣ Iniciar a aplicação Angular
```bash
ng serve
Acesse http://localhost:4200/ no navegador.
```
## 📂 Estrutura do Projeto

lista-de-tarefas-angular/  
│-- src/  
│   ├── app/  
│   │   ├── components/  
│   │   │   ├── task-form/         
│   │   │   ├── task-list/         
│   │   │   ├── toast/             
│   │   ├── models/  
│   │   │   ├── task.model.ts      
│   │   ├── services/  
│   │   │   ├── task.service.ts    
│   │   │   ├── toast.service.ts   
│   ├── assets/  
│   ├── environments/  
│   ├── index.html  
│   ├── styles.scss  

## 📌 Como Contribuir

- Faça um fork do projeto

- Crie uma branch: git checkout -b minha-feature

- Faça suas alterações e commit: git commit -m 'Adiciona nova funcionalidade'

- Envie para o repositório remoto: git push origin minha-feature

- Abra um Pull Request

## 📜 Melhorias Futuras
🔹 Adicionar filtro de tarefas por status  
🔹 Implementar paginação   
🔹 Criar login de usuário para salvar tarefas individuais  

 📌 Autor  
 👨‍💻 Renato Napoli Guimarães  
 📌 Desenvolvedor Frontend Sênior especializado em Angular, React e Vue.js
