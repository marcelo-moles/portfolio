<template>
  <div class="section-divider"></div>
  <section id="about" class="section about">
    <div class="container">

      <!-- Section header -->
      <div class="section-header">
        <div>
          <p class="section-eyebrow">
            {{ $t('about.eyebrow') }}
          </p>

          <h2>
            {{ $t('about.title') }}
          </h2>
        </div>
      </div>

      <!-- Main content -->
      <div class="about-grid">

        <!-- Description -->
        <div class="about-content">

          <p class="about-intro">
            {{ $t('about.intro') }}
          </p>

          <p>
            {{ $t('about.description1') }}
          </p>

          <p>
            {{ $t('about.description2') }}
          </p>

          <p>
            {{ $t('about.description3') }}
          </p>

        </div>

        <!-- Stats -->
        <div class="about-stats">

          <div class="stat-card">
            <span class="stat-value">10+</span>
            <span class="stat-label">
              {{ $t('about.stats.experience') }}
            </span>
          </div>

          <div class="stat-card">
            <span class="stat-value">.NET</span>
            <span class="stat-label">
              {{ $t('about.stats.backend') }}
            </span>
          </div>

                    <div class="stat-card">
            <span class="stat-value">CA</span>
            <span class="stat-label">
              {{ $t('architecture.principles.clean.title') }}
            </span>
          </div>

          <div class="stat-card">
            <span class="stat-value">DDD</span>
            <span class="stat-label">
              {{ $t('architecture.principles.ddd.title') }}
            </span>
          </div>

          <div class="stat-card">
            <span class="stat-value">SOLID</span>
            <span class="stat-label">
              {{ $t('architecture.principles.solid.title') }}
            </span>
          </div>

          <div class="stat-card">
            <span class="stat-value">API</span>
            <span class="stat-label">
              {{ $t('about.stats.apis') }}
            </span>
          </div>

        </div>

      </div>

      <!-- Focus cards -->
      <div class="about-focus">

        <div class="focus-card">
          <div class="focus-icon">
            &lt;/&gt;
          </div>

          <div>
            <h3>{{ $t('about.focus.backend.title') }}</h3>
            <p>{{ $t('about.focus.backend.description') }}</p>
          </div>
        </div>

        <div class="focus-card">
          <div class="focus-icon">
            ◈
          </div>

          <div>
            <h3>{{ $t('about.focus.architecture.title') }}</h3>
            <p>{{ $t('about.focus.architecture.description') }}</p>
          </div>
        </div>

        <div class="focus-card">
          <div class="focus-icon">
            ⬡
          </div>

          <div>
            <h3>{{ $t('about.focus.data.title') }}</h3>
            <p>{{ $t('about.focus.data.description') }}</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
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
  margin-bottom: 65px;
}

.section-number {
  color: #00aeff;
  font-family: monospace;
  font-size: 0.9rem;
  font-weight: 600;
  padding-top: 8px;
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
   MAIN GRID
========================================= */

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
  gap: 80px;
  align-items: start;
}

/* =========================================
   CONTENT
========================================= */

.about-content {
  max-width: 760px;
}

.about-content p {
  margin: 0 0 22px;
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.85;
}

.about-content .about-intro {
  margin-bottom: 28px;
  color: #cbd5e1;
  font-size: 1.2rem;
  line-height: 1.7;
}

.about-content .about-intro::first-letter {
  color: #00aeff;
}

/* =========================================
   STATS
========================================= */

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.stat-card {
  min-height: 145px;
  padding: 25px 22px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(7, 16, 28, 0.72);
  border: 1px solid rgba(96, 165, 250, 0.16);
  border-radius: 14px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 174, 255, 0.65);
  box-shadow: 0 0 30px rgba(0, 174, 255, 0.1);
}

.stat-value {
  display: block;
  margin-bottom: 10px;

  color: #38bdf8;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.stat-label {
  color: #94a3b8;
  font-size: 0.85rem;
  line-height: 1.4;
}

/* =========================================
   FOCUS CARDS
========================================= */

.about-focus {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  margin-top: 70px;
}

.focus-card {
  display: flex;
  gap: 18px;

  padding: 28px;

  background: linear-gradient(
    145deg,
    rgba(7, 16, 28, 0.9),
    rgba(3, 7, 18, 0.75)
  );

  border: 1px solid rgba(96, 165, 250, 0.14);
  border-radius: 14px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.focus-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 174, 255, 0.55);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.25);
}

.focus-icon {
  flex-shrink: 0;

  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #38bdf8;

  background: rgba(0, 174, 255, 0.08);
  border: 1px solid rgba(0, 174, 255, 0.2);
  border-radius: 10px;

  font-family: monospace;
  font-size: 1rem;
  font-weight: 700;
}

.focus-card h3 {
  margin: 0 0 8px;

  color: #f8fafc;
  font-size: 1rem;
  font-weight: 600;
}

.focus-card p {
  margin: 0;

  color: #94a3b8;
  font-size: 0.88rem;
  line-height: 1.65;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {

  .about-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .about-content {
    max-width: 850px;
  }

  .about-stats {
    max-width: 700px;
  }

  .about-focus {
    grid-template-columns: 1fr;
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

  .about-content .about-intro {
    font-size: 1.05rem;
  }

  .about-content p {
    font-size: 0.95rem;
    line-height: 1.75;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .stat-card {
    min-height: 125px;
    padding: 20px;
  }

  .stat-value {
    font-size: 1.7rem;
  }

  .about-focus {
    margin-top: 50px;
    gap: 14px;
  }

  .focus-card {
    padding: 22px;
  }
}

@media (max-width: 430px) {

  .about-stats {
    grid-template-columns: 1fr 1fr;
  }

  .stat-card {
    min-height: 110px;
    padding: 16px;
  }

  .stat-value {
    font-size: 1.45rem;
  }

  .stat-label {
    font-size: 0.78rem;
  }

  .focus-card {
    padding: 20px;
  }
}
</style>