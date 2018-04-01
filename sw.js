const cacheName = 'cache1';

const filesToCache = [
   'css/styles.css',
   'data/restaurants.json',
   'img/1.jpg',
   'img/2.jpg',
   'img/3.jpg',
   'img/4.jpg',
   'img/5.jpg',
   'img/6.jpg',
   'img/7.jpg',
   'img/8.jpg',
   'img/9.jpg',
   'img/10.jpg',
   'js/dbhelper.js',
   'js/main.js',
   'js/restaurant_info.js',
   'js/serviceWorker.js',
   'index.html',
   'restaurant.html'
];

/**
 * 
 * @description - install the cache and adding all the cacheable(not changing) files
 */

self.addEventListener('install', e => {
   e.waitUntil(
      caches.open(cacheName)
      .then( cache => {
         return cache.addAll(filesToCache);
      })
      .catch(error => {
        console.log(error);
      })
   );
});


/**
 * 
 * @description - checking for fetch event and use local cache if it is available
 */

self.addEventListener('fetch', e => {
   e.respondWith(
     caches.match(e.request).then( response => {
       return response || fetch(e.request);
     })
   );
 });