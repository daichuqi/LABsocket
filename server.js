var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  console.log('user connected via socket.io');
  socket.emit('message',{
    text:'Welcome to the chat appliction'
  })

  socket.on('message',function(message){
    console.log('mesage received ' + message.text);
    message.time = moment().valueOf();
    io.emit('message',message);
  })
});

http.listen(PORT, function(){
  console.log('Server started at port ' + PORT);
})