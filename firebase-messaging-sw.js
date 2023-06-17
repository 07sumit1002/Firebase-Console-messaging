importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');
const firebaseConfig = {
  apiKey: "AIzaSyBGZtqrdfZzIlzL2_6v1Zd72ZVUabX-t8A",
  authDomain: "democoding-60b0b.firebaseapp.com",
  projectId: "democoding-60b0b",
  storageBucket: "democoding-60b0b.appspot.com",
  messagingSenderId: "747547245786",
  appId: "1:747547245786:web:c47053fb20a13cf0f479e3",
  measurementId: "G-B0LWWE0RHH"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
    image: payload.data.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener('notificationclick', function(event) {
    const clickedNotification = event.notification;
    clickedNotification.close();
    event.waitUntil(
      clients.openWindow(payload.data.click_action)
    );
  });
});