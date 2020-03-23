//var port = chrome.runtime.connect();
// xajax_doRecruit = function() { return xajax.request( { xjxfun: 'doRecruit' }, { parameters: arguments } ); };
// xajax_doRecruit('spies', { unit: 'KS', amount: 50 })

var scripts = document.getElementsByTagName("script");
for (i = 0; i < scripts.length; i++) { 
    if (scripts[i].innerHTML.includes('Firebase')) { 
        continue;
    }
    if (scripts[i].innerHTML.includes('io.facebookInit')) {
        continue;
    }
    if (scripts[i].innerHTML.includes('GoogleAnalyticsObject')) {
        continue;
    }
    if (scripts[i].innerHTML.includes('container.isIE')) {
        continue;
    }

    
    console.log(scripts[i].innerHTML);
    eval(scripts[i].innerHTML);
}


xajax_doRecruit = function() { return xajax.request( { xjxfun: 'doRecruit' }, { parameters: arguments } ); };
xajax_doRecruit('spies', { unit: 'KS', amount: 50 })

// xajax_doRecruit('spies', { unit: 'KS', amount: 50 })
// window.addEventListener("message", function (event) {
//     // We only accept messages from ourselves
//     if (event.source != window)
//         return;

//     if (event.data.type && (event.data.type == "FROM_PAGE")) {
//         alert(1);
//         console.log("Content script received: " + event.data.text);
//         xajax_doRecruit('spies', {unit: 'KS', amount: 50})
//         port.postMessage(event.data.text);
//     }
// }, false);

