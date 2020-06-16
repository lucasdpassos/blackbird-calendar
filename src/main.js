import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);


Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC8gkNv7Aw0fQ0I8zLreT2O_R4m4jV02C4",
    authDomain: "blackbird-9627e.firebaseapp.com",
    databaseURL: "https://blackbird-9627e.firebaseio.com",
    projectId: "blackbird-9627e",
    storageBucket: "blackbird-9627e.appspot.com",
    messagingSenderId: "669506215504",
    appId: "1:669506215504:web:dc4510229cb07cf506bb55"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
