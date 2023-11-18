const clock = document.getElementById('clock');



setInterval(()=>{
    let date = new Date().toLocaleTimeString()
    clock.innerText = date
},100)