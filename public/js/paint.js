var socket = io.connect(window.location.hostname + ":3000");
//var socket = io.connect("http://29cc871f2d69.ngrok.io");

var data,pdata;
var stroke_weight;
var stroke_color;

var canvas;

socket.on('data',(data)=>{
  strokeWeight(data.stroke);
  stroke(data.color);
  line(data.mouseX,data.mouseY,data.pmouseX,data.pmouseY);
});

socket.on('clear',(data)=>{
  clear();
  canvas.background(255);
});

function setup(){

  canvas = createCanvas(600,600);
  canvas.background(255);
  canvas.parent("main-canvas");
  stroke_weight = 2;
  stroke_color = 0;
  stroke(stroke_color);

}

function draw(){

  if(mouseIsPressed){
    strokeWeight(stroke_weight);
    stroke(stroke_color);
    line(mouseX,mouseY,pmouseX,pmouseY);
    data = {pmouseX:pmouseX,pmouseY:pmouseY,mouseX:mouseX,mouseY:mouseY,stroke:stroke_weight,color:stroke_color};

    if(JSON.stringify(data)!=JSON.stringify(pdata)){
      //if(mouseX>=0 && mouseX<=600 && mouseY>=0 && mouseY<=600){
        socket.emit('data',data);
        //console.log(data);
        pdata = data;
      //}
    }

  }
}
