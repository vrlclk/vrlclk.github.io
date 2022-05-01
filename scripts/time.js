function liveDate(){
    let date = new Date();
    let showDate = document.querySelector('p.date');
    showDate.innerHTML = date.toLocaleDateString();
}

function liveTime(){
    let time = new Date();
    console.log(time);

    let showTime = document.querySelector('p.time');
    showTime.innerHTML = time.toLocaleTimeString();
}

setInterval(liveDate, 1000);
setInterval(liveTime, 1000);