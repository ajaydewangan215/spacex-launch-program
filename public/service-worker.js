// install service worker

this.addEventListener('install', event => {
//    console.log('Service Worker Installed')
})

// activate service worker
this.addEventListener('activate', event => {
    // console.log('Service worker has been Activated')
    return self.clients.claim()
})


// fetch event
this.addEventListener('fetch', event => {
    if(!navigator.onLine) {
        // console.log(event.request.url)        
    }
});