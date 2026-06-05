# Ubuntu-server-lab
My Ubuntu server. I created this server to study about linux, and how configure it and the services.

technologys

* **Operation System:** Ubuntu Server 22.04.05
* **Web Server:** Apache 2.4.52
* **Application Service:** Node.js 24.16.0
* **Banco de Dados:** MySQL Server 8.0.46
* **CMS:** WordPress 7.0

---

## Network Architecture and Configuration

To ensure that services were consistently accessible within the local network, the server was configured with a **Static IP**.

### Port and Service Mapping

All services have been isolated into their own folders within the Ubuntu file system and respond on the following standard ports:

| Service | Default port | Description / Function |
| :--- | :--- | :--- |
| **SSH** | `22` | Secure remote access via terminal.|
| **Apache** | `80` | The main web server that manages WordPress traffic. |
| **Node.js** | `3000` | Back-end API responsible for customized business rules. |
| **MySQL** | `3306` | A centralized database that supports both WordPress and Node.js. |
