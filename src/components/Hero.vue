<template>
  <section id="home" class="section hero">
    <div class="container hero-container">

      <div class="hero-content">

        <p class="hero-eyebrow">
          SENIOR BACKEND DEVELOPER
        </p>

        <h1>
          Marcelo Molina
        </h1>

        <h2>
          Senior Backend .NET Developer
        </h2>
        <h2>Full Stack Developer</h2>

        <p class="hero-description">
          I design and build scalable backend solutions using
          C#, .NET, REST APIs, microservices and modern software
          architecture principles.
        </p>

        <div class="hero-actions">

          <a href="#projects" class="btn btn-primary">
            View Projects
          </a>

          <a href="https://github.com/marcelo-moles" target="_blank" rel="noopener noreferrer"
            class="btn btn-secondary">
            GitHub
          </a>

          <a href="/cv/MarceloMolina.pdf" download="Marcelo-Molina-CV-ES.pdf" class="btn btn-secondary">
            CV · ES
          </a>

          <a href="/cv/MarceloMolina_EN.pdf" download="Marcelo-Molina-CV-EN.pdf" class="btn btn-secondary">
            CV · EN
          </a>

        </div>

      </div>

      <div class="hero-photo">
        <img src="/images/profile.jpg" alt="Marcelo Molina - Senior Backend .NET Developer" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;

  display: flex;
  align-items: center;

  padding: 120px 0 80px;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.hero-content {
  flex: 1;
  max-width: 720px;
}

.hero-photo {
  flex: 0 0 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-photo img {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;

  border: 2px solid #00aeff;

  box-shadow:
    0 0 10px rgba(0, 174, 255, 0.35),
    0 0 30px rgba(0, 174, 255, 0.15);
}

.hero-eyebrow {
  margin-bottom: 24px;

  color: #60a5fa;

  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.hero h1 {
  margin: 0;

  font-size: clamp(4rem, 1vw, 4rem);
  line-height: 0.9;

  letter-spacing: -0.08em;
}

.hero h2 {
  max-width: 800px;

  margin-top: 30px;

  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: .5;

  font-weight: 500;
  letter-spacing: -0.04em;
}


.hero-description {
  max-width: 700px;

  margin-top: 28px;

  color: #9ca3af;

  font-size: 1.05rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  margin-top: 38px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 13px 22px;

  border: 1px solid #374151;
  border-radius: 8px;

  font-size: 0.85rem;
  font-weight: 600;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  border-color: #60a5fa;
}

.btn-primary {
  border-color: #2563eb;
  background: #2563eb;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
}

@media (max-width: 700px) {
  .hero {
    padding: 110px 0 60px;
  }

  .hero-content {
    width: calc(100% - 40px);
  }

  .hero h1 {
    font-size: clamp(3.2rem, 17vw, 5rem);
  }

  .hero h2 {
    font-size: 1.7rem;
  }
}

@media (max-width: 768px) {

  .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-photo {
    order: -1;
    flex: none;
  }

  .hero-photo img {
    width: 180px;
    height: 180px;
  }

  .hero-actions {
    justify-content: center;
  }
}
</style>