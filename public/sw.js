self.addEventListener('install', function(event){
    console.log('Installing Service Worker...', event);
});

self.addEventListener('activate', function(event){
    console.log('Activating Service Worker ...', event);
    self.clients.claim();
});

self.addEventListener('fetch', function(event){
    console.log('Fetching Service Worker ...', event);
    //self.clients.claim();
});