import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
// import noticeCustomer from '../views/notice_customer.vue';
import sidemenuAdmin from '../views/sidemenu_admin.vue';
import sidemenuCustomer from '../views/sidemenu_customer.vue';
import AddProduct from '../views/AddProduct.vue';
import ChatBot from '../views/ChatBot.vue';

Vue.use(Router);
export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/register',
      component: RegisterView
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('../views/BoardAdmin.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('../views/BoardUser.vue')
    },
    {
      path: '/admin/addProduct',
      name: 'addProduct',
      component: AddProduct
    },
    // {
    //   path: '/notice',
    //   name: 'notice-list',
    //   component: noticeCustomer
    // },
    {
      path: '/sidemenu_admin',
      name: 'sidemenu_admin',
      component: sidemenuAdmin
    },
    {
      path: '/sidemenu_customer',
      name: 'sidemenu_customer',
      component: sidemenuCustomer
    },
    {
      path: '/chatbot',
      name: 'chatbot',
      component: ChatBot
    }
  ]
});
