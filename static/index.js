console.log("Rathi is a good girl");

function dispTime()
{
    time=new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" , second: "2-digit" });
    // console.log(time);
    document.getElementById('time').innerHTML=time;
}
setInterval(dispTime,1000);