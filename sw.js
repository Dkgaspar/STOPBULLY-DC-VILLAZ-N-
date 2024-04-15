const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/Style.css',
  '/Script.js',
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',  
  '/9.jpg',
  '/99.jpg',
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
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});