var btn_rock = document.getElementById("Rock");
var btn_paper = document.getElementById("Paper");
var btn_scissors = document.getElementById("Scissors");
var btn_start = document.getElementById("begin_round");
var img_user = document.getElementById("user");
var img_cpu = document.getElementById("cpu");
var score_user = document.getElementById("points_user").innerText;
var score_cpu = document.getElementById("points_cpu").innerText;

var Menu = "Loading";
var option_user;
var option_cpu;




init_images();
btn_start.onclick = function() {
    Menu = "Begin";
    console.log(option_user);
    option_cpu = num_aleatory()
    display_option_cpu(option_cpu);
    game(option_user, option_cpu);

}
btn_rock.onclick = function() {
    option_user = 0;
    img_user.src = "./images/rock-png.png";
}
btn_paper.onclick = function() {
    option_user = 1;
    img_user.src = "./images/paper-icon.png";
}
btn_scissors.onclick = function() {
    option_user = 2;
    img_user.src = "./images/scissors-icon.png";
}

switch (Menu) {
    case "wait":
        console.log("waiting..");
        break;
    case "begin":
        console.log("begin round");
        break;
}


function init_images() {
    btn_rock.style.backgroundImage = " url('./images/rock-png.png')";
    btn_paper.style.backgroundImage = " url('./images/paper-icon.png')";
    btn_scissors.style.backgroundImage = "url('./images/scissors-icon.png')";
}

function num_aleatory() {
    return parseInt(Math.random() * 3);
}

function game(option_user, option_cpu) {
    var scenario_1;
    var scenario_2;
    var scenario_3;
    var tie;
    if (option_user === option_cpu) {
        tie = true;
    } else if (option_user === 0 && option_cpu === 2) {
        scenario_1 = true;
    } else if (option_user === 1 && option_cpu === 0) {
        scenario_2 = true;
    } else if (option_user === 2 && option_cpu === 1) {
        scenario_3 = true;
    }


    if (scenario_1 || scenario_2 || scenario_3) {
        alert("USER won");
        score_user++;
        document.getElementById("points_user").innerText = score_user;


    } else if (tie) {
        alert("tie");
    } else {
        alert("CPU won");
        score_cpu++;
        document.getElementById("points_cpu").innerText = score_cpu;
    }
}

function display_option_cpu(option) {
    if (option === 0) {
        img_cpu.src = "./images/rock-png.png";
    } else if (option === 1) {
        img_cpu.src = "./images/paper-icon.png";
    } else {
        img_cpu.src = "./images/scissors-icon.png";
    }
}