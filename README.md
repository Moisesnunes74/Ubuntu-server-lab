# Laboratório Servidor Ubuntu 

Criei este servidor para estudar sobre Linux, como configurá-lo e seus serviços.

Tecnologias Usadas

* **Sistema Operacional:** Ubuntu Server 22.04.05
* **Servidor Web:** Apache 2.4.52
* **Serviço de Aplicação:** Node.js 24.16.0
* **Banco de Dados:** MySQL Server 8.0.46
* **CMS:** WordPress 7.0

---

## Configuração de rede

Para garantir que os serviços estivessem sempre acessíveis na rede local, o servidor foi configurado com um **IP estático**.

### Portas e serviços

Todos os serviços foram isolados em suas próprias pastas dentro do sistema de arquivos do Ubuntu e respondem nas seguintes portas padrão:

| Serviço | porta padrão | Descrição / Função |
| :--- | :--- | :--- |
| **SSH** | `22` | Acesso remoto seguro via terminal.|
| **Apache** | `80` | O servidor web principal que gerencia o tráfego do WordPress. |
| **Node.js** | `3000` | API de back-end responsável por regras de negócio personalizadas. |
| **MySQL** | `3306` | Um banco de dados centralizado que oferece suporte tanto ao WordPress quanto ao Node.js. |
