<template>
  <div class="section-divider"></div>
  <section id="architecture" class="section architecture">

    <div class="container">

      <!-- Section header -->
      <div class="section-header">
        <div>
          <p class="section-eyebrow">
            {{ $t('architecture.eyebrow') }}
          </p>

          <h2>
            {{ $t('architecture.title') }}
          </h2>
        </div>
      </div>

      <!-- Introduction -->
      <div class="architecture-intro">
        <p>
          {{ $t('architecture.description') }}
        </p>
      </div>

      <!-- Architecture diagram -->
      <div class="architecture-diagram">

        <div class="architecture-layer clients">
          <div class="layer-icon">
            <Icon icon="mdi:monitor-dashboard" />
          </div>

          <div class="layer-content">
            <span class="layer-label">
              {{ $t('architecture.layers.clients.label') }}
            </span>

            <strong>
              {{ $t('architecture.layers.clients.title') }}
            </strong>

            <small>
              {{ $t('architecture.layers.clients.description') }}
            </small>
          </div>
        </div>

        <div class="architecture-arrow">
          <Icon icon="mdi:arrow-down" />
        </div>

        <div class="architecture-layer api">
          <div class="layer-icon">
            <Icon icon="mdi:api" />
          </div>

          <div class="layer-content">
            <span class="layer-label">
              {{ $t('architecture.layers.api.label') }}
            </span>

            <strong>
              {{ $t('architecture.layers.api.title') }}
            </strong>

            <small>
              {{ $t('architecture.layers.api.description') }}
            </small>
          </div>
        </div>

        <div class="architecture-arrow">
          <Icon icon="mdi:arrow-down" />
        </div>

        <div class="architecture-layer application">
          <div class="layer-icon">
            <Icon icon="mdi:application-cog-outline" />
          </div>

          <div class="layer-content">
            <span class="layer-label">
              {{ $t('architecture.layers.application.label') }}
            </span>

            <strong>
              {{ $t('architecture.layers.application.title') }}
            </strong>

            <small>
              {{ $t('architecture.layers.application.description') }}
            </small>
          </div>
        </div>

        <div class="architecture-arrow">
          <Icon icon="mdi:arrow-down" />
        </div>

        <div class="architecture-layer domain">
          <div class="layer-icon">
            <Icon icon="mdi:hexagon-outline" />
          </div>

          <div class="layer-content">
            <span class="layer-label">
              {{ $t('architecture.layers.domain.label') }}
            </span>

            <strong>
              {{ $t('architecture.layers.domain.title') }}
            </strong>

            <small>
              {{ $t('architecture.layers.domain.description') }}
            </small>
          </div>
        </div>

        <div class="architecture-arrow">
          <Icon icon="mdi:arrow-down" />
        </div>

        <div class="architecture-layer infrastructure">
          <div class="layer-icon">
            <Icon icon="mdi:server-network" />
          </div>

          <div class="layer-content">
            <span class="layer-label">
              {{ $t('architecture.layers.infrastructure.label') }}
            </span>

            <strong>
              {{ $t('architecture.layers.infrastructure.title') }}
            </strong>

            <small>
              {{ $t('architecture.layers.infrastructure.description') }}
            </small>
          </div>
        </div>

      </div>

      <!-- Engineering principles -->
      <div class="architecture-principles">

        <article class="principle-card">
          <div class="principle-icon">
            <Icon icon="mdi:layers-outline" />
          </div>

          <h3>
            {{ $t('architecture.principles.clean.title') }}
          </h3>

          <p>
            {{ $t('architecture.principles.clean.description') }}
          </p>
        </article>

        <article class="principle-card">
          <div class="principle-icon">
            <Icon icon="mdi:sitemap-outline" />
          </div>

          <h3>
            {{ $t('architecture.principles.ddd.title') }}
          </h3>

          <p>
            {{ $t('architecture.principles.ddd.description') }}
          </p>
        </article>

        <article class="principle-card">
          <div class="principle-icon">
            <Icon icon="mdi:source-branch" />
          </div>

          <h3>
            {{ $t('architecture.principles.microservices.title') }}
          </h3>

          <p>
            {{ $t('architecture.principles.microservices.description') }}
          </p>
        </article>

        <article class="principle-card">
          <div class="principle-icon">
            <Icon icon="mdi:transit-connection-variant" />
          </div>

          <h3>
            {{ $t('architecture.principles.events.title') }}
          </h3>

          <p>
            {{ $t('architecture.principles.events.description') }}
          </p>
        </article>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.architecture {
  position: relative;
  overflow: hidden;
}

/* =========================================
   SECTION HEADER
========================================= */

.section-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;

  margin-bottom: 40px;
}

.section-number {
  padding-top: 8px;

  color: #00aeff;

  font-family: monospace;
  font-size: 0.9rem;
  font-weight: 600;
}

