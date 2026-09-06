<template>
  <div class="section-divider"></div>
  <section id="experience" class="section">

    <div class="container">

      <div class="section-heading" data-aos="fade-up">
        <p class="section-label">EXPERIENCE</p>

        <h2>
          Professional experience.
        </h2>
      </div>

      <div class="experience-list">

        <article v-for="experiencia in experiencias" :key="experiencia.empresa" class="experience-card"
          data-aos="fade-up">

          <div class="experience-meta">
            <span>{{ experiencia.periodo }}</span>
          </div>

          <div class="experience-content">

            <h3>{{ experiencia.empresa }}</h3>

            <h4>
              {{ experiencia.cargo }}
            </h4>

            <ul class="experience-description">
              <li v-for="(item, index) in experiencia.descripcion" :key="index">
                <p>
                  {{ item }}.
                </p>
              </li>
            </ul>

            <div class="tags">
              <span v-for="technology in experiencia.technologies" :key="technology">
                {{ technology }}
              </span>
            </div>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { experiencias } from '../data/projects'
</script>

<style scoped>
.experience-description {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.2 !important;
}

.experience-description li {
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1.2 !important;
}
</style>
