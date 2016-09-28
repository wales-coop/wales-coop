self.importScripts('js/cache-polyfill.js');

const filesToCache = [
  './',
  './js/Chart.min.js',
  './css/style.css',
  './index.html',
  './offline.html',
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
    .catch(function(error) {
      console.log('Installation failed, ', error);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)
        .then(function(response) {
          return caches.open(staticCacheName)
            .then(function(cache) {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });
    }).catch(function(error) {
      console.log('Error, ', error);
      return caches.match('offline.html');
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Activating new service worker...');

  var cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
