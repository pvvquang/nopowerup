import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../view/Main.vue'
import AboutUs from '@/modules/AboutUs/view/main.vue';
import OurGame from '@/modules/OurGame/view/main.vue';
import OurLife from '@/modules/OurLife/view/main.vue';
import ContactUs from '@/modules/ContactUs/view/main.vue';
import JoinUs from '@/modules/JoinUs/view/main.vue';
import Blog from '@/modules/Blog/view/main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', 
    component: MainPage,
    children: [
      {
        path: '/about-us', component: AboutUs, name: "AboutUs",
      },
      {
        path: '/our-game', component: OurGame, name: "OurGame"
      },
      {
        path: '/our-life', component: OurLife, name: "OurLife"
      },
      {
        path: '/join-us', component: JoinUs, name: "JoinUs"
      },
      {
        path: '/contact-us', component: ContactUs, name: "ContactUs"
      },
      {
        path: '/blog', component: Blog, name: "Blog"
      },
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router;