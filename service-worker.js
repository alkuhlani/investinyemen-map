if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"e404e992e83faf13e0d635fd8b14b246","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"c1ee39e432575740a35756f83d69d5fd","url":"index.html"},{"revision":"4771227e6cc0d5c271f16bf7c35e199e","url":"precache-manifest.4771227e6cc0d5c271f16bf7c35e199e.js"},{"revision":"f1633fbfd131a3d0729326867d23eab9","url":"static/css/15.2f84a444.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"980a3ac3e93fd334f3c009fc1bcb21e4","url":"static/js/1.67b69ea2.chunk.js"},{"revision":"c63b52b48f5fa5d745e63e23d72a413c","url":"static/js/10.81c6ac12.chunk.js"},{"revision":"89b013e2c116e11f7989ae077cf4681a","url":"static/js/11.ce003640.chunk.js"},{"revision":"c20c9b5494e0fcf620d8f2cc5a30da67","url":"static/js/12.d1e1b504.chunk.js"},{"revision":"096fee898e0b50ec5b4485ef2cdd4737","url":"static/js/13.96ce3f32.chunk.js"},{"revision":"91558337908a8145f425974e0974400f","url":"static/js/14.e55bddd9.chunk.js"},{"revision":"31f1c24b816b34d97cc032d7934f1fe3","url":"static/js/15.7632d31f.chunk.js"},{"revision":"535fb5f061834d8725e10ac736c17b3a","url":"static/js/16.32c6628d.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"445dae38d859ca49b4e70e9c2f17afd4","url":"static/js/18.dd49527b.chunk.js"},{"revision":"cc6cc1af065cde69c59baab689f4ae52","url":"static/js/19.e036a738.chunk.js"},{"revision":"22a0ea3abb6535a17d1d2ae3bbadffe7","url":"static/js/2.852d72c6.chunk.js"},{"revision":"dfa1ff8e73add8cb25cdc052e11dbd8e","url":"static/js/20.a7f84ef2.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"e60c36cc1f844c45192e42d96f18b27f","url":"static/js/22.b9a592e5.chunk.js"},{"revision":"20678717998541bedde255012135236f","url":"static/js/23.69429073.chunk.js"},{"revision":"f7785060318c3486d59b0a688735e427","url":"static/js/24.696a22be.chunk.js"},{"revision":"48f6c0a7b66d5583292d123916c6bcab","url":"static/js/25.bb64025f.chunk.js"},{"revision":"9a643484d17f51767f4b429b8a793b43","url":"static/js/26.c4707007.chunk.js"},{"revision":"961b2dbf8c50f7d3373b42d2b9a387a9","url":"static/js/27.677fa7e5.chunk.js"},{"revision":"072e02b050fd03d76ce15a4142c60e77","url":"static/js/28.d647d09f.chunk.js"},{"revision":"11a3a8e2702fc75b5ce45dcf0774ab36","url":"static/js/29.bf273d4f.chunk.js"},{"revision":"a0ac6d90f855433940989d7fbf6d851f","url":"static/js/3.6fe98d4a.chunk.js"},{"revision":"c47e20fcc56ce1762656c1a596ec9c40","url":"static/js/30.ef9995d3.chunk.js"},{"revision":"0fed23e6802ff990b30f049c0d21acd4","url":"static/js/31.e89f5f0f.chunk.js"},{"revision":"c8c006e2105c0adc8bbc7b40be5f7e61","url":"static/js/32.635cfbe3.chunk.js"},{"revision":"2b3d244868b4ad3e2afa23a4bedb6bae","url":"static/js/33.6134c45d.chunk.js"},{"revision":"f546262593941e21c60a463b055926c2","url":"static/js/34.3e87b951.chunk.js"},{"revision":"40e57a7a1a81f35cd40b5a7451223f5f","url":"static/js/35.ff41435b.chunk.js"},{"revision":"31e8c772bf29372def5af28c7f85b2c9","url":"static/js/36.1108ee27.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"fcac75de0cd121f61341040d4e3601d7","url":"static/js/4.d0f1bb74.chunk.js"},{"revision":"a2dd7702cc8797a5895a81e8cc53f551","url":"static/js/5.518f6213.chunk.js"},{"revision":"df3d8829d2d6cb82e19873efaf4ca135","url":"static/js/6.8f55c323.chunk.js"},{"revision":"da5f63b3bf8fa1032fbce31913f0bc5c","url":"static/js/9.2135df39.chunk.js"},{"revision":"9b1747d31c97110fed2a49c5b8f15e7c","url":"static/js/main.e8c77cef.chunk.js"},{"revision":"6e1dccc045a0d233844f69d875125c4c","url":"static/js/runtime-main.681370e6.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
