var socket = io();

socket.on('connect',function(){
  console.log('Connected')
});

socket.on('message',function(message){
  console.log('New message:');
  console.log(message.text);
});

var $form = $('#message-form');
var $input = $('#inputField');

$form.on('submit',function(event){
  event.preventDefault();
  socket.emit('message',{
    text:$input.val()
  })
  $input.val('')
});
