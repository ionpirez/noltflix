var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, DELETE, GET, PUT,PATCH');
  res.header('Access-Control-Allow-Headers', 'Authorization,Origin, X-Requested-With, Content-Type, Accept');
  next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const response = []

app.get('/api/favorites', function(req, res) {
  var data = response
  if(data.length === 0){
    data = {
      errorcode:404,
      message:"You don't have any favorite yet :("
    }
  }
  res.status(200).json({ data });
});
app.post('/api/favorites', function(req, res) {
  var obj = req.body;
  try {
    response.push(obj[0])
    res.status(200).json({ data:response });
    res.status(404).json({ "message": "service not found" });
    return
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ "message": "internal error" });
  }
});
app.delete('/api/favorites/:id', function(req,res){
  const id_show = req.params.id
  var data = response
  try{
    for(var i = 0; i <= data.length-1; i++){
      if(data[i].show_id == id_show){
        data.splice(data[i], 1)
      }
    }
    if(data.length === 0){
      data = {
        errorcode:404,
        message:"You don't have any favorite yet :("
      }
    }
    res.status(200).json({data});
    res.status(404).json({ "message": "service not found" });
    return
  }
  catch(err){
    console.log(err);
    res.status(500).json({ "message": "internal error" });
  }
});
var port = 5500;

app.listen(port);
console.log('hello mother fucker!!!')
console.log('Mock server running on port ' + port);
