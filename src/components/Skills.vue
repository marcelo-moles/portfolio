<template>
  <div class="section-divider"></div>
  <section id="skills" class="section skills">

    <div class="container">

      <!-- Section header -->
      <div class="section-header">

        <div>
          <p class="section-eyebrow">
            {{ $t('skills.eyebrow') }}
          </p>

          <h2>
            {{ $t('skills.title') }}
          </h2>
        </div>
      </div>

      <!-- Skills grid -->
      <div class="skills-grid">

        <!-- Backend -->
        <article class="skill-card skill-card-featured">

          <div class="skill-card-header">

            <div class="skill-icon">
              <Icon icon="devicon:csharp" />
            </div>

            <div>
              <span class="skill-category">
                {{ $t('skills.backend.category') }}
              </span>

              <h3>
                {{ $t('skills.backend.title') }}
              </h3>
            </div>

          </div>

          <div class="technology-list">

            <span class="technology">
              <Icon icon="devicon:csharp" />
              C#
            </span>

            <span class="technology">
              <Icon icon="devicon:dotnetcore" />
              .NET
            </span>

            <span class="technology">
              <Icon icon="devicon:dotnetcore" />
              ASP.NET Core
            </span>

            <span class="technology">
              <Icon icon="devicon:java" />
              Java
            </span>

            <span class="technology">
              <Icon icon="devicon:python" />
              Python
            </span>

            <span class="technology">
              <Icon icon="devicon:nodejs" />
              Node.js
            </span>

            <span class="technology">
              <Icon icon="mdi:api" />
              REST APIs
            </span>

          </div>

        </article>

        <!-- Architecture -->
        <article class="skill-card">

          <div class="skill-card-header">

            <div class="skill-icon">
              <Icon icon="mdi:hexagon-outline" />
            </div>

            <div>
              <span class="skill-category">
                {{ $t('skills.architecture.category') }}
              </span>

              <h3>
                {{ $t('skills.architecture.title') }}
              </h3>
            </div>

          </div>

          <div class="technology-list">

            <span class="technology">
              <Icon icon="mdi:layers-outline" />
              Clean Architecture
            </span>

            <span class="technology">
              <Icon icon="mdi:sitemap-outline" />
              DDD
            </span>

            <span class="technology">
              <Icon icon="mdi:code-braces" />
              SOLID
            </span>

            <span class="technology">
              <Icon icon="mdi:source-branch" />
              Microservices
            </span>

          </div>

        </article>

        <!-- Data -->
        <article class="skill-card">

          <div class="skill-card-header">

            <div class="skill-icon">
              <Icon icon="mdi:database-outline" />
            </div>

            <div>
              <span class="skill-category">
                {{ $t('skills.data.category') }}
              </span>

              <h3>
                {{ $t('skills.data.title') }}
              </h3>
            </div>

          </div>

          <div class="technology-list">

            <span class="technology">
              <Icon icon="devicon:microsoftsqlserver" />
              SQL Server
            </span>

            <span class="technology">
              <Icon icon="devicon:mongodb" />
              MongoDB
            </span>

            <span class="technology">
              <Icon icon="devicon:redis" />
              Redis
            </span>

            <span class="technology">
              <Icon icon="mdi:database-search-outline" />
              Dapper
            </span>

          </div>

        </article>

        <!-- Messaging -->
        <article class="skill-card">

          <div class="skill-card-header">

            <div class="skill-icon">
              <Icon icon="mdi:message-processing-outline" />
            </div>

            <div>
              <span class="skill-category">
                {{ $t('skills.messaging.category') }}
              </span>

              <h3>
                {{ $t('skills.messaging.title') }}
              </h3>
            </div>

          </div>

          <div class="technology-list">

            <span class="technology">
              <Icon icon="simple-icons:apachekafka" />
              Kafka
            </span>

            <span class="technology">
              <Icon icon="mdi:transit-connection-variant" />
              Event-driven Architecture
            </span>

          </div>

        </article>

        <!-- DevOps -->
        <article class="skill-card">

          <div class="skill-card-header">

            <div class="skill-icon">
              <Icon icon="mdi:docker" />
            </div>

            <div>
              <span class="skill-category">
                {{ $t('skills.devops.category') }}
              </span>

              <h3>
                {{ $t('skills.devops.title') }}
              </h3>
            </div>

          </div>

          <div class="technology-list">

            <span class="technology">
              <Icon icon="devicon:docker" />
              Docker
            </span>

            <span class="technology">
              <Icon icon="devicon:git" />
              Git
            </span>

            <span class="technology">
              <Icon icon="devicon:gitlab" />
              GitLab
            </span>

            <span class="technology">
              <Icon icon="mdi:infinity" />
              CI/CD
            </span>

          </div>

        </article>

        <!-- Frontend -->
        <article class="skill-card">

          <div class="skill-card-header">

            <div class="skill-icon">
              <Icon icon="devicon:vuejs" />
            </div>

            <div>
              <span class="skill-category">
                {{ $t('skills.frontend.category') }}
              </span>

              <h3>
                {{ $t('skills.frontend.title') }}
              </h3>
            </div>

          </div>

          <div class="technology-list">

            <span class="technology">
              <Icon icon="devicon:vuejs" />
              Vue 3
            </span>

            <span class="technology">
              <Icon icon="devicon:react" />
              React.js
            </span>

            <span class="technology">
              <Icon icon="devicon:typescript" />
              TypeScript
            </span>

            <span class="technology">
              <Icon icon="devicon:vitejs" />
              Vite
            </span>

            <span class="technology">
              <Icon icon="simple-icons:pinia" />
              Pinia
            </span>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.skills {
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
  margin-bottom: 60px;
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
   GRID
========================================= */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  max-width: 1100px;
  margin: 0 auto;
}

