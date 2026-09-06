<template>
  <div class="section-divider"></div>
  <section id="architecture" class="section architecture-section">

    <div class="container">

      <div class="section-heading" data-aos="fade-up">

        <p class="section-label">
          ENGINEERING
        </p>

        <h2>
          How I approach software engineering.
        </h2>

      </div>

      <div class="architecture-grid">

        <article data-aos="fade-up" v-for="architectura in aquitecturas" :key="architectura.id">

          <h3>
            {{ architectura.titulo }}
          </h3>

          <p>
            {{ architectura.descripcion }}
          </p>
        </article>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { aquitecturas } from '../data/projects' 
</script>