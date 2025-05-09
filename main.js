// function watch() { 
//     let d = new Date();
//     document.getElementById("card-body").innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
// } 

// // Optional: If you’re using the `watch` function, you can keep this:
// setInterval(watch, 1000);

// ------------------------------------------------------

const showTime = () => {
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sec = date.getSeconds();

    // Zero-padding if less than 10
    hr = hr < 10 ? '0' + hr : hr;
    mn = mn < 10 ? '0' + mn : mn;
    sec = sec < 10 ? '0' + sec : sec;

    time.innerHTML = `${hr} : ${mn} : ${sec}`;
    timeformat.innerHTML = hr >= 12 ? "PM" : "AM";
};

const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});
