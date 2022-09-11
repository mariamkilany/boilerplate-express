let express = require('express');
let app = express();

app.get('/json',(req,res)=>{
  var response = {message:"Hello json"};
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    response.message=response.message.toUpperCase()
  }
  res.send(response)
})





























 module.exports = app;
