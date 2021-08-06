canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_mars_images_array=["Mars_1.jpg","Mars_2.jpg","Mars_3.jpg","Mars_4.jpg"];

random_image=Math.floor(Math.random() * 4);
console.log(random_image);
background_image=nasa_mars_images_array[random_image];
rover_width=150;
rover_height=100;
rover_X=10;
rover_Y=5;
rover_image="rover.png";

function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;

    rover_img=new Image();
    rover_img.onload=uploadRover;
    rover_img.src=rover_image;
}

function uploadBackground (){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadRover (){
    ctx.drawImage(rover_img,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown (e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="37"){
        left();
        console.log("left");
    }

    if (keyPressed=="38"){
        up();
        console.log("up");
    }

    if (keyPressed=="39"){
        right();
        console.log("right");
    }

    if (keyPressed=="40"){
        down();
        console.log("down");
    }
}

function right(){
    if (rover_X<=650){
        rover_X=rover_X+10;
        console.log("when right arrow key is pressed");
        console.log("x= "+rover_X);
        console.log("y= "+rover_Y);
        uploadBackground();
        uploadRover();
        
    }
}

function down(){
    if (rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("when down arrow key is pressed");
        console.log("x= "+rover_X);
        console.log("y= "+rover_Y);
        uploadBackground();
        uploadRover();
        
    }
}

function left(){
    if (rover_X>=0){
        rover_X=rover_X-10;
        console.log("when left arrow key is pressed");
        console.log("x= "+rover_X);
        console.log("y= "+rover_Y);
        uploadBackground();
        uploadRover();
        
    }
}

function up(){
    if (rover_Y>=0){
        rover_Y=rover_Y-10;
        console.log("when up arrow key is pressed");
        console.log("x= "+rover_X);
        console.log("y= "+rover_Y);
        uploadBackground();
        uploadRover();
        
    }
}


