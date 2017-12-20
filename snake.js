

var speed = 2;         
var dir_x = speed;        
var dir_y = 0;           
var current_position_x = 0;         
var current_position_y = 30;        
var begin = 0;     
var time = 10;    
var timeInterval;      

function game(){
  
  begin++;

  
  if(begin%2){
    
    document.getElementById("start").textContent = "Stop";

    timeInterval = setInterval(drawForever, time);
  }
  else{
 
    document.getElementById("start").textContent = "Start";
    clearInterval(timeInterval);
  }
}


function drawForever(){
  
  var canvas = document.getElementById("canvas");
  var Context = canvas.getContext("2d");
  Context.fillStyle = "#FF0000";

  
  Context.beginPath();
  Context.moveTo(current_position_x, current_position_y);


  current_position_x += dir_x;
  current_position_y += dir_y;

  if(current_position_x >= 1280 || current_position_y >= 800){
    clearInterval(timeInterval);
    return; 
  }

  if(current_position_x <= 0 || current_position_y <= 0){
    clearInterval(timeInterval); 
    return; 
  }

  
  Context.lineTo(current_position_x, current_position_y);
  Context.lineWidth = 5;

 
  Context.strokeStyle = '#ff0000';
  Context.stroke();
}


function turnLeft(){
 
  if(begin%2){
   
    if(dir_x == speed){
      dir_x = 0;
      dir_y = (-1*speed);
    }

    else if (dir_x == (-1*speed)) {
      dir_x = 0;
      dir_y = speed;
    }
  
    else if (dir_y == speed) {
      dir_x = speed;
      dir_y = 0;
    }

    else if (dir_y == (-1*speed)) {
      dir_x = (-1*speed);
      dir_y = 0;
    }
  }
}

function turnRight(){

  if(begin%2){
  
    if(dir_x == speed){
      dir_x = 0;
      dir_y = speed;
    }

    else if (dir_x == (-1*speed)) {
      dir_x = 0;
      dir_y = (-1*speed);
    }

    else if (dir_y == speed) {
      dir_x = (-1*speed);
      dir_y = 0;
    }

    else if (dir_y == (-1*speed)) {
      dir_x = speed;
      dir_y = 0;
    }
  }
}