/* =========================================
   CARD
========================================= */

.skill-card {
  position: relative;
  overflow: hidden;

  min-height: 220px;
  padding: 30px;

  background:
    linear-gradient(
      145deg,
      rgba(7, 16, 28, 0.92),
      rgba(3, 7, 18, 0.82)
    );

  border: 1px solid rgba(96, 165, 250, 0.14);
  border-radius: 16px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.skill-card::before {
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
    rgba(56, 189, 248, 0.5) 60%,
    rgba(0, 174, 255, 0)
  );

  opacity: 0.8;
}

.skill-card:hover {
  transform: translateY(-5px);

  border-color: rgba(0, 174, 255, 0.45);

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.25),
    0 0 30px rgba(0, 174, 255, 0.06);
}

/* =========================================
   FEATURED
========================================= */

.skill-card-featured {
  border-color: rgba(0, 174, 255, 0.22);

  background:
    linear-gradient(
      145deg,
      rgba(7, 20, 36, 0.96),
      rgba(3, 7, 18, 0.85)
    );
}

/* =========================================
   CARD HEADER
========================================= */

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 17px;

  margin-bottom: 28px;
}

.skill-icon {
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #38bdf8;

  background: rgba(0, 174, 255, 0.07);

  border: 1px solid rgba(0, 174, 255, 0.2);
  border-radius: 11px;

  font-size: 1.45rem;

  box-shadow:
    inset 0 0 20px rgba(0, 174, 255, 0.025);
}

.skill-category {
  display: block;

  margin-bottom: 4px;

  color: #60a5fa;

  font-family: monospace;
  font-size: 0.7rem;
  font-weight: 600;

  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.skill-card h3 {
  margin: 0;

  color: #f8fafc;

  font-size: 1.25rem;
  font-weight: 650;
}

/* =========================================
   TECHNOLOGY
========================================= */

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.technology {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  min-height: 34px;

  padding: 6px 11px;

  color: #cbd5e1;

  background: rgba(0, 174, 255, 0.045);

  border: 1px solid rgba(96, 165, 250, 0.13);
  border-radius: 7px;

  font-size: 0.76rem;
  line-height: 1;

  transition:
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.technology :deep(svg) {
  width: 16px;
  height: 16px;

  flex-shrink: 0;
}

.technology:hover {
  transform: translateY(-2px);

  color: #38bdf8;

  background: rgba(0, 174, 255, 0.09);

  border-color: rgba(0, 174, 255, 0.35);
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {

  .skills-grid {
    grid-template-columns: 1fr;
    max-width: 700px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {

  .section-header {
    gap: 14px;
    margin-bottom: 45px;
  }

  .section-number {
    font-size: 0.75rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .skill-card {
    min-height: auto;
    padding: 24px;
  }

  .skill-card-header {
    margin-bottom: 22px;
  }
}

@media (max-width: 430px) {

  .skill-card {
    padding: 21px;
  }

  .skill-icon {
    width: 43px;
    height: 43px;
    font-size: 1.25rem;
  }

  .skill-card h3 {
    font-size: 1.1rem;
  }

  .technology-list {
    gap: 7px;
  }

  .technology {
    font-size: 0.7rem;
  }

  .technology :deep(svg) {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 768px) {

  .skills-grid {
    grid-template-columns: 1fr;
  }

}


@media (max-width: 430px) {

  .skill-card {
    padding: 20px;
  }

  .technology {
    gap: 7px;
  }

  .technology span {
    font-size: 0.68rem;
  }

}
</style>