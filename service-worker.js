"use strict";var precacheConfig=[["/copyofwebsite/index.html","088991477e97ab5a04932c65fccc6915"],["/copyofwebsite/static/css/main.47cb54db.css","3243d7240f82902cde534b8e7e4d2086"],["/copyofwebsite/static/js/main.7e5c4f28.js","70e5f734cd67111b4c48daf4e9543932"],["/copyofwebsite/static/media/GT-Sectra-Display-Light.02e55e97.eot","02e55e978be264475c6ca57e384f0949"],["/copyofwebsite/static/media/GT-Sectra-Display-Light.98eb1215.woff","98eb1215787694714d52e242758ebd77"],["/copyofwebsite/static/media/GT-Sectra-Display-Light.b6f61671.svg","b6f61671f2e98371d910ef2be30d2e40"],["/copyofwebsite/static/media/GT-Sectra-Display-Light.e1a66b4f.ttf","e1a66b4fef0cfad2f0965fd3e97e34e7"],["/copyofwebsite/static/media/MaisonNeue-Book.0c5667c9.woff","0c5667c902f0cf69a64fd3bdfc5324d4"],["/copyofwebsite/static/media/MaisonNeue-Book.40051fe6.ttf","40051fe619a599f0ee6a6fc2ea3afca0"],["/copyofwebsite/static/media/MaisonNeue-Book.a8fafd80.svg","a8fafd80b2d123486ce3609f5cf45252"],["/copyofwebsite/static/media/MaisonNeue-Book.eb2428d0.eot","eb2428d0b70a6a0d47ce24a4a94173ea"],["/copyofwebsite/static/media/icomoon.36e61228.eot","36e61228636825504f8f1a43bde36bbd"],["/copyofwebsite/static/media/icomoon.41696b3f.ttf","41696b3f958b4d525bf59708644bf610"],["/copyofwebsite/static/media/icomoon.44c77006.woff","44c770064ed078f4eb498eedf31c62a7"],["/copyofwebsite/static/media/icomoon.d617ab89.svg","d617ab8971a691886f00d92f8b4e632e"],["/copyofwebsite/static/media/identity-1.4a664f67.png","4a664f67f0d443111e318aee9f8d9b98"],["/copyofwebsite/static/media/identity-2.6a70d18e.png","6a70d18e5be212b2c64b23988bf25390"],["/copyofwebsite/static/media/maisonneue-medium-webfont.3b2c76fc.woff","3b2c76fc38a953c75aa20a4eeab3378e"],["/copyofwebsite/static/media/maisonneue-medium-webfont.97f25a05.eot","97f25a05473a69c054626327147a5363"],["/copyofwebsite/static/media/maisonneue-medium-webfont.c6c96f85.svg","c6c96f8597e363bf568a183b0b416603"],["/copyofwebsite/static/media/maisonneue-medium-webfont.f92c6fec.ttf","f92c6fec049d23897d471e9ad75cf123"],["/copyofwebsite/static/media/thumbaguirre-1.efec919f.jpg","efec919fdbadc6237c1a727b1cfcb2eb"],["/copyofwebsite/static/media/thumbbasmatichocolat-1.5ac1a30a.jpg","5ac1a30a84533e31cad398b80e34eb8e"],["/copyofwebsite/static/media/thumbbigbang-1.4107b2dd.jpg","4107b2dd2bdc86cb130ad64b2690a556"],["/copyofwebsite/static/media/thumbbluebolero-1.293be6cc.jpg","293be6cc425e28f8de01b8c016c9029a"],["/copyofwebsite/static/media/thumbblueimpression-1.ce9c4780.jpg","ce9c4780175f326ba6a89b9bcfde7fb9"],["/copyofwebsite/static/media/thumbborabora.b72621e6.jpg","b72621e60d8b96782a912d3dc74ea89c"],["/copyofwebsite/static/media/workshop-1.9e318667.png","9e3186676ee21b8001ab01134605000b"],["/copyofwebsite/static/media/workshop-2.441b84cc.png","441b84cc98eab478f1678e433cea290f"],["/copyofwebsite/static/media/x2SliderAguirre.670fe06d.jpg","670fe06de7fbe05f72cda908c532978f"],["/copyofwebsite/static/media/x2SliderBainPlatine-1.5a384f79.jpg","5a384f7939ad04794dd118d63541d8c4"],["/copyofwebsite/static/media/x2SliderDecoVaseConique-1.2474cd01.jpg","2474cd01fe94c5e221b7a705ee91f539"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),i=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var i="/copyofwebsite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});