function setup() {
    createCanvas(400, 400);
    background("lightgreen");
  }
  
  function draw() {
    
    stroke("white");
    fill("black");
    
    if(mouseIsPressed) 
    rect(mouseX,mouseY,20,20);
   } 