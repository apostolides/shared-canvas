var user_name = "anonymous";

$(document).ready(()=>{
$("#message-input-field").keypress((event)=>{
  if(event.key == 'Enter'){
    let message = $("#message-input-field").val();
    if(message){
      let data = {message:message,user:user_name};
      socket.emit('chat',data);
    }
    $("#message-input-field").val("");
  }
});

socket.on('chat',(data)=>{
  let date = new Date();
  let date_str = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  $("#chat-content").append(`[${date_str}] ${data.user}: ${data.message}`+"<br>");
  $("#chat-content").scrollTop($("#chat-content")[0].scrollHeight);
});
});
