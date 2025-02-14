# 📌 Gerenciador de Tarefas com Angular

## 📖 Descrição

Este projeto é um Gerenciador de Tarefas desenvolvido com Angular e JSON-Server para simular uma API REST. O sistema permite criar, editar, excluir e marcar tarefas como concluídas ou pendentes. Além disso, o projeto agora inclui notificações Toast e um servidor Express para gerenciar tanto o frontend quanto o backend simulados.

## 🚀 Tecnologias Utilizadas

- Angular (versão mais recente)
- Bootstrap (para estilização)
- JSON-Server (para simulação do backend)
- TypeScript
- RxJS (para manipulação de dados assíncronos)
- HttpClient (para comunicação com a API)
- -Toast (para mensagens de sucesso e erro)

## 🛠 Funcionalidades Implementadas

✅ Listagem de tarefas recuperadas da API JSON-Server

✅ Adição de novas tarefas com um formulário

✅ Exclusão de tarefas

✅ Edição do título da tarefa diretamente na lista

✅ Marcar tarefas como "Concluídas" ou "Pendentes"

✅ Toast de notificação para mensagens de sucesso e erro

## 📂 Estrutura do Projeto

├── src/  
│   ├── app/  
│   │   ├── components/  
│   │   │   ├── task-form/              
│   │   │   ├── task-list/            
│   │   │   ├── toast/                  
│   │   ├── services/  
│   │   │   ├── task.service.ts         
│   │   ├── models/  
│   │   │   ├── task.model.ts          
│   ├── assets/  
│   ├── environments/  
│   ├── index.html  
│   ├── styles.scss   
│   ├── db.json                         
├── package.json  
├── angular.json  

## 🔧 Configuração e Execução

### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
### 2️⃣ Instalar Dependências
```bash
npm install
```
### 3️⃣ Iniciar o JSON-Server (Backend Fake)
```bash
npx json-server --watch db.json --port 3000
```
### 4️⃣ Iniciar o Projeto Angular
```bash
ng serve
Acesse: http://localhost:4200 no navegador.
```
Ou, para rodar ambos os serviços simultaneamente:
```bash
npm run dev
```
## ⚡ Explicação das Funcionalidades

### 📌 1. Adicionar Tarefa

- O componente task-form permite adicionar novas tarefas.
- As tarefas são enviadas para o JSON-Server via POST.
- A lista é atualizada automaticamente após a adição.
- Uma notificação Toast aparece para informar que a tarefa foi adicionada com sucesso.

### ✏ 2. Editar Tarefa

- Ao clicar no botão "Editar", um campo de texto é exibido para alteração do título.
- Ao clicar em "Salvar", o PUT é enviado para a API atualizando a tarefa.
- A lista é recarregada para refletir a mudança.
- Uma notificação Toast aparece para informar que a tarefa foi atualizada com sucesso.

### ✅ 3. Marcar como Concluído/Pendente

- O status da tarefa pode ser alterado clicando no botão correspondente.
- Um PUT é enviado para a API alterando o estado da tarefa.
- Uma notificação Toast aparece para informar que a tarefa foi marcada como concluída ou pendente.

### 🗑 4. Excluir Tarefa

- O botão Excluir remove a tarefa da API via DELETE.
- A lista é atualizada após a exclusão.
- Uma notificação Toast aparece para informar que a tarefa foi excluída com sucesso.

### 💬 5. Toast de Notificação
- O componente toast exibe mensagens de sucesso ou erro relacionadas a ações como adicionar, editar, excluir ou marcar tarefas.
- As mensagens são exibidas de forma centralizada na tela e desaparecem automaticamente após um breve intervalo.

📌 Exemplo do db.json

{
  "tasks": [
    { "id": 1, "titulo": "Estudar Angular", "completo": false }
  ]
}

### 📜 Melhorias Futuras

🔹 Adicionar filtro de tarefas por status
🔹 Implementar paginação
🔹 Criar login de usuário para salvar tarefas individuais

### 📌 Autor

### 👨‍💻 Renato Napoli Guimarães

### 📌 Desenvolvedor Frontend Sênior especializado em Angular, React e Vue.js
