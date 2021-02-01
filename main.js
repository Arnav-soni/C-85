canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_arrays = ["NASA_1.jpg", "NASA_2.jpg", "NASA_3.jpg"]
random_number = Math.floor(Math.random() * 3)
console.log(random_number)

rover_width = 100;
rover_height = 90;

background_image = nasa_arrays[random_number];
console.log("background_image = " + background_image)
bg_image = "mars.jpg";
rov_image = "rover.png";


rov_x = 10;
rov_y = 10;

function add() {
    bg_imgtag = new Image();
    bg_imgtag.onload = uploadbackground;
    bg_imgtag.src = background_image;

    rov_imgtag = new Image();
    rov_imgtag.onload = uploadrover;
    rov_imgtag.src = rov_image;
}

function uploadbackground() {
    ctx.drawImage(bg_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rov_imgtag, rov_x, rov_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed = "38") {
        up();
        console.log("up");
    }

    if (keypressed = "40") {
        down();
        console.log("down");
    }

    if (keypressed = "39") {
        right();
        console.log("right");
    }

    if (keypressed = "37") {
        left();
        console.log("left");
    }   
}

function up() {
    if (rov_y >= 0) {
        rov_y = rov_y - 10;
        console.log("when up arrow is pressed, x = " + rov_x + "y = " + rov_y);
        uploadbackground();
        uploadrover();
    }

}

function down() {
    if (rov_y <= 500) {
        rov_y = rov_y + 10;
        console.log("when down arrow is pressed, x = " + rov_x + "y = " + rov_y);
        uploadbackground();
        uploadrover();
    }

}

function left() {
    if (rov_x >= 0) {
        rov_x = rov_x - 10
        console.log("when left arrow is pressed, x = " + rov_x + "y = " + rov_y);
        uploadbackground();
        uploadrover();
    }

}

function right() {
    if (rov_x <= 700) {
        rov_x = rov_x + 10
        console.log("when right arrow is pressed, x = " + rov_x + "y = " + rov_y);
        uploadbackground();
        uploadrover();
    }

}