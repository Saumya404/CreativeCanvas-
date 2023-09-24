function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,290);
    video.hide();
}

function draw() {
    image (video, 70, 110, 380, 290);
    fill("white");
    circle(63, 100, 70);
    fill("red");
    rect (95, 90, 350, 20);
    fill("white");
    circle (450, 100, 70);
    fill("red");
    rect(58, 134, 20, 251);
    fill("red");
    rect(85, 390, 350, 20);
    fill("white");
    circle(60, 400, 70);
    fill("red");
    rect (448, 134, 20, 250);
    fill("white");
    circle (450, 400, 70);
    }

function take_snapshot(){
    save('CreativeCanvas.png');
}
