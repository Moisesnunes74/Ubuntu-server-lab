Foi realizada a instalação das dependências necessárias para compilação e gerenciamento de pacotes, incluindo ferramentas de desenvolvimento, bibliotecas de sistema e utilitários de administração.

Comandos utilizados:

sudo apt update

sudo apt install git vim curl gnupg gcc g++ make software-properties-common tree \
build-essential ca-certificates apt-transport-https

Adicionei o repositório oficial do NodeSource para disponibilizar versões atualizadas do Node.js e do NPM.

Comandos utilizados:

sudo curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash

sudo apt update

Após a configuração do repositório, foi realizada a instalação do Node.js e do NPM (Node Package Manager).

Comandos utilizados:

sudo apt install nodejs

Foram verificadas as versões instaladas do Node.js e do NPM para validação do ambiente e conferência de compatibilidade com futuras aplicações.

Comandos utilizados:

sudo node -v
sudo npm -v

Para validar o funcionamento da plataforma, foi criado um projeto de testes utilizando Node.js e o framework Express.

Comandos utilizados:

mkdir -v nodejs-hello

ls -lh

cd nodejs-hello/

npm init -y

npm install express

ls -lha

Foi desenvolvido um servidor web simples utilizando Express, configurado para responder requisições HTTP na porta 3000.

Arquivo criado:

vim index.js

O arquivo index.js foi configurado com uma rota HTTP básica utilizando o framework Express para retornar uma mensagem de teste ao navegador.

Após a criação da aplicação, o servidor foi iniciado em segundo plano para realização dos testes de conectividade.

Comando utilizado:

node index.js &

Foi realizada a validação da porta de escuta da aplicação para garantir que o serviço estava disponível na porta TCP 3000.

Comando utilizado:

sudo lsof -nP -iTCP:'3000' -sTCP:LISTEN

Também foram executados testes de acesso local utilizando ferramentas de linha de comando e navegador web.

Comandos utilizados:

curl -I http://127.0.0.1:3000/

Acesso via navegador:

http://IP_DO_SERVIDOR:3000

Após os testes, a aplicação foi finalizada e os processos em execução foram verificados para garantir o encerramento correto do serviço.

Comandos utilizados:

jobs

fg

Ctrl + C

ps -u

kill -9 PID
