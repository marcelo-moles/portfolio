<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Architecture from './components/Architecture.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'


let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12
    }
  )

  const elements = document.querySelectorAll(
    '.section, .timeline-item, .project-card, .skill-card, .architecture-layer, .principle-card, .contact-card'
  )

  elements.forEach((element) => {
    element.classList.add('scroll-reveal')
    observer?.observe(element)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

</script>

<template>
  <Navbar />

  <main>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Architecture />
    <Education />
    <Contact />
  </main>

  <Footer />
</template>
