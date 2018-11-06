var weight = document.getElementById("weight");
var height = document.getElementById("height");
var bmi,c;
function get() {
    c = height.value + 0.002;
    bmi = weight.value/(parseFloat(height.value) + 0.002);
    switch (true) {
        case bmi < 18.5:
            document.getElementById("div").innerHTML = "You are Underweight";
            break;
        case 18.5 <= bmi:
        case bmi <25:
            document.getElementById("div").innerHTML = "You are nomarl";
            break;
        case 25<= bmi:
        case bmi <30:
            document.getElementById("div").innerHTML = "You are Overweight";
            break;
        case 30 <bmi:
            document.getElementById("div").innerHTML = "You are Obese";

    }
}