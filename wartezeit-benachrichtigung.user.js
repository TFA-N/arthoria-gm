// ==UserScript==
// @name        Arthoria Benachrichtungs-Skript
// @namespace   https://github.com/TFA-N/arthoria-gm
// @downloadURL https://github.com/TFA-N/gm-revorix/raw/master/wartezeit-benachrichtigung.user.js
// @updateURL   https://github.com/TFA-N/gm-revorix/raw/master/wartezeit-benachrichtigung.user.js
// @match       https://arthoria.de/*
// @grant       GM_notification
// @grant       window.focus
// @version     0.1
// @author      Clum aka TFA-N
// @description 18/09/2021, 12:30:47 PM Erstellt eine Benachrichtigung, wenn die Wartezeit abgelaufen ist. Ein Klick auf die Benachrichtigung öffnet das Arthoria-Tab. 
// @run-at      document-idle
// ==/UserScript==

cd2 = document.getElementById('Countdown2');

var notificationDetails = {
  text:       'Deine Wartezeit in Arthoria ist vorbei!',
  title:      'Arthoria ist bereit!',
  timeout:    3000,
  onclick:    function () {
    window.focus ();
  }
};

if(cd2) {
  setTimeout(() => { 
    if (!document.hasFocus()) {
      GM_notification (notificationDetails);
    } 
  }, parseInt(cd2.innerHTML));
}
