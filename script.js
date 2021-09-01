"use strict";

const wait = (x) => setTimeout(function(){console.log(x);},x);

function serv(msg, lol){
    msg.forEach(lol);
}
serv([100,20,10,1,5,15], wait)