<template>
  <div class="section-divider"></div>
  <section id="experience" class="section experience">
    <div class="container">

      <!-- Section header -->
      <div class="section-header">

        <div>
          <p class="section-eyebrow">
            {{ $t('experience.eyebrow') }}
          </p>

          <h2>
            {{ $t('experience.title') }}
          </h2>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline">

        <!-- FREE -->
        <article class="timeline-item">

          <div class="timeline-marker">
            <span></span>
          </div>

          <div class="timeline-content">

            <div class="timeline-header">
              <div>
                <span class="timeline-period">
                  {{ $t('experience.FreeSoftwareDev.period') }}
                </span>

                <h3>
                  {{ $t('experience.FreeSoftwareDev.position') }}
                </h3>

                <h4>
                  {{ $t('experience.FreeSoftwareDev.company') }}
                </h4>
              </div>

              <span class="timeline-type">
                {{ $t('experience.fullTime') }}
              </span>
            </div>

            <p class="timeline-description">
              {{ $t('experience.FreeSoftwareDev.description') }}
            </p>

            <ul class="timeline-responsibilities">
              <li
                v-for="(item, index) in $tm('experience.FreeSoftwareDev.responsibilities')"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>

            <div class="technology-list">
              <span
                v-for="(technology, index) in $tm('experience.FreeSoftwareDev.technologies')"
                :key="index"
              >
                {{ technology }}
              </span>
            </div>

          </div>
        </article>

        <!-- ICBC -->
        <article class="timeline-item">

          <div class="timeline-marker">
            <span></span>
          </div>

          <div class="timeline-content">

            <div class="timeline-header">
              <div>
                <span class="timeline-period">
                  {{ $t('experience.icbc.period') }}
                </span>

                <h3>
                  {{ $t('experience.icbc.position') }}
                </h3>

                <h4>
                  {{ $t('experience.icbc.company') }}
                </h4>
              </div>

              <span class="timeline-type">
                {{ $t('experience.fullTime') }}
              </span>
            </div>

            <p class="timeline-description">
              {{ $t('experience.icbc.description') }}
            </p>

            <ul class="timeline-responsibilities">
              <li
                v-for="(item, index) in $tm('experience.icbc.responsibilities')"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>

            <div class="technology-list">
              <span
                v-for="(technology, index) in $tm('experience.icbc.technologies')"
                :key="index"
              >
                {{ technology }}
              </span>
            </div>

          </div>
        </article>

        <!-- Visma -->
        <article class="timeline-item">

          <div class="timeline-marker">
            <span></span>
          </div>

          <div class="timeline-content">

            <div class="timeline-header">
              <div>
                <span class="timeline-period">
                  {{ $t('experience.visma.period') }}
                </span>

                <h3>
                  {{ $t('experience.visma.position') }}
                </h3>

                <h4>
                  {{ $t('experience.visma.company') }}
                </h4>
              </div>

              <span class="timeline-type">
                {{ $t('experience.fullTime') }}
              </span>
            </div>

            <p class="timeline-description">
              {{ $t('experience.visma.description') }}
            </p>

            <ul class="timeline-responsibilities">
              <li
                v-for="(item, index) in $tm('experience.visma.responsibilities')"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>

            <div class="technology-list">
              <span
                v-for="(technology, index) in $tm('experience.visma.technologies')"
                :key="index"
              >
                {{ technology }}
              </span>
            </div>

          </div>
        </article>

      </div>

    </div>
  </section>
</template>

<style scoped>
.experience {
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
  margin-bottom: 70px;
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
   TIMELINE
========================================= */

.timeline {
  position: relative;

  max-width: 1050px;
  margin: 0 auto;

  padding-left: 45px;
}

/* Vertical line */

.timeline::before {
  content: '';

  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;

  width: 1px;

  background: linear-gradient(
    to bottom,
    rgba(0, 174, 255, 0),
    rgba(0, 174, 255, 0.55) 10%,
    rgba(96, 165, 250, 0.18) 90%,
    rgba(0, 174, 255, 0)
  );
}

/* =========================================
   TIMELINE ITEM
========================================= */

.timeline-item {
  position: relative;

  padding-bottom: 55px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

/* =========================================
   MARKER
========================================= */

.timeline-marker {
  position: absolute;

  left: -45px;
  top: 25px;

  width: 21px;
  height: 21px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 174, 255, 0.65);
  border-radius: 50%;

  background: #030712;

  box-shadow:
    0 0 0 5px rgba(0, 174, 255, 0.05),
    0 0 25px rgba(0, 174, 255, 0.18);
}

.timeline-marker span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #00aeff;

  box-shadow: 0 0 12px rgba(0, 174, 255, 0.8);
}

