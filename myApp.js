let express = require('express');
let app = express();

app.use(express.json())
app.get('/json',(req,res)=>{
  var response = {message:"Hello json"};
  res.send((process.env.MESSAGE_STYLE)
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    response.message=response.message.toUpperCase()
  }
  res.json(response)
})





























 module.exports = app;
