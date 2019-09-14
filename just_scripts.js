//Units
//Spy : spies/KS
//Archer : archer/S1 S2 S3
//Infantry : infantry/M1 M2 M3
//Spear : infantry/P1 P2 P3
//Cavalery : cavalery/K1 K2 K3

//Change function to xajax_doUpgrade for upgrading

(function myLoop(i) {
  setTimeout(function() {
    xajax_doSwitchProvince({
      to: 'next'
    });
    xajax_doRecruit('spies', {
      unit: 'KS',
      amount: 2805
    })
    if (--i) myLoop(i);
  }, 5000)
})(5);