.section-eyebrow {
  margin: 0 0 8px;

  color: #38bdf8;

  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-header h2 {
  margin: 0;

  color: #f8fafc;

  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

/* =========================================
   INTRO
========================================= */

.architecture-intro {
  max-width: 780px;

  margin: 0 auto 55px;

  text-align: center;
}

.architecture-intro p {
  margin: 0;

  color: #94a3b8;

  font-size: 1rem;
  line-height: 1.8;
}

/* =========================================
   DIAGRAM
========================================= */

.architecture-diagram {
  max-width: 850px;

  margin: 0 auto;
}

/* =========================================
   LAYER
========================================= */

.architecture-layer {
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  gap: 20px;

  min-height: 100px;

  padding: 22px 28px;

  background:
    linear-gradient(
      145deg,
      rgba(7, 16, 28, 0.94),
      rgba(3, 7, 18, 0.86)
    );

  border: 1px solid rgba(96, 165, 250, 0.15);
  border-radius: 14px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.architecture-layer::before {
  content: '';

  position: absolute;

  top: 0;
  left: 8px;

  width: calc(100% - 16px);
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(0, 174, 255, 0),
    rgba(0, 174, 255, 0.7) 20%,
    rgba(56, 189, 248, 0.45) 60%,
    rgba(0, 174, 255, 0)
  );
}

.architecture-layer:hover {
  transform: translateX(5px);

  border-color: rgba(0, 174, 255, 0.42);

  box-shadow:
    0 15px 45px rgba(0, 0, 0, 0.2),
    0 0 25px rgba(0, 174, 255, 0.05);
}

/* =========================================
   LAYER ICON
========================================= */

.layer-icon {
  flex-shrink: 0;

  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #38bdf8;

  background: rgba(0, 174, 255, 0.07);

  border: 1px solid rgba(0, 174, 255, 0.2);
  border-radius: 12px;

  font-size: 1.45rem;
}

.layer-content {
  display: flex;
  flex-direction: column;

  gap: 3px;
}

.layer-label {
  color: #60a5fa;

  font-family: monospace;
  font-size: 0.68rem;
  font-weight: 600;

  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.layer-content strong {
  color: #f8fafc;

  font-size: 1.05rem;
  font-weight: 650;
}

.layer-content small {
  color: #94a3b8;

  font-size: 0.82rem;
}

/* =========================================
   ARROWS
========================================= */

.architecture-arrow {
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00aeff;

  font-size: 1.25rem;

  opacity: 0.7;
}

/* =========================================
   LAYER EMPHASIS
========================================= */

.domain {
  border-color: rgba(0, 174, 255, 0.3);

  box-shadow:
    0 0 35px rgba(0, 174, 255, 0.05);
}

/* =========================================
   PRINCIPLES
========================================= */

.architecture-principles {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 16px;

  margin-top: 55px;
}

.principle-card {
  padding: 25px 22px;

  background: rgba(7, 16, 28, 0.72);

  border: 1px solid rgba(96, 165, 250, 0.13);
  border-radius: 13px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.principle-card:hover {
  transform: translateY(-5px);

  border-color: rgba(0, 174, 255, 0.4);

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.2);
}

.principle-icon {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 18px;

  color: #38bdf8;

  background: rgba(0, 174, 255, 0.07);

  border: 1px solid rgba(0, 174, 255, 0.18);
  border-radius: 9px;

  font-size: 1.2rem;
}

.principle-card h3 {
  margin: 0 0 10px;

  color: #f8fafc;

  font-size: 0.98rem;
}

.principle-card p {
  margin: 0;

  color: #94a3b8;

  font-size: 0.82rem;
  line-height: 1.65;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {

  .architecture-principles {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {

  .section-header {
    gap: 14px;

    margin-bottom: 35px;
  }

  .section-number {
    font-size: 0.75rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .architecture-intro {
    margin-bottom: 40px;
  }

  .architecture-intro p {
    font-size: 0.92rem;
  }

  .architecture-layer {
    min-height: 90px;

    padding: 18px 20px;

    gap: 15px;
  }

  .layer-icon {
    width: 43px;
    height: 43px;

    font-size: 1.2rem;
  }

  .layer-content strong {
    font-size: 0.95rem;
  }

  .layer-content small {
    font-size: 0.75rem;
  }

  .architecture-arrow {
    height: 35px;
  }

  .architecture-principles {
    grid-template-columns: 1fr;
    gap: 12px;

    margin-top: 40px;
  }

  .principle-card {
    padding: 21px;
  }
}

@media (max-width: 430px) {

  .architecture-layer {
    padding: 17px;

    gap: 12px;
  }

  .layer-icon {
    width: 39px;
    height: 39px;

    font-size: 1rem;
  }

  .layer-label {
    font-size: 0.62rem;
  }

  .layer-content strong {
    font-size: 0.88rem;
  }

  .layer-content small {
    font-size: 0.7rem;
    line-height: 1.4;
  }
}

@media (max-width: 768px) {

  .architecture-layer {
    grid-template-columns: 1fr;
  }

  .architecture-arrow {
    transform: rotate(90deg);
  }

}
</style>