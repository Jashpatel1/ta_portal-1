import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login";
import Profile from "../views/Profile";
import TaAssignment from "../views/TaAssignment";
import AuthGuard from "./auth-middleware";
import Logout from "../views/Logout";
import Current from "../views/Current";
import Past from "../views/Past";
import ApprovalRequests from "../components/ApprovalRequests";
import ApproveCurrent from "../views/ApproveCurrent";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { hide: ["sidenav"] }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: { hide: ["sidenav", "app-bar"] }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: "/approvecurrent",
      name: "approvecurrent",
      component: ApproveCurrent
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/Ta",
      name: "Ta",
      component: TaAssignment
    },
    {
      path: "/current",
      name: "current",
      component: Current
    },
    {
      path: "/past",
      name: "past",
      component: Past
    },
    {
      path: "/approvalrequests",
      name: "approvalrequests",
      component: ApprovalRequests
    }
  ]
});

router.beforeEach(AuthGuard);

export default router;
