function liveTime(){
    let time = new Date();
    console.log(time);

    let showTime = document.querySelector('p.time');
    showTime.innerHTML = time.toLocaleTimeString();
}

setInterval(liveTime, 1000);