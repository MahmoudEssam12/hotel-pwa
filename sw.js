let cachname = "static-cache";
let cachedassests = [
    "../../index.html",
    "../../blog.html",
    "../../rooms.html",
    "../../services.html",
    "../../single.html",
    "../../contact-us.html",
    "../css/main.css"
];

self.addEventListener("install", async function () {
    console.log("from install")
    let createdcache = await caches.open(cachname);

    await createdcache.add(cachedassests);
    await self.skipWaiting();
});

self.addEventListener("activate", async function () {
    console.log("from activate")

});

self.addEventListener("fetch", async function (event) {
    if (!navigator.online) {
        return await event.respondWith(cachefirst(event.request))
    } else {
        return await event.respondWith(networkfirst(event.request))
    }
})

async function cachefirst(req) {
    return await caches.match(req) || await caches.match(fullback.json)
}

async function networkfirst() {
    let dynamiccache = await caches.open("dynamic-cache");
    let resp = await fetch(req);
    await dynamiccache.put(req, resp.clone());
    return resp
}