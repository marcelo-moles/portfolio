<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="section-divider"></div>

  <section id="education" class="section education">
    <div class="container">

      <!-- =========================================
           SECTION HEADER
      ========================================== -->

      <div class="section-header">

        <div>
          <p class="section-eyebrow">
            {{ $t('education.eyebrow') }}
          </p>

          <h2>
            {{ $t('education.title') }}
          </h2>
        </div>

      </div>


      <!-- =========================================
           TIMELINE
      ========================================== -->

      <div class="timeline">


        <!-- =======================================
             ANALISTA DE SISTEMAS
        ======================================== -->

        <article class="timeline-item">
          <div class="timeline-marker">
            <span></span>
          </div>

          <div class="timeline-content">

            <div class="timeline-header">

              <div>

                <span class="timeline-period">
                  2003
                </span>

                <h3>
                  {{ $t('education.systems.title') }}
                </h3>

                <h4>
                  {{ $t('education.systems.institution') }}
                </h4>

              </div>

              <div class="education-icon">
                <Icon icon="mdi:school-outline" />
              </div>

            </div>


            <p class="timeline-description">
              {{ $t('education.systems.description') }}
            </p>


            <div class="education-details">

              <div class="education-detail">

                <Icon icon="mdi:certificate-outline" />

                <span>
                  {{ $t('education.completed') }}
                </span>

              </div>


              <div class="education-detail">

                <Icon icon="mdi:star-outline" />

                <span>
                  {{ $t('education.systems.average') }}
                </span>

              </div>

            </div>

          </div>

        </article>


        <!-- =======================================
             ANALISTA EN ADMINISTRACIÓN
        ======================================== -->

        <article class="timeline-item">

          <div class="timeline-marker">
            <span></span>
          </div>

          <div class="timeline-content">

            <div class="timeline-header">

              <div>

                <span class="timeline-period">
                  2002
                </span>

                <h3>
                  {{ $t('education.business.title') }}
                </h3>

                <h4>
                  {{ $t('education.business.institution') }}
                </h4>

              </div>

              <div class="education-icon">
                <Icon icon="mdi:briefcase-outline" />
              </div>

            </div>


            <p class="timeline-description">
              {{ $t('education.business.description') }}
            </p>


            <div class="education-details">

              <div class="education-detail">

                <Icon icon="mdi:certificate-outline" />

                <span>
                  {{ $t('education.completed') }}
                </span>

              </div>


              <div class="education-detail">

                <Icon icon="mdi:star-outline" />

                <span>
                  {{ $t('education.business.average') }}
                </span>

              </div>

            </div>

          </div>

        </article>


        <!-- =======================================
             LICENCIATURA
        ======================================== -->

        <article class="timeline-item">

          <div class="timeline-marker">
            <span></span>
          </div>

          <div class="timeline-content">

            <div class="timeline-header">

              <div>

                <span class="timeline-period">
                  2022
                </span>

                <h3>
                  {{ $t('education.degree.title') }}
                </h3>

                <h4>
                  {{ $t('education.degree.institution') }}
                </h4>

              </div>

              <div class="education-icon">
                <Icon icon="mdi:school-outline" />
              </div>

            </div>


            <p class="timeline-description">
              {{ $t('education.degree.description') }}
            </p>


            <div class="education-details">

              <div class="education-detail">

                <Icon icon="mdi:progress-check" />

                <span>
                  {{ $t('education.degree.status') }}
                </span>

              </div>


              <div class="education-detail">

                <Icon icon="mdi:star-outline" />

                <span>
                  {{ $t('education.degree.average') }}
                </span>

              </div>

            </div>

          </div>

        </article>


      </div>

    </div>
  </section>
</template>


<style scoped>

/* =========================================
   EDUCATION
========================================= */

.education {
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
   SAME GEOMETRY AS EXPERIENCE
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

  box-shadow:
    0 0 12px rgba(0, 174, 255, 0.8);
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


/* Top line */

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


/* Hover */

.timeline-content:hover {
  transform: translateY(-4px);

  border-color: rgba(0, 174, 255, 0.4);

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.3),
    0 0 25px rgba(0, 174, 255, 0.06);
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


/* Year */

.timeline-period {
  display: inline-block;

  margin-bottom: 10px;

  color: #38bdf8;

  font-family: monospace;

  font-size: 0.8rem;
  font-weight: 600;

  letter-spacing: 0.04em;
}


/* Title */

.timeline-header h3 {
  margin: 0 0 7px;

  color: #f8fafc;

  font-size: 1.35rem;

  line-height: 1.3;

  font-weight: 650;
}


/* Institution */

.timeline-header h4 {
  margin: 0;

  color: #60a5fa;

  font-size: 0.95rem;

  font-weight: 500;
}


/* =========================================
   EDUCATION ICON
========================================= */

.education-icon {
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #38bdf8;

  background: rgba(0, 174, 255, 0.06);

  border: 1px solid rgba(0, 174, 255, 0.18);

  border-radius: 10px;

  font-size: 1.4rem;

  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.timeline-content:hover .education-icon {
  border-color: rgba(0, 174, 255, 0.35);

  background: rgba(0, 174, 255, 0.09);

  box-shadow:
    0 0 20px rgba(0, 174, 255, 0.1);
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
   EDUCATION DETAILS
========================================= */

.education-details {
  display: flex;

  flex-wrap: wrap;

  gap: 24px;

  margin: 0;

  padding-top: 18px;

  border-top: 1px solid rgba(96, 165, 250, 0.1);
}

.education-detail {
  display: flex;

  align-items: center;

  gap: 8px;

  color: #94a3b8;

  font-size: 0.8rem;
}

.education-detail svg {
  width: 17px;
  height: 17px;

  flex-shrink: 0;

  color: #38bdf8;
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

  .education-icon {
    width: 42px;
    height: 42px;

    font-size: 1.2rem;
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

  .education-detail {
    font-size: 0.78rem;
  }

  .education-details {
    flex-direction: column;

    gap: 10px;
  }

  .education-icon {
    width: 38px;
    height: 38px;

    border-radius: 9px;

    font-size: 1.1rem;
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