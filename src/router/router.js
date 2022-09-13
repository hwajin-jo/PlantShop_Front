import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import noticeCustomer from '../views/notice_customer.vue';
import sidemenuAdmin from '../views/sidemenu_admin.vue';
import sidemenuCustomer from '../views/sidemenu_customer.vue';
import AddProduct from '../views/AddProduct.vue';
import ProductList from '../views/ProductList.vue';
import ProductDetail from '../views/ProductDetail.vue';
import noticeAddAdmin from '../views/noticeadd_admin.vue';
import noticeDetailAdmin from '../views/noticedetail_admin.vue';
import noticeDetailCustomer from '../views/noticedetail_customer.vue';
import noticeAdmin from '../views/noticemanagement_admin.vue';
import noticeUpdate from '../views/noticeupdate_admin.vue';
import addAddress from '../views/addaddress_customer.vue';
import addressList from '../views/addressList_customer.vue';
import addressUpdate from '../views/changeaddress_customer.vue';

import faqCustomer from '../views/faq_customer.vue';
import faqdetailCustomer from '../views/faqdetail_customer.vue';
import faqdetailAdmin from '../views/faqdetail_admin.vue';
import faqmanagementAdmin from '../views/faqmanagement_admin.vue';
import faqaddAdmin from '../views/faqadd_admin.vue';
import faqupdateAdmin from '../views/faqupdate_admin.vue';

import about from '../views/about_customer.vue';
import cartList from '../views/cart_customer.vue';

import orderConfirms from '../views/orderconfirm_customer.vue';
import orderConfirm from '../views/orderconfirm_customer_one.vue';

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
      path: '/product/:ptype',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/product/detail/:pid',
      name: 'product-detail',
      component: ProductDetail
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
    {
      path: "/faq",
      name: "faq-list",
      component: faqCustomer
    },
    {
      path: "/faq/detail/:fid",
      name: "faq-detail-customer",
      component: faqdetailCustomer
    },
    {
      path: "/admin/faq/detail_admin/:fid",
      name: "faq-detail-admin",
      component: faqdetailAdmin
    },
    {
      path: "/admin/faq",
      name: "faq-admin",
      component: faqmanagementAdmin
    },
    {
      path: "/admin/faq/add",
      name: "addfaq-admim",
      component: faqaddAdmin
    },
    {
      path: "/admin/faq/update/:fid",
      name: "update-admin",
      component: faqupdateAdmin
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/cart',
      name: 'cartlist',
      component: cartList
    },
    {
      path: '/orderconfirm',
      name: 'order-confirm',
      component: orderConfirms
    },
    {
      path: '/orderconfirm/:cid',
      name: 'order-confirm-forone',
      component: orderConfirm
    },

  ]
});
