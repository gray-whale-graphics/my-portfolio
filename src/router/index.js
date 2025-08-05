import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import AboutMe from '../pages/AboutMe.vue'
import UXProjects from '../pages/notebook/UXProjects.vue'
import MotionProjects from '../pages/notebook/MotionProjects.vue'
import BrandProjects from '../pages/notebook/BrandProjects.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home',
     component: Home 
  },
  { 
    path: '/about-me', 
    name: 'AboutMe', 
    component: AboutMe 
  },
  { 
    path: '/contact-me', 
    name: 'Contact', 
    component: Contact 
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetail',
    component: ProjectDetail
  },

  // dropdown routes
  { path: '/notebook/ux', name: 'UX Projects', component: UXProjects },
  { path: '/notebook/motion', name: 'Motion Projects', component: MotionProjects },
  { path: '/notebook/brand', name: 'Brand Projects', component: BrandProjects },
]

const router = createRouter({
  history: createWebHistory('/my-portfolio/'),
  routes,
})

export default router
