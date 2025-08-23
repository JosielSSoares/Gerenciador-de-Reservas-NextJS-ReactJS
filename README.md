# 📝 Sistema de Gerenciamento de Reservas(em progresso)

Desenvolver uma aplicação web em **Next.js** com **React** que permita gerenciar reservas de clientes (como se fosse para um restaurante, salão de beleza ou consultório).  
O sistema deverá contemplar todas as operações de um **CRUD** (Create, Read, Update e Delete).

---

## 🔧 Requisitos Funcionais

### 📋 Listar Reservas (Read)
- Na página inicial, exibir uma tabela ou lista com todas as reservas cadastradas.  
- Cada reserva deve conter:
  - **ID** (gerado automaticamente)
  - **Nome do Cliente**
  - **Data da Reserva**
  - **Horário**
  - **Status** (Confirmada / Cancelada)

---

### ➕ Cadastrar Nova Reserva (Create)
- Criar uma página `/reservas/novo` com formulário para:
  - Nome do cliente
  - Data da reserva (input de data)
  - Horário da reserva (input de hora)
  - Status inicial (por padrão: **Confirmada**)  
- Ao salvar, a reserva deve ser adicionada à lista.

---

### ✏️ Editar Reserva (Update)
- Criar uma página `/reservas/editar/[id]`.  
- O formulário deve carregar os dados já existentes.  
- Permitir alterar **data**, **horário**, **nome** e **status**.

---

### 🗑️ Excluir Reserva (Delete)
- Em cada item da lista, incluir um botão **Excluir**.  
- Exibir uma mensagem de confirmação antes de apagar.

---

## 🗂️ Organização do Projeto

- Usar **rotas do Next.js** para estruturar as páginas:
  - `/reservas` → Listagem
  - `/reservas/novo` → Cadastro
  - `/reservas/editar/[id]` → Edição

- Criar uma **API interna** no Next.js (`/app/api/reservas/route.js`) que responda aos métodos:
  - `GET` → Listar reservas
  - `POST` → Criar reserva
  - `PUT` → Atualizar reserva
  - `DELETE` → Excluir reserva

