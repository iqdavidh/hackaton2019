import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Principal from './components/Principal.vue';
import Notificaciones from "./components/Notificaciones.vue";

// import DetallePelicula from "./components/DetallePelicula";
// import Nuevapelicula from "./components/Nuevapelicula";

const routes=[
  { path:'/' , name:'home', component: Principal},
  { path:'/notificacion' , name:'listadoNotificacion', component: Notificaciones},
  // { path:'/peliculas/:id' , name:'detallePelicula', component: DetallePelicula, props:true},
  // { path:'/nuevapeli' , name:'nuevapeli', component: Nuevapelicula},
];

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router =new VueRouter({routes});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
