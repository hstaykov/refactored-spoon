// ==UserScript==
// @name        Goncho
// @namespace   https://imperiaonline.org
// @include     https://imperiaonline.org/*
// @icon        https://ihcdn3.ioimg.org/iov6live/gui/favicon.png
// @author      Goncho
// @match       *.imperiaonline.org/imperia/game_v6/game/village.php
// @require     https://raw.githubusercontent.com/Nickersoft/push.js/master/bin/push.min.js
// @grant       none
// @updateURL    https://github.com/hstaykov/refactored-spoon/imp.js
// @downloadURL  https://github.com/hstaykov/refactored-spoon/imp.js
// @version     0.0.0
// ==/UserScript==

(function() {
    'use strict';

  var capitalId = 439;

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

    //Vassals
    (function loop() {
        console.log("тест");
        var rand = randomIntFromInterval(6000, 30000);
        setTimeout(function() {
                console.log("Get vassal income : " + rand/1000 + " secs");
                xajax_doCollectVassalGold('vassal-screen', {provinceId: capitalId, allVassal: true})
                loop();
        }, rand);
    }());

})();
