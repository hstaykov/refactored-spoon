var PopupController = function () {

  this.button_ = document.getElementById('button');
  this.actionType = document.getElementById('timeframe');
  this.inputProvinces_ = document.getElementById('provinces');
  this.inputAmount_ = document.getElementById('quantity');
  this.resultArea_ = document.getElementById('result');

  this.resultArea_.value = localStorage.getItem("script");
  this.resultArea_.select();

  let priceWood = localStorage.getItem('priceWood');
  if (priceWood) {
    document.getElementById('priceWood').innerHTML = priceWood;
  }
  let priceIron = localStorage.getItem('priceIron');
  if (priceWood) {
    document.getElementById('priceIron').innerHTML = priceIron;
  }

  this.addListeners_();
};

PopupController.prototype = {


  inputProvinces_: null,

  inputAmount_: null,

  resultArea_: null,

  button_: null,

  actionType: null,

  addListeners_: function () {
    this.button_.addEventListener('click', this.handleClick_.bind(this));
  },

  handleClick_: function () {
    //alert(this.inputAmount_.value + " " + this.inputProvinces_.value + " " + this.actionType.value);

    //Spy : spies/KS
    //price 250/250

    //Archer : archer/S1 S2 S3
    //Infantry : infantry/M1 M2 M3
    //Spear : infantry/P1 P2 P3
    //Cavalery : cavalery/K1 K2 K3

    //Default values for spies
    let f = "xajax_doUpgrade";
    let unit = "spies";
    let code = "KS";
    let amount = this.inputAmount_.value;
    let times = this.inputProvinces_.value;


    //Some stats
    let priceWood = 0;
    let priceIron = 0;
    if (this.actionType.value == 'recSpies') {
      f = "xajax_doRecruit";
      priceIron = times * amount * 250;
      priceWood = times * amount * 250;
    }
    if (this.actionType.value == 'upgrArcher') {
      unit = "archer";
      code = "S3"

    }
    if (this.actionType.value == 'upgrSword') {
      unit = "infantry";
      code = "M3";
    }
    if (this.actionType.value == 'upgrSpear') {
      unit = "infantry";
      code = "P3";
    }

    let script = "(function myLoop(i) { setTimeout(function() { xajax_doSwitchProvince({ to: 'next' }); " +
      "xajax_doRecruit('" + unit + "', { unit: '" + code + "', amount: " + amount + "}); if (--i) myLoop(i);}, 3000)}) (" + times + "); ";

    localStorage.setItem("script", script);
   
    localStorage.setItem("priceWood", formatNumber(priceWood));
    localStorage.setItem("priceIron", formatNumber(priceIron));
    // alert(script);

    //this.resultArea_.value = globalValue;

  }
};
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


function recruit(type, code, amount) {
  var sendData = "<xjxobj><e><k>unit</k><v>" + code + "</v></e><e><k>amount</k><v>S" + amount + "</v></e><e><k>vexok</k><v>Btrue</v></e></xjxobj>";

  $.post("https://www147.imperiaonline.org/imperia/game_v6/game/xajax_loader.php", {
      xjxfun: "doRecruit",
      xjxr: Date.now(),
      xjxargs: [type, sendData],
    },
    function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
}

function changeProvince() {
  $.post("https://www147.imperiaonline.org/imperia/game_v6/game/xajax_loader.php", {
      xjxfun: "doSwitchProvince",
      xjxr: Date.now(),
      xjxargs: ["<xjxobj><e><k>to</k><v>Snext</v></e></xjxobj>", "<xjxobj><e><k>vexok</k><v>Btrue</v></e></xjxobj>"],
    },
    function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  window.PC = new PopupController();
});


function sleep(millisecondsToWait) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + millisecondsToWait) {

  }
}


//xajax_doSendScoutingWBAttack('bossAttack', xajax.getFormValues('sendAttackWB'));

//xajax_doSendScoutingWBAttack('bossAttack', {4614: undefined, spy-amount: "4614", attackType: "0", userId: "3001", sendAttack: "Senden"})

//{4614: undefined, spy-amount: "4614", attackType: "0", userId: "3001", sendAttack: "Senden"}