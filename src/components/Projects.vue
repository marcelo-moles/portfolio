<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { projects } from '../data/projects'

const technologyIcons: Record<string, string> = {
  'C#': 'devicon:csharp',
  '.NET': 'devicon:dotnetcore',
  '.NET 8': 'devicon:dotnetcore',
  '.NET 9': 'devicon:dotnetcore',
  'ASP.NET Core': 'devicon:dotnetcore',

  'Java': 'devicon:java',
  'Python': 'devicon:python',
  'Node.js': 'devicon:nodejs',
  'NodeJS': 'devicon:nodejs',

  'Vue': 'devicon:vuejs',
  'Vue 3': 'devicon:vuejs',
  'React': 'devicon:react',
  'ReactJS': 'devicon:react',
  'TypeScript': 'devicon:typescript',
  'Vite': 'devicon:vitejs',
  'Pinia': 'devicon:pinia',

  'SQL Server': 'devicon:microsoftsqlserver',
  'MongoDB': 'devicon:mongodb',
  'Redis': 'devicon:redis',

  'Docker': 'devicon:docker',
  'Git': 'devicon:git',
  'GitLab': 'devicon:gitlab',

  'Kafka': 'simple-icons:apachekafka',

  'REST APIs': 'mdi:api',
  'REST API': 'mdi:api',
  'Dapper': 'mdi:database-search-outline',

  'Clean Architecture': 'mdi:layers-outline',
  'DDD': 'mdi:hexagon-outline',
  'Microservices': 'mdi:sitemap-outline',
  'Event-Driven': 'mdi:transit-connection-variant'
}

const getTechnologyIcon = (technology: string): string => {
  return technologyIcons[technology] ?? 'mdi:code-tags'
}
</script>

<template>
  <div class="section-divider"></div>

  <section id="projects" class="section projects-section">
    <div class="container">

      <div class="section-heading">
        <div>
          <p class="section-eyebrow">
            {{ $t('projects.eyebrow') }}
          </p>

          <h2>
            {{ $t('projects.title') }}
          </h2>
        </div>
      </div>

      <div class="projects-grid">

        <article v-for="(project, index) in projects" :key="project.id" class="project-card">

          <div class="project-card-top">

            <span class="project-index">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="project-status">
              {{ $t(`projects.items.${project.id}.status`) }}
            </span>

          </div>

          <div class="project-icon">
            <Icon icon="mdi:code-braces" />
          </div>

          <h3>
            {{ $t(`projects.items.${project.id}.title`) }}
          </h3>

          <p class="project-description">
            {{ $t(`projects.items.${project.id}.description`) }}
          </p>

          <div class="project-technologies">

            <span v-for="technology in project.technologies" :key="technology" class="technology-chip">
              <Icon :icon="getTechnologyIcon(technology)" class="technology-icon" />

              <span>
                {{ technology }}
              </span>
            </span>

          </div>

          <div class="project-footer">

            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
              class="github-button">
              <Icon icon="mdi:github" />

              <span>
                {{ $t('projects.github') }}
              </span>

              <Icon icon="mdi:arrow-top-right" />
            </a>

            <span v-else class="github-button github-disabled">
              <Icon icon="mdi:github" />

              <span>
                {{ $t('projects.github') }}
              </span>
            </span>

          </div>

        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
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

.section-heading {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 50px;
}

.section-number {
  font-family: monospace;
  font-size: 0.85rem;
  color: var(--blue);
  letter-spacing: 0.08em;
  padding-top: 8px;
}

.section-label {
  margin: 0 0 8px;
  color: var(--blue-bright);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 0;
}

/* =========================================
   GRID
========================================= */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

/* =========================================
   CARD
========================================= */

.projects-section {
  position: relative;
}

.project-card {
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  padding: 30px;

  background:
    linear-gradient(145deg,
      rgba(7, 16, 28, 0.94),
      rgba(3, 7, 18, 0.88));

  border: 1px solid rgba(96, 165, 250, 0.14);
  border-radius: 18px;

  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
}


/* Top line */

.project-card::before {
  content: '';

  position: absolute;
  top: 0;
  left: 8px;

  width: calc(100% - 16px);
  height: 1px;

  background: linear-gradient(90deg,
      rgba(0, 174, 255, 0),
      rgba(0, 174, 255, 0.8) 15%,
      rgba(56, 189, 248, 0.5) 70%,
      rgba(0, 174, 255, 0));

  opacity: 0.8;

  transition:
    opacity 0.35s ease,
    filter 0.35s ease;
}

.project-card:hover::before {
  opacity: 1;

  filter:
    drop-shadow(0 0 5px rgba(0, 174, 255, 0.9)) drop-shadow(0 0 12px rgba(0, 174, 255, 0.6));
}

/* Glow */

.project-card::after {
  content: '';

  position: absolute;

  width: 180px;
  height: 180px;

  top: -100px;
  right: -100px;

  background: rgba(0, 174, 255, 0.08);

  border-radius: 50%;

  filter: blur(45px);

  pointer-events: none;
}

.project-card:hover {
  transform: none;

  border-color: rgba(0, 174, 255, 0.75);

  background:
    linear-gradient(145deg,
      rgba(7, 20, 36, 0.98),
      rgba(3, 10, 22, 0.95));

  box-shadow:
    0 0 0 1px rgba(0, 174, 255, 0.18),
    0 0 25px rgba(0, 174, 255, 0.18),
    0 0 60px rgba(0, 174, 255, 0.10);
}

.project-card h3 {
  margin: 0 0 14px;

  color: var(--text);

  font-size: 1.35rem;
  font-weight: 600;
}

