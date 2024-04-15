const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/Style.css',
  '/Script.js',
  '/1.jgp',
  '/2.jgp',
  '/3.jgp',
  '/4.jgp',
  '/5.jgp',
  '/6.jgp',
  '/7.jgp',
  '/8.jgp',  
  '/9.jgp',
  '/99.jgp',
  '/bullying.jpg',
  '/bullying2.jpg',
  '/bullying_2.jpg',
  '/Causas.jpg',
  '/consecuencia1.jpg',
  '/Consecuencias.jpg',
  '/DanielCampos.jpg',
  '/Empezar juego.html',
  '/Error.mp4',
  '/fondo de video4.jpg',
  '/fondo de video5.jpg',
  '/fondo para menu_2.jpg',
  '/fondo para menu_3.jpg',
  '/fondo3.jpg',
  '/game_logo.png',
  '/Imagendelbullying.jpg',
  '/index.html',
  '/info_logo.png',
  '/Información de bullying.html',
  '/JTUHjlg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aX9-obK4.ttf',
  '/JUEGODEPREGUNTAS.html',
  '/logo_empezar.jpg',
  '/logo_menu.jpg',
  '/menú.html',
  '/Paginadevideo.html',
  '/sw.js',
  '/Tipos.Webm',
  '/video1.webm',
  '/video2.webm',
  '/video3.webm',
  '/video_logo.jpg',
  '/logo_empezar.jpg',
  '/logo_menu.jpg',
  '/video_logo.jpg',
  '/Villazón.jpg',
  '/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9SIKjZhxO.ttf'
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});