/* =========================================
   CONTENT CARD
========================================= */

.timeline-content {
  position: relative;

   overflow: hidden;

  padding: 32px;

  background:
    linear-gradient(
      145deg,
      rgba(7, 16, 28, 0.92),
      rgba(3, 7, 18, 0.82)
    );

  border: 1px solid rgba(96, 165, 250, 0.14);
  border-radius: 8px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.timeline-content::before {
  content: '';

  position: absolute;
  top: 0;
  left: 18px;

  width: calc(100% - 36px);
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(0, 174, 255, 0.7),
    rgba(0, 174, 255, 0)
  );

  opacity: 0.7;
}

.timeline-content::before {
  content: '';

  position: absolute;

  top: 0;
  left: 8px;

  width: calc(100% - 16px);
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(0, 174, 255, 0),
    rgba(0, 174, 255, 0.75) 12%,
    rgba(56, 189, 248, 0.55) 55%,
    rgba(0, 174, 255, 0)
  );

  opacity: 0.8;
}

/* =========================================
   HEADER
========================================= */

.timeline-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 30px;

  margin-bottom: 22px;
}

.timeline-period {
  display: inline-block;

  margin-bottom: 10px;

  color: #38bdf8;

  font-family: monospace;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.timeline-header h3 {
  margin: 0 0 7px;

  color: #f8fafc;

  font-size: 1.35rem;
  line-height: 1.3;
  font-weight: 650;
}

.timeline-header h4 {
  margin: 0;

  color: #60a5fa;

  font-size: 0.95rem;
  font-weight: 500;
}

.timeline-type {
  flex-shrink: 0;

  padding: 6px 11px;

  color: #94a3b8;

  background: rgba(148, 163, 184, 0.05);

  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 20px;

  font-size: 0.72rem;
  white-space: nowrap;
}

/* =========================================
   DESCRIPTION
========================================= */

.timeline-description {
  max-width: 850px;

  margin: 0 0 22px;

  color: #cbd5e1;

  font-size: 0.98rem;
  line-height: 1.75;
}

/* =========================================
   RESPONSIBILITIES
========================================= */

.timeline-responsibilities {
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0 0 25px;
  padding: 0;

  list-style: none;
}

.timeline-responsibilities li {
  position: relative;

  padding-left: 20px;

  color: #94a3b8;

  font-size: 0.9rem;
  line-height: 1.65;
}

.timeline-responsibilities li::before {
  content: '';

  position: absolute;

  left: 0;
  top: 0.7em;

  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #00aeff;

  box-shadow: 0 0 8px rgba(0, 174, 255, 0.5);
}

/* =========================================
   TECHNOLOGIES
========================================= */

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.technology-list span {
  padding: 6px 10px;

  color: #94a3b8;

  background: rgba(0, 174, 255, 0.045);

  border: 1px solid rgba(96, 165, 250, 0.12);
  border-radius: 6px;

  font-family: monospace;
  font-size: 0.72rem;

  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.technology-list span:hover {
  color: #38bdf8;

  background: rgba(0, 174, 255, 0.08);

  border-color: rgba(0, 174, 255, 0.35);
}

/* =========================================
   TABLET
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

  .timeline {
    padding-left: 30px;
  }

  .timeline::before {
    left: 5px;
  }

  .timeline-marker {
    left: -35px;

    width: 19px;
    height: 19px;
  }

  .timeline-marker span {
    width: 6px;
    height: 6px;
  }

  .timeline-content {
    padding: 25px;
  }

  .timeline-header {
    flex-direction: column;
    gap: 12px;
  }

  .timeline-type {
    align-self: flex-start;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 430px) {

  .timeline {
    padding-left: 24px;
  }

  .timeline::before {
    left: 3px;
  }

  .timeline-marker {
    left: -30px;

    width: 17px;
    height: 17px;
  }

  .timeline-marker span {
    width: 5px;
    height: 5px;
  }

  .timeline-content {
    padding: 21px;
    border-radius: 13px;
  }

  .timeline-header h3 {
    font-size: 1.15rem;
  }

  .timeline-header h4 {
    font-size: 0.88rem;
  }

  .timeline-description {
    font-size: 0.9rem;
  }

  .timeline-responsibilities li {
    font-size: 0.85rem;
  }

  .technology-list span {
    font-size: 0.68rem;
  }
}

@media (max-width: 380px) {

  .timeline {
    padding-left: 21px;
  }

  .timeline::before {
    left: 2px;
  }

  .timeline-marker {
    left: -27px;
  }

  .timeline-content {
    padding: 18px;
  }

  .timeline-header h3 {
    font-size: 1.08rem;
  }

}
</style>