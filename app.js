const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const {port} = require('./config')

app.get('/status', (request, response) => {
    const status = {
       'Status': 'Running'
    };
    
    response.send(status);
 });

 app.get('/test', (request, response) => {
   const payload = {
      'Status': 'Running',
      "testValue" : 3
   };
   
   response.send(payload);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });