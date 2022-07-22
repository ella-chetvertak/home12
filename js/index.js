    // First

let first_form = document.forms[0];
let label_text = document.getElementById("label_text");
let label_number = document.getElementById("label_number");
let label_mail = document.getElementById("label_mail");
first_form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (this.text_input.value.match(/[a-zA-Z]/)) {
        this.text_input.style.backgroundColor = "green";
        label_text.style.opacity = "0";
    } else {
        this.text_input.style.backgroundColor = "red";
        label_text.style.opacity = "1";
    }
    if (this.number_input.value.match(/\+380[0-9]/g)) {
        this.number_input.style.backgroundColor = "green";
        label_number.style.opacity = "0";
    } else {
        this.number_input.style.backgroundColor = "red";
        label_number.style.opacity = "1";
    }
    if (this.mail_input.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
        this.mail_input.style.backgroundColor = "green";
        label_mail.style.opacity = "0";
    } else {
        this.mail_input.style.backgroundColor = "red";
        label_mail.style.opacity = "1";
    }
});

    // Second and Third

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
let x, y, check = 0;
canvas.addEventListener('click', (event) => {
    if (check < 2) {
        if (check === 0) {
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
        }
        if (check === 1) {
            ctx.lineTo(event.offsetX, event.offsetY);
            x = event.offsetX;
            y = event.offsetY;
            ctx.stroke(); 
        }
        check++;
    } else {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(event.offsetX, event.offsetY);
        x = event.offsetX;
        y = event.offsetY;
        ctx.stroke(); 
    }
});
let color_picker = document.getElementById("color_picker");
color_picker.addEventListener('click', function(event) {
    event.target.style.color = event.target.innerHTML;
    ctx.strokeStyle = event.target.innerHTML;
});

    // Fourth

console.log('https://developer.mozilla.org/'.match(/(http|https|www):\/\/([a-z-_]+\.)+.[a-z0-9_-]+\//g))


