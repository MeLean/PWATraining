var theprompt;
//creating a promise if Browser do not support it
if(!window.Promise){
    window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js') //, {scope:'/help/'}
    .then(function(){
        console.log('ServiceWorker has been registered!');
    });
}

window.addEventListener('beforepinstallprompt', function(event){
    log.console('beforepinstallprompt trigerd!')
    event.preventDefault();
    theprompt = event;
    return false;
});