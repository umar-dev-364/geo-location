// Install event - cache static assets
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                './first.html',       
                './style.css',       
                './caching.js',       
                './offline.html',     
            ]);
        })
    );
});


self.addEventListener('activate', e => {
    const cacheWhitelist = ['v1', 'dynamic-cache-v1']; 
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName); 
                    }
                })
            );
        })
    );
});


self.addEventListener('fetch', e => {
    
    if (e.request.url.startsWith('ws://') || e.request.url.startsWith('wss://')) {
        return;
    }

    e.respondWith(
        caches.match(e.request).then(cachedResponse => {
           
            const fetchPromise = fetch(e.request).then(networkResponse => {
                return caches.open('dynamic-cache-v1').then(cache => {
                    
                    cache.put(e.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => {
                
                if (e.request.mode === 'navigate') {
                    return caches.match('./offline.html');
                }
            });

            
            return cachedResponse || fetchPromise;
        })
    );
});
