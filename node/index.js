const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'dbuser',
  password: 'L!nux123',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

/*const sql = `INSERT INTO people(name) values('Rodrigo')`
connection.query(sql)
connection.end()
*/

app.get('/', (req, res) => {
  // Consulta os nomes na tabela do banco de dados
  connection.query('SELECT name FROM people', (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao executar a consulta');
      return;
    }

    // Cria uma lista HTML com os nomes
    const namesList = results.map((row) => `<li>${row.name}</li>`).join('');

    // Cria a resposta HTML
    const htmlResponse = `
      <html>
        <head>
          <title>Lista de Nomes</title>
        </head>
        <body>
        <h1> Full Cycle Rocks</h1>
          <h1>Lista de Nomes</h1>
          <ul>
            ${namesList}
          </ul>
        </body>
      </html>
    `;

    // Envia a resposta HTML ao cliente
    res.send(htmlResponse);
  });
});

app.listen(port, () => {
console.log('Rodando na porta ' + port)
})