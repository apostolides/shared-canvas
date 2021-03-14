$(document).ready(()=>{

  $("#red").click(()=>{
    stroke_color = "#FF0000";
  });

  $("#green").click(()=>{
    stroke_color = "#00FF00";
  });

  $("#blue").click(()=>{
    stroke_color = "#0000FF";
  });

  $("#purple").click(()=>{
    stroke_color = "#9900FF";
  });

  $("#yellow").click(()=>{
    stroke_color = "#FFFF00";
  });

  $("#black").click(()=>{
    stroke_color = "#000000";
  });

  $("#eraser").click(()=>{
    stroke_color = "#FFFFFF";
  });

  $("#big").click(()=>{
    stroke_weight = 10;
  });

  $("#medium").click(()=>{
    stroke_weight = 4;
  });

  $("#small").click(()=>{
    stroke_weight = 2;
  });

  $("#clear").click(()=>{
    socket.emit('clear',{clear:true});
  });

  $("#rename").click(()=>{
    let name = $("#name-field").val();
    if(name){
      user_name = name;
    }
  });

});
