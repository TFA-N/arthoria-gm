// ==UserScript==
// @name        TimerFertigAnzeige
// @namespace   https://github.com/TFA-N/arthoria-gm
// @downloadURL https://github.com/TFA-N/arthoria-gm/raw/main/endZeit.user.js
// @updateURL   https://github.com/TFA-N/arthoria-gm/raw/main/endZeit.user.js
// @include     https://arthoria.de*
// @grant       none
// @version     1.0
// @author      Clum aka TFA-N
// @description Zeigt an, zu welcher Uhrzeit der Timer fertig ist.
// ==/UserScript==

cd2 = document.getElementById('Countdown2');
timer = parseInt(cd2.innerHTML);
tags = document.getElementsByTagName('td');

for(var i = 0; i < tags.length; i++)
{
    if(tags[i].innerText.includes("beschäftigt!"))
    {
      finishTime = new Date(Date.now() + timer);
      tags[i].innerHTML = tags[i].innerText + " Fertig um <b>" + finishTime.toLocaleTimeString() + "</b> Uhr!";     
      break;
    }
}