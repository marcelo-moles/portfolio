import { createApp } from 'vue'
import AOS from 'aos'

import 'aos/dist/aos.css'

import App from './App.vue'
import './style.css'

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80
})

createApp(App).mount('#app')