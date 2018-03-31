if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('./sw.js')
   .then( succeed => {
     console.log('Service worker registration succeeded', succeed);
   })
   .catch( error => {
     console.log('Service worker registration failed:', error);
   });
 } else {
   console.log('Service workers are not supported.');
 }