/* =========================================
   TOP
========================================= */

.project-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
}

.project-index {
  font-family: monospace;
  font-size: 0.8rem;
  color: var(--blue);
}

.project-status {
  padding: 5px 10px;

  border: 1px solid rgba(96, 165, 250, 0.16);
  border-radius: 999px;

  color: var(--text-muted);

  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* =========================================
   HEADER
========================================= */

.project-header {
  display: flex;

  align-items: center;

  gap: 16px;

  margin-bottom: 22px;
}

.project-icon {
  transition:
    border-color 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease,
    color 0.35s ease;
}

.project-card:hover .project-icon {
  border-color: rgba(0, 174, 255, 0.55);

  background: rgba(0, 174, 255, 0.10);

  color: #60d5ff;

  box-shadow:
    0 0 15px rgba(0, 174, 255, 0.18),
    0 0 30px rgba(0, 174, 255, 0.10);
}

.project-header h3 {
  margin: 0;

  color: #f8fafc;

  font-size: 1.3rem;
  font-weight: 650;

  letter-spacing: -0.02em;
}

/* =========================================
   DESCRIPTION
========================================= */

.project-description {
  margin: 0 0 24px;

  color: var(--text-soft);

  font-size: 0.95rem;
  line-height: 1.7;
}

/* =========================================
   TAGS
========================================= */

.tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: auto;

  padding-top: 5px;
}

.technology-tag {
  display: inline-flex;

  align-items: center;

  min-height: 30px;

  padding: 5px 9px;

  color: #cbd5e1;

  background: rgba(0, 174, 255, 0.045);

  border: 1px solid rgba(96, 165, 250, 0.13);

  border-radius: 6px;

  font-family: monospace;

  font-size: 0.68rem;

  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.technology-tag:hover {
  color: #38bdf8;

  background: rgba(0, 174, 255, 0.08);

  border-color: rgba(0, 174, 255, 0.35);
}

/* =========================================
   FOOTER
========================================= */

.project-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: auto;
  padding-top: 22px;

  border-top: 1px solid rgba(96, 165, 250, 0.1);
}

.project-footer>span {
  color: var(--text-muted);

  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.project-footer a {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: var(--blue-bright);

  text-decoration: none;
  font-weight: 500;

  transition: color 0.2s ease;
}


.project-footer a:hover {
  color: var(--text);
}

.project-footer svg {
  width: 15px;
  height: 15px;
}

.project-type {
  color: #64748b;

  font-family: monospace;

  font-size: 0.68rem;

  text-transform: uppercase;

  letter-spacing: 0.08em;
}

.project-link {
  display: inline-flex;

  align-items: center;

  gap: 7px;

  color: #38bdf8;

  font-size: 0.8rem;
  font-weight: 600;

  text-decoration: none;

  transition:
    color 0.25s ease,
    gap 0.25s ease;
}

.project-link :deep(svg) {
  width: 15px;
  height: 15px;
}

.project-link:hover {
  gap: 11px;

  color: #60a5fa;
}

/* =========================================
   TECHNOLOGIES
========================================= */

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;

  margin-bottom: 28px;
}

.technology-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 7px 10px;

  background: rgba(15, 23, 42, 0.7);

  border: 1px solid rgba(96, 165, 250, 0.13);
  border-radius: 8px;

  color: var(--text-soft);

  font-size: 0.78rem;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.technology-chip:hover {
  background: rgba(0, 174, 255, 0.07);

  border-color: rgba(0, 174, 255, 0.35);

  transform: translateY(-2px);
}

.technology-icon {
  width: 17px;
  height: 17px;

  flex-shrink: 0;
}

.project-index {
  color: #00aeff;
  font-family: monospace;
  font-weight: 600;
}

.project-status {
  color: #38bdf8;
  font-weight: 600;
}

.github-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 7px 12px;

  color: #38bdf8;

  background: rgba(0, 174, 255, 0.045);

  border: 1px solid rgba(0, 174, 255, 0.22);
  border-radius: 999px;

  font-size: 0.72rem;
  font-weight: 600;

  text-decoration: none;

  transition:
    color 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.github-button :deep(svg) {
  width: 16px;
  height: 16px;
}

.github-button :deep(svg:last-child) {
  width: 13px;
  height: 13px;
}

.github-button:hover {
  color: #f8fafc;

  background: rgba(0, 174, 255, 0.12);

  border-color: rgba(0, 174, 255, 0.7);

  box-shadow:
    0 0 12px rgba(0, 174, 255, 0.25),
    0 0 28px rgba(0, 174, 255, 0.10);
}

.github-disabled {
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
  box-shadow: none;
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {
  .section-heading {
    margin-bottom: 35px;
  }

  .project-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .section-heading {
    gap: 12px;
  }

  .project-card {
    padding: 20px;
  }

  .project-technologies {
    gap: 7px;
  }

  .technology-chip {
    padding: 6px 8px;
    font-size: 0.74rem;
  }

  .technology-icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 430px) {

  .project-card {
    min-height: 0;

    padding: 21px;
  }

  .project-top {
    margin-bottom: 22px;
  }

  .project-header {
    gap: 13px;
  }

  .project-icon {
    width: 43px;
    height: 43px;

    font-size: 1.2rem;
  }

  .project-header h3 {
    font-size: 1.05rem;
  }

  .project-description {
    font-size: 0.85rem;
  }

  .project-footer {
    margin-top: 25px;
  }
}

@media (max-width: 768px) {

  .projects-grid {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 430px) {

  .project-card {
    padding: 21px;
  }

}
</style>