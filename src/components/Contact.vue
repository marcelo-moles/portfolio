<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="section-divider"></div>

  <section id="contact" class="section contact">
    <div class="container">

      <div class="section-header">

        <div>
          <p class="section-eyebrow">
            {{ $t('contact.eyebrow') }}
          </p>

          <h2>
            {{ $t('contact.title') }}
          </h2>
        </div>

      </div>


      <div class="contact-layout">

        <!-- =========================================
             INTRO
        ========================================== -->

        <div class="contact-intro">

          <h3>
            {{ $t('contact.heading') }}
          </h3>

          <p>
            {{ $t('contact.description') }}
          </p>

          <p class="contact-availability">
            <span class="availability-dot"></span>

            {{ $t('contact.availability') }}
          </p>

        </div>


        <!-- =========================================
             CONTACT CARDS
        ========================================== -->

        <div class="contact-cards">

          <!-- EMAIL -->
<a
  href="mailto:juanmarcelomolina2@gmail.com"
  target="_blank" rel="noopener noreferrer"
  class="contact-card"
>
  <div class="contact-icon">
    <Icon icon="mdi:email" />
  </div>

  <div class="contact-card-content">
    <span class="contact-card-label">
      {{ $t('contact.email.label') }}
    </span>

    <span class="contact-card-value">
      juanmarcelomolina2@gmail.com
    </span>
  </div>

  <Icon icon="mdi:arrow-top-right" class="contact-arrow" />
</a>



          <!-- LINKEDIN -->

          <a href="https://www.linkedin.com/in/juan-marcelo-molina/" target="_blank" 
            rel="noopener noreferrer"
            class="contact-card">

            <div class="contact-icon">
              <Icon icon="mdi:linkedin" />
            </div>

            <div class="contact-card-content">

              <span class="contact-card-label">
                {{ $t('contact.linkedin.label') }}
              </span>

              <span class="contact-card-value">
                {{ $t('contact.linkedin.value') }}
              </span>

            </div>

            <Icon icon="mdi:arrow-top-right" class="contact-arrow" />

          </a>


          <!-- GITHUB -->

          <a href="https://github.com/marcelo-moles" target="_blank" rel="noopener noreferrer" class="contact-card">

            <div class="contact-icon">
              <Icon icon="mdi:github" />
            </div>

            <div class="contact-card-content">

              <span class="contact-card-label">
                {{ $t('contact.github.label') }}
              </span>

              <span class="contact-card-value">
                github.com/marcelo-moles
              </span>

            </div>

            <Icon icon="mdi:arrow-top-right" class="contact-arrow" />

          </a>

        </div>

      </div>

    </div>
  </section>
</template>


<style scoped>
/* =========================================
   CONTACT
========================================= */

.contact {
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
   LAYOUT
========================================= */

.contact-layout {
  display: grid;

  grid-template-columns: minmax(280px, 0.8fr) minmax(400px, 1.2fr);

  gap: 80px;

  max-width: 1050px;

  margin: 0 auto;
}


/* =========================================
   INTRO
========================================= */

.contact-intro {
  padding-top: 8px;
}

.contact-intro h3 {
  margin: 0 0 20px;

  color: #f8fafc;

  font-size: clamp(1.5rem, 3vw, 2rem);

  line-height: 1.25;

  letter-spacing: -0.03em;
}

.contact-intro p {
  max-width: 480px;

  margin: 0;

  color: #94a3b8;

  font-size: 0.95rem;

  line-height: 1.8;
}


/* =========================================
   AVAILABILITY
========================================= */

.contact-availability {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-top: 28px !important;

  color: #cbd5e1 !important;

  font-size: 0.82rem !important;
}

.availability-dot {
  width: 8px;
  height: 8px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #22c55e;

  box-shadow:
    0 0 10px rgba(34, 197, 94, 0.7);
}


/* =========================================
   CONTACT CARDS
========================================= */

.contact-cards {
  display: flex;

  flex-direction: column;

  gap: 14px;
}


.contact-card {
  position: relative;

  display: flex;

  align-items: center;

  gap: 18px;

  padding: 20px 22px;

  color: inherit;

  text-decoration: none;

  background:
    linear-gradient(145deg,
      rgba(7, 16, 28, 0.92),
      rgba(3, 7, 18, 0.82));

  border: 1px solid rgba(96, 165, 250, 0.14);

  border-radius: 8px;

  overflow: hidden;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}


/* Top line */

.contact-card::before {
  content: '';

  position: absolute;

  top: 0;
  left: 8px;

  width: calc(100% - 16px);

  height: 1px;

  background: linear-gradient(90deg,
      rgba(0, 174, 255, 0),
      rgba(0, 174, 255, 0.65) 20%,
      rgba(56, 189, 248, 0.4) 60%,
      rgba(0, 174, 255, 0));

  opacity: 0.7;
}


.contact-card:hover {
  transform: translateX(5px);

  border-color: rgba(0, 174, 255, 0.4);

  background:
    linear-gradient(145deg,
      rgba(7, 20, 36, 0.96),
      rgba(3, 9, 20, 0.9));

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.25),
    0 0 25px rgba(0, 174, 255, 0.05);
}


/* =========================================
   ICON
========================================= */

.contact-icon {
  width: 44px;
  height: 44px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  color: #38bdf8;

  background: rgba(0, 174, 255, 0.06);

  border: 1px solid rgba(0, 174, 255, 0.16);

  border-radius: 9px;

  font-size: 1.25rem;

  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.contact-card:hover .contact-icon {
  background: rgba(0, 174, 255, 0.1);

  border-color: rgba(0, 174, 255, 0.35);

  box-shadow:
    0 0 18px rgba(0, 174, 255, 0.1);
}


/* =========================================
   CONTENT
========================================= */

.contact-card-content {
  display: flex;

  flex-direction: column;

  min-width: 0;

  gap: 4px;

  flex: 1;
}

.contact-card-label {
  color: #64748b;

  font-size: 0.7rem;

  font-weight: 600;

  letter-spacing: 0.1em;

  text-transform: uppercase;
}

.contact-card-value {
  color: #cbd5e1;

  font-size: 0.9rem;

  line-height: 1.4;

  overflow-wrap: anywhere;

  transition: color 0.25s ease;
}

.contact-card:hover .contact-card-value {
  color: #38bdf8;
}


/* =========================================
   ARROW
========================================= */

.contact-arrow {
  flex-shrink: 0;

  color: #475569;

  font-size: 1.1rem;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.contact-card:hover .contact-arrow {
  color: #38bdf8;

  transform: translate(2px, -2px);
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {

  .contact-layout {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .contact-intro p {
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

  .contact-layout {
    gap: 35px;
  }

}


@media (max-width: 430px) {

  .contact-card {
    gap: 13px;

    padding: 17px;
  }

  .contact-icon {
    width: 40px;
    height: 40px;

    font-size: 1.1rem;
  }

  .contact-card-value {
    font-size: 0.82rem;
  }

  .contact-arrow {
    font-size: 1rem;
  }

}

@media (max-width: 380px) {

  .contact-card {
    padding: 15px;
  }

  .contact-card-content {
    gap: 3px;
  }

  .contact-card-label {
    font-size: 0.65rem;
  }

  .contact-card-value {
    font-size: 0.78rem;
  }

}
</style>