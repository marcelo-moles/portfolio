import { createApp } from 'vue'
import AOS from 'aos'

import 'aos/dist/aos.css'

import App from './App.vue'
import i18n from './i18n'
import './style.css'

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80
})

createApp(App)
  .use(i18n)
  .mount('#app')