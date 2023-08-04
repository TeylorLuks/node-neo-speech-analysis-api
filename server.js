const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;

//routes
const mainRoute = require('./routes/main');
const queriesRoute = require('./routes/queries');
const consultasRoute = require('./routes/consultas');
const servicosRoute = require('./routes/servicos');
const operadoresRoute = require('./routes/operadores');
const chamadasRoute = require('./routes/chamadas');

app.use(express.json()); 

app.use(cors({ origin: '*' }));

app.use("/", mainRoute);
app.use("/query", queriesRoute);
app.use("/servicos", servicosRoute);
app.use("/consultas", consultasRoute);
app.use("/operadores", operadoresRoute)
app.use("/chamadas", chamadasRoute)
          
// app.use(express.urlencoded());     

app.listen(port, () => {
  console.log("Server running on port: " + port);
})
