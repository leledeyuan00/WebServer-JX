import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    name: "main",
    meta: {
      title:
        "JiangXin Robotics Laboratory",
      // Description: 'The 2020 IEEE International Conference on Real-time Computing and Robotics (IEEE RCAR 2020) will take place from August 2 to 6, 2020 in Asahikawa, Japan. The objective of this conference is to provide a forum for researchers in robotics and real-time computing to share the latest results and to explore the opportunity of research collaboration. With wide applications of robots in industry and services sectors, real-time computing plays one of the major roles in various topics in robotics including real-time control, human-robot interactions, sensor perception and fusion, robot intelligence, etc. The scope of IEEE RCAR 2020 covers research, development and applications in the dynamic and exciting areas of real-time computing and robotics.',
      // Keywords: 'IEEE, RCAR, Robot, robotic, conference, automation, society, www.ieee-rcar.org, ieee-rcar',
    },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import(/* */ "../views/Home.vue")
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/research",
        name: "Research",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Research.vue"),
      },
      {
        path: "/people",
        name: "People",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/People.vue"),
      },
      {
        path: "/course",
        name: "Courses",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Course.vue"),
      },
      {
        path: "/position",
        name: "Position",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Position.vue"),
      },
      {
        path: "/pubs",
        name: "Publication",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Publication.vue"),
      },
      {
        path: "/contact",
        name: "Contact",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
      },

    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
