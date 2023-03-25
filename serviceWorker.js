const staticSantoshData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/pdf/santosh_resume.pdf",
  "/assets/img/blob.svg",
  "/assets/img/profile1.png",
  "/assets/img/profile2.jpg",
  "/assets/img/profile3.png",
  "/assets/img/skills/react.svg",
  "/assets/img/skills/typescript.svg",
  "/assets/img/skills/javascript.svg",
  "/assets/img/skills/html.svg",
  "/assets/img/skills/css.svg",
  "/assets/img/skills/firebase.svg",
  "/assets/img/portfolio/Decentralized Voting (dVoting).PNG",
  "/assets/img/portfolio/Face_Recoginition_Attendance_Management_System.PNG",
  "/assets/img/portfolio/Janjyoti_Service_Community.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticSantoshData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
