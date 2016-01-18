var socket = io();

socket.on('connect',function(){
  console.log('Connected')
});

socket.on('message',function(message){
  console.log('New message:');
  var momentTimeStamp = moment.utc(message.time).format('h:mm a');
  $('.messages').append('<p>'+message.text+'<strong style="margin-left:5px">'+momentTimeStamp+'</strong></p>')
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
