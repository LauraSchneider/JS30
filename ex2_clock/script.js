const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelector('.hand');


function setTime() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const minutes = date.getMinutes();
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = date.getHours();
    const hoursDegrees = ((hours/12) *360) + 90;
    hourHand.style.transform = `rotate${hoursDegrees}deg`;
    console.log(hours)

}

setInterval(setTime, 1000)
