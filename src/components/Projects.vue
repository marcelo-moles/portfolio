<script setup lang="ts">
import { projects } from '../data/projects'
</script>

<template>
  <div class="section-divider"></div>
  <section id="projects" class="section">
    <div class="container">

      <p class="section-label">SELECTED WORK</p>

      <h2>Featured Projects</h2>

      <div class="projects-grid">

        <article v-for="project in projects" :key="project.title" class="project-card">
          <div class="project-header">
            <span class="project-number">
              {{ project.status }}
            </span>

            <h3>{{ project.title }}</h3>
          </div>

          <p>
            {{ project.description }}
          </p>

          <div class="tags">
            <span v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </span>
          </div>

          <div class="project-links">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>