<template>
  <div class="section-divider"></div>
  <section id="home" class="section hero">

    <!-- Background effects -->
    <div class="hero-background">
      <div class="hero-glow hero-glow-left"></div>
      <div class="hero-glow hero-glow-right"></div>

      <div class="hero-grid"></div>
    </div>


    <div class="container hero-container">

      <!-- =====================================
           CONTENT
      ====================================== -->

      <div class="hero-content">

        <p class="hero-eyebrow">
          {{ $t('hero.title') }}
        </p>


        <h1>
          {{ $t('hero.name') }}
        </h1>


        <div class="hero-headline">

          <h2>
            {{ $t('hero.subtitle1') }}
          </h2>

          <h2 class="hero-highlight">
            {{ $t('hero.subtitle2') }}
          </h2>

        </div>


        <p class="hero-description">
          {{ $t('hero.description') }}
        </p>


        <!-- =====================================
             ACTIONS
        ====================================== -->

        <div class="hero-actions">

          <a href="#projects" class="btn btn-primary">
            {{ $t('hero.btnViewProjects') }}
          </a>


          <a href="https://github.com/marcelo-moles" target="_blank" rel="noopener noreferrer"
            class="btn btn-secondary">
            {{ $t('hero.btnGitHub') }}
          </a>


          <a :href="cvSpanishUrl" download="Marcelo-Molina-CV-ES.pdf" class="btn btn-secondary">
            {{ $t('hero.btnCVEspaniol') }}
          </a>


          <a :href="cvEnglishUrl" download="Marcelo-Molina-CV-EN.pdf" class="btn btn-secondary">
            {{ $t('hero.btnCVEnglish') }}
          </a>

        </div>


        <!-- =====================================
             TECHNOLOGIES
        ====================================== -->

        <div class="hero-technologies">

          <span>C#</span>
          <span>.NET</span>
          <span>ASP.NET Core</span>
          <span>REST APIs</span>
          <span>Microservices</span>
          <span>SQL Server</span>
          <span>MongoDB</span>
          <span>Docker</span>

        </div>

      </div>


      <!-- =====================================
           PHOTO
      ====================================== -->

      <div class="hero-visual">

        <div class="photo-glow"></div>

        <div class="photo-orbit photo-orbit-one"></div>

        <div class="photo-orbit photo-orbit-two"></div>


        <div class="hero-photo">

          <img src="/images/profile.jpg" alt="Marcelo Molina - Senior Backend .NET Developer" />

        </div>


        <div class="photo-dot photo-dot-one"></div>
        <div class="photo-dot photo-dot-two"></div>

      </div>

    </div>

  </section>
</template>


<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL

const cvSpanishUrl = `${baseUrl}cv/MarceloMolina.pdf`
const cvEnglishUrl = `${baseUrl}cv/MarceloMolina_EN.pdf`
</script>


<style scoped>
/* =====================================================
   HERO
===================================================== */

.hero {
  position: relative;

  min-height: 100vh;

  display: flex;
  align-items: center;

  padding: 120px 0 80px;

  overflow: hidden;

  background:
    radial-gradient(circle at 75% 45%,
      rgba(0, 174, 255, 0.08),
      transparent 30%);
}


/* =====================================================
   BACKGROUND
===================================================== */

.hero-background {
  position: absolute;

  inset: 0;

  pointer-events: none;
}


/* Blue ambient glow */

.hero-glow {
  position: absolute;

  border-radius: 50%;

  filter: blur(100px);

  opacity: 0.35;
}


.hero-glow-left {
  width: 300px;
  height: 300px;

  left: -150px;
  bottom: -100px;

  background: rgba(37, 99, 235, 0.15);
}


.hero-glow-right {
  width: 400px;
  height: 400px;

  right: -200px;
  top: 10%;

  background: rgba(0, 174, 255, 0.10);
}


/* Subtle grid */

.hero-grid {
  position: absolute;

  inset: 0;

  opacity: 0.12;

  background-image:
    linear-gradient(rgba(96, 165, 250, 0.035) 1px,
      transparent 1px),
    linear-gradient(90deg,
      rgba(96, 165, 250, 0.035) 1px,
      transparent 1px);

  background-size: 60px 60px;

  mask-image:
    linear-gradient(to bottom,
      black 0%,
      transparent 85%);
}


/* =====================================================
   CONTAINER
===================================================== */

.hero-container {
  position: relative;
  z-index: 2;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 80px;
}


/* =====================================================
   CONTENT
===================================================== */

.hero-content {
  flex: 1;
  max-width: 760px;
  padding-left: 45px;
}


/* =====================================================
   EYEBROW
===================================================== */

.hero-eyebrow {
  position: relative;

  display: inline-flex;
  align-items: center;

  margin: 0 0 24px;

  padding-left: 30px;

  color: #60a5fa;

  font-size: 0.72rem;
  font-weight: 800;

  letter-spacing: 0.22em;

  text-transform: uppercase;
}


.hero-eyebrow::before {
  content: "";

  position: absolute;

  left: 0;
  top: 50%;

  width: 18px;
  height: 1px;

  transform: translateY(-50%);

  background: #00aeff;

  box-shadow:
    0 0 8px rgba(0, 174, 255, 0.8);
}


/* =====================================================
   NAME
===================================================== */

.hero h1 {
  margin: 0;

  color: #f8fafc;

  font-size: clamp(3.8rem, 7vw, 6.5rem);

  line-height: 0.9;

  font-weight: 800;

  letter-spacing: -0.075em;
}


/* =====================================================
   HEADLINE
===================================================== */

.hero-headline {
  margin-top: 24px;
}


.hero h2 {
  margin: 0;

  color: #cbd5e1;

  font-size: clamp(1.7rem, 3.5vw, 2.9rem);

  line-height: 1.15;

  font-weight: 500;

  letter-spacing: -0.045em;
}


.hero h2+h2 {
  margin-top: 5px;
}


.hero-highlight {
  color: #60a5fa;

  text-shadow:
    0 0 20px rgba(0, 174, 255, 0.18);
}


/* =====================================================
   DESCRIPTION
===================================================== */

.hero-description {
  max-width: 680px;

  margin: 30px 0 0;

  color: #94a3b8;

  font-size: 1rem;

  line-height: 1.85;
}


/* =====================================================
   ACTIONS
===================================================== */

.hero-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: 36px;
}


/* =====================================================
   BUTTONS
===================================================== */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 46px;

  padding: 0 19px;

  border: 1px solid rgba(96, 165, 250, 0.20);

  border-radius: 9px;

  color: #e2e8f0;

  font-size: 0.82rem;
  font-weight: 650;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}


.btn:hover {
  transform: translateY(-3px);

  border-color: rgba(0, 174, 255, 0.65);

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.25),
    0 0 18px rgba(0, 174, 255, 0.08);
}


/* Primary */

.btn-primary {
  border-color: #008fd3;

  color: #ffffff;

  background:
    linear-gradient(135deg,
      #008fd3,
      #2563eb);

  box-shadow:
    0 0 18px rgba(0, 174, 255, 0.15);
}


.btn-primary:hover {
  border-color: #38bdf8;

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.25),
    0 0 25px rgba(0, 174, 255, 0.25);
}


/* Secondary */

.btn-secondary {
  background: rgba(255, 255, 255, 0.025);
}


.btn-secondary:hover {
  background: rgba(0, 174, 255, 0.045);
}


/* =====================================================
   TECHNOLOGIES
===================================================== */

.hero-technologies {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 32px;
}


.hero-technologies span {
  padding: 6px 10px;

  border: 1px solid rgba(96, 165, 250, 0.12);

  border-radius: 6px;

  background: rgba(7, 16, 28, 0.45);

  color: #64748b;

  font-size: 0.67rem;
  font-weight: 600;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}


.hero-technologies span:hover {
  color: #60a5fa;

  border-color: rgba(0, 174, 255, 0.35);

  background: rgba(0, 174, 255, 0.04);
}


/* =====================================================
   VISUAL
===================================================== */

.hero-visual {
  position: relative;

  flex: 0 0 340px;

  width: 340px;
  height: 340px;

  display: flex;
  align-items: center;
  justify-content: center;
}


/* =====================================================
   PHOTO
===================================================== */

.hero-photo {
  position: relative;
  z-index: 3;

  width: 245px;
  height: 245px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #030712;

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.45);
}


.hero-photo img {
  width: 230px;
  height: 230px;

  object-fit: cover;

  border-radius: 50%;

  border: 2px solid rgba(0, 174, 255, 0.75);

  box-shadow:
    0 0 12px rgba(0, 174, 255, 0.45),
    0 0 40px rgba(0, 174, 255, 0.18);
}


/* =====================================================
   PHOTO GLOW
===================================================== */

.photo-glow {
  position: absolute;

  width: 280px;
  height: 280px;

  border-radius: 50%;

  background: rgba(0, 174, 255, 0.10);

  filter: blur(45px);
}


/* =====================================================
   ORBITS
===================================================== */

.photo-orbit {
  position: absolute;

  border: 1px solid rgba(0, 174, 255, 0.18);

  border-radius: 50%;
}


.photo-orbit-one {
  width: 290px;
  height: 290px;

  transform: rotate(25deg);
}


.photo-orbit-two {
  width: 315px;
  height: 315px;

  border-style: dashed;

  opacity: 0.45;

  transform: rotate(-20deg);
}


/* =====================================================
   DECORATIVE DOTS
===================================================== */

.photo-dot {
  position: absolute;
  z-index: 4;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #00aeff;

  box-shadow:
    0 0 8px #00aeff,
    0 0 18px rgba(0, 174, 255, 0.7);
}


.photo-dot-one {
  top: 25px;
  right: 65px;
}


.photo-dot-two {
  bottom: 50px;
  left: 45px;

  width: 5px;
  height: 5px;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 950px) {

  .hero-container {
    gap: 45px;
  }


  .hero-visual {
    flex: 0 0 280px;

    width: 280px;
    height: 280px;
  }


  .hero-photo {
    width: 210px;
    height: 210px;
  }


  .hero-photo img {
    width: 198px;
    height: 198px;
  }


  .photo-orbit-one {
    width: 245px;
    height: 245px;
  }


  .photo-orbit-two {
    width: 265px;
    height: 265px;
  }
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 768px) {

  .hero {
    min-height: auto;

    padding: 120px 0 70px;

    text-align: center;
  }


  .hero-container {
    flex-direction: column;

    gap: 45px;
  }


  .hero-content {
    width: 100%;
    max-width: 700px;
    padding-left: 0;
  }


  .hero-eyebrow {
    padding-left: 0;
  }


  .hero-eyebrow::before {
    display: none;
  }


  .hero h1 {
    font-size: clamp(3rem, 15vw, 5rem);
  }


  .hero h2 {
    font-size: clamp(1.5rem, 7vw, 2.2rem);
  }


  .hero-description {
    margin-left: auto;
    margin-right: auto;

    font-size: 0.95rem;
  }


  .hero-actions {
    justify-content: center;
  }


  .hero-technologies {
    justify-content: center;
  }


  .hero-visual {
    order: -1;

    flex: none;

    width: 270px;
    height: 270px;
  }
}


/* =====================================================
   SMALL PHONES
===================================================== */

@media (max-width: 480px) {

  .hero {
    padding: 105px 0 55px;
  }


  .hero-container {
    gap: 35px;
  }


  .hero h1 {
    font-size: clamp(2.8rem, 15vw, 4rem);
  }


  .hero h2 {
    font-size: 1.45rem;
  }


  .hero-description {
    font-size: 0.9rem;

    line-height: 1.7;
  }


  .hero-actions {
    flex-direction: column;

    align-items: stretch;

    width: 100%;
  }


  .btn {
    width: 100%;
  }


  .hero-technologies {
    gap: 6px;
  }


  .hero-technologies span {
    font-size: 0.61rem;

    padding: 5px 8px;
  }


  .hero-visual {
    width: 230px;
    height: 230px;
  }


  .hero-photo {
    width: 180px;
    height: 180px;
  }


  .hero-photo img {
    width: 168px;
    height: 168px;
  }


  .photo-orbit-one {
    width: 205px;
    height: 205px;
  }


  .photo-orbit-two {
    width: 220px;
    height: 220px;
  }


  .photo-dot-one {
    top: 15px;
    right: 35px;
  }


  .photo-dot-two {
    bottom: 35px;
    left: 30px;
  }
}

@media (max-width: 768px) {

  .hero {
    min-height: auto;
  }

  .hero-container {
    flex-direction: column;
    align-items: flex-start;

    gap: 55px;
  }

  .hero-content {
    width: 100%;
    max-width: 700px;

    padding-left: 0;
  }

  .hero-actions {
    flex-wrap: wrap;
  }

  .hero-visual {
    width: 100%;

    display: flex;
    justify-content: center;
  }

}


@media (max-width: 430px) {

  .hero-container {
    gap: 40px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;

    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;

    justify-content: center;

    text-align: center;
  }

  .hero-technologies {
    gap: 7px;
  }

  .hero-technologies span {
    font-size: 0.68rem;
  }

}
</style>