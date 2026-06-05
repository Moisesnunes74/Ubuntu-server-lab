# Ubuntu-server-lab
My Ubuntu server. I created this server to study about linux, and how configure it and the services.

technologys

* **Sistema Operacional:** Ubuntu Server (Virtualizado via Oracle VM VirtualBox)
* **Servidor Web / Proxy Inverso:** Apache HTTP Server
* **Ambiente de Execução:** Node.js
* **Banco de Dados:** MySQL Server
* **CMS:** WordPress

---

## 📐 Arquitetura e Configuração de Rede

Para garantir que os serviços fossem acessíveis de forma consistente dentro da rede local, o servidor foi configurado com um **IP Estático (Fixo)**.

### Mapeamento de Portas e Serviços

Todos os serviços foram isolados em pastas próprias dentro do sistema de arquivos do Ubuntu e respondem nas seguintes portas padrão:

| Serviço | Porta Padrão | Descrição / Função |
| :--- | :--- | :--- |
| **SSH** | `22` | Acesso remoto seguro via terminal. |
| **Apache** | `80` | Servidor Web principal que gerencia o tráfego do WordPress. |
| **Node.js** | `3000` | API de Back-end responsável pelas regras de negócio customizadas. |
| **MySQL** | `3306` | Banco de dados centralizado que atende tanto ao WordPress quanto ao Node.js. |
