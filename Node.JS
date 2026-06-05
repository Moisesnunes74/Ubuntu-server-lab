bjetivo

Realizar a instalação do Node.js em um servidor Ubuntu Server, configurar o gerenciador de pacotes NPM e criar uma aplicação web simples utilizando o framework Express para validar o funcionamento do ambiente.

Preparação do Ambiente

Antes da instalação, foram atualizados os repositórios do sistema e instaladas as dependências necessárias para compilação, gerenciamento de pacotes e administração do ambiente.

Principais componentes instalados:

Git
Curl
Vim
GCC/G++
Make
Build Essential
Tree
Certificados HTTPS
Instalação do Node.js

Foi utilizado o repositório oficial NodeSource para obtenção da versão mais recente do Node.js.

Etapas realizadas:

Adição do repositório NodeSource
Atualização da lista de pacotes
Instalação do Node.js
Instalação automática do NPM

Após a instalação, foram verificadas as versões instaladas para garantir o funcionamento correto do ambiente.

Comandos utilizados:

node -v
npm -v
Criação do Projeto

Para validar a instalação foi criado um projeto simples chamado:

nodejs-hello

Dentro do diretório foi inicializado um projeto Node.js utilizando:

npm init -y

Esse processo gerou automaticamente o arquivo:

package.json

responsável pelas configurações e dependências do projeto.

Instalação do Express

Foi instalado o framework Express, amplamente utilizado para desenvolvimento de aplicações web em Node.js.

Comando utilizado:

npm install express

A instalação criou o diretório:

node_modules

e atualizou os arquivos de gerenciamento de dependências do projeto.

Desenvolvimento da Aplicação

Foi criado um arquivo chamado:

index.js

contendo uma aplicação simples com Express.

Funcionalidades implementadas:

Importação do módulo Express
Criação da aplicação web
Configuração de uma rota HTTP GET
Retorno de uma mensagem para o navegador
Inicialização do servidor na porta 3000

Fluxo da aplicação:

Cliente → Requisição HTTP → Express → Resposta HTTP
Execução e Testes

A aplicação foi iniciada através do Node.js:

node index.js

Após a execução, foi realizada a validação da porta utilizada pelo serviço.

Porta padrão:

TCP 3000

Também foram realizados testes utilizando:

curl

e acesso pelo navegador web.

Resultado esperado:

HTTP 200 OK

confirmando que a aplicação estava respondendo corretamente.

Estrutura do Projeto

Estrutura gerada após a criação da aplicação:

nodejs-hello/
├── index.js
├── package.json
├── package-lock.json
└── node_modules/

Descrição dos componentes:

Arquivo	Função
index.js	Aplicação principal
package.json	Configuração do projeto
package-lock.json	Controle das versões instaladas
node_modules	Dependências do projeto
Encerramento da Aplicação

Após os testes, o processo foi finalizado utilizando:

Ctrl + C

Também foi demonstrado o gerenciamento de processos em segundo plano através dos comandos:

jobs
fg
kill -9 PID
