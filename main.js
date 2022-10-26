img = "";
status  = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0,0,700,500);
    fill("#FF0000");
    text("perro", 40, 70);
    noFill();
    stroke("#FF0000");
    rect(30,60, 600,420);



    text("gato", 315 ,92);
    noFill();
    stroke("#FF0000");
    rect(310,80, 320, 400);
    fill("#FF0000");
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
   objectDetector = ml5.objectDetector('cocossd',modelloaded);
   document.getElementById("status").innerHTML = "detectando objetos";
}
function modelloaded(){
    console.log("modelo cargado");
    status = true;
    objectDetector.detect(img, gotresult);
}
function gotresult(error,results){
    if (error) {
        console.log(error);
    }
 console.log(results);
}