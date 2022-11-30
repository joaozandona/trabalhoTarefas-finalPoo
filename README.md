
# Gerenciador de Tarefas

Projeto final da matéria de Programação Orientada a Objetos. Inicialmente o projeto seria
feito em java, porém como alinhado com o professor o projeto foi feito em TypeScript, mas
seguindo a estrutura MVC.

# Projeto

O backend da aplicação roda com TypeScript, express, e SQLite3, já o frontend usa React, e Axios.

Na pasta chamada tarefas-backend você vai encontrar a api do backend do nosso sistema, instale
as dependências, crie um arquivo .env com a váriavel de ambiente do arquivo do banco de dados, como "DATABASE_FILE = ./tmp.db" e para iniciar o servidor rode "yarn dev";

Na pasta chamada tarefas-frontend vai encontrar o frontend da aplicação, então instale as dependências e inicie o servidor com npm start.

Para acessar o seu projeto a url é "http://localhost:3000/";

# Rotas

As rotas aceitas pela API que roda no backend são:

GET - http://localhost:8091/api/v1/tarefa - Rota retorna todas as tarefas do banco de dados;

POST - http://localhost:8091/api/v1/tarefa - Rota para incluir nova tarefa, estrutura: {
	"name": "tarefa3",
	"prioridade": 3, "desc": "description", "concluida": 0
};

PATCH - http://localhost:8091/api/v1/tarefa/conclui/:id - Rota usada para concluir as tarefas, passa o id da tarefa a ser concluida

PUT - http://localhost:8091/api/v1/tarefa/3 - Rota usada para alteracoes, estrutura: {
	"name": "aaaaa",
	"prioridade": 3,
	"concluida": 1,
	"desc": "teste"
}

DELETE - http://localhost:8091/api/v1/tarefa/:id - Rota usada para detelar tarefa, passa o id da tarefa a ser excluida na rota
