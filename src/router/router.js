import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import noticeCustomer from '../views/notice_customer.vue';
import sidemenuAdmin from '../views/sidemenu_admin.vue';
import sidemenuCustomer from '../views/sidemenu_customer.vue';
import AddProduct from '../views/AddProduct.vue';
import ChatBot from '../views/ChatBot.vue';
import noticeAddAdmin from '../views/noticeadd_admin.vue';
import noticeDetailAdmin from '../views/noticedetail_admin.vue';
import noticeDetailCustomer from '../views/noticedetail_customer.vue';
import noticeAdmin from '../views/noticemanagement_admin.vue';
import noticeUpdate from '../views/noticeupdate_admin.vue';
import addAddress from '../views/addaddress_customer.vue';
import addressList from '../views/addressList_customer.vue';
import addressUpdate from '../views/changeaddress_customer.vue';

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
    {
      path: '/notice',
      name: 'notice-list',
      component: noticeCustomer
    },
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
    },
    {
      path: '/admin/notice/add',
      name: 'noticeadd-admin',
      component: noticeAddAdmin
    },
    {
      path: '/admin/notice/detail/:nid',
      name: 'notice-detail-admin',
      component: noticeDetailAdmin
    },
    {
      path: '/notice/detail/:nid',
      name: 'notice-detail-customer',
      component: noticeDetailCustomer
    },
    {
      path: '/admin/notice',
      name: 'notice-admin',
      component: noticeAdmin
    },
    {
      path: '/admin/notice/update/:nid',
      name: 'notice-update',
      component: noticeUpdate
    },
    {
      path: '/user/address/add',
      name: 'address-add',
      component: addAddress
    },
    {
      path: '/user/address',
      name: 'address-list',
      component: addressList
    },
    {
      path: '/user/address/update/:aid',
      name: 'address-update',
      component: addressUpdate
    },
  ]
});
