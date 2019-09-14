(function recruit(i) {
  setTimeout(function() {
    xajax_doSwitchProvince({
      to: 'next'
    });
    
    // unit Spy
    // amount amount
    xajax_doRecruit('spies', {
      unit: 'KS',
      amount: 2805
    })
    if (--i) recruit(i);
  }, 5000)
})(5);// number of times
