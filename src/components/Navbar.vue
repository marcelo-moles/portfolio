<template>
  <header class="navbar">
    <div class="navbar-container">

      <div class="logo">
        <span class="logo-mark">MM</span>

        <a href="#home" class="logo-home" @click="closeMenu">
          {{ $t('nav.home') }}
        </a>
      </div>

      <button class="menu-button" type="button" aria-label="Open navigation menu" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="{ open: menuOpen }">
        <a href="#about" @click="closeMenu">{{ $t('nav.about') }}</a>
        <a href="#experience" @click="closeMenu">{{ $t('nav.experience') }}</a>
        <a href="#skills" @click="closeMenu">{{ $t('nav.skills') }}</a>
        <a href="#projects" @click="closeMenu">{{ $t('nav.projects') }}</a>
        <a href="#architecture" @click="closeMenu">{{ $t('nav.Engineering') }}</a>
        <a href="#education" @click="closeMenu">{{ $t('nav.Education') }}</a>
        <a href="#contact" @click="closeMenu">{{ $t('nav.contact') }}</a>


        <div class="language-switcher">
          <button
            type="button"
            :class="{ active: locale === 'es' }"
            @click="changeLanguage('es')"
          >
            ES
          </button>

          <span>|</span>

          <button
            type="button"
            :class="{ active: locale === 'en' }"
            @click="changeLanguage('en')"
          >
            EN
          </button>
        </div>
      </nav>

    </div>
  </header>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const menuOpen = ref(false)

const { locale } = useI18n()

const closeMenu = () => {
  menuOpen.value = false
}

const changeLanguage = (language: 'es' | 'en') => {
  locale.value = language
  localStorage.setItem('language', language)

  // Informar al navegador del nuevo idioma
  document.documentElement.lang = language
}
</script>

<style scoped>
/* =========================================
   NAVBAR
========================================= */

.navbar {
  position: fixed;
  z-index: 1000;

  top: 0;
  left: 0;
  right: 0;

  border-bottom: 1px solid rgba(0, 174, 255, 0.10);

  background: rgba(3, 7, 18, 0.72);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.18);
}


/* =========================================
   CONTAINER
========================================= */

.navbar-container {
  width: min(1160px, calc(100% - 40px));
  height: 72px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* =========================================
   LOGO
========================================= */

.logo {
  display: flex;
  align-items: center;

  gap: 10px;
}


/* MM */

.logo-mark {
  position: relative;

  font-size: 1.45rem;
  font-weight: 900;

  letter-spacing: 2px;

  color: transparent;

  -webkit-text-stroke: 1.4px #00aeff;

  text-shadow:
    0 0 5px rgba(0, 174, 255, 0.75),
    0 0 14px rgba(0, 174, 255, 0.35);

  transition:
    transform 0.3s ease,
    text-shadow 0.3s ease;
}


/* Glow debajo del MM */

.logo-mark::after {
  content: "";

  position: absolute;

  left: 50%;
  bottom: -8px;

  width: 28px;
  height: 2px;

  transform: translateX(-50%);

  background: #00aeff;

  border-radius: 999px;

  opacity: 0.6;

  filter: blur(2px);

  box-shadow:
    0 0 8px rgba(0, 174, 255, 0.8);
}


.logo:hover .logo-mark {
  transform: translateY(-1px);

  text-shadow:
    0 0 7px rgba(0, 174, 255, 1),
    0 0 20px rgba(0, 174, 255, 0.55),
    0 0 40px rgba(0, 174, 255, 0.25);
}


/* =========================================
   HOME
========================================= */

.logo-home {
  position: relative;

  color: #60a5fa;

  font-size: 0.82rem;
  font-weight: 600;

  letter-spacing: 0.02em;

  text-decoration: none;

  transition:
    color 0.25s ease,
    text-shadow 0.25s ease;
}


.logo-home:hover {
  color: #ffffff;

  text-shadow:
    0 0 10px rgba(0, 174, 255, 0.55);
}


/* =========================================
   NAVIGATION
========================================= */

nav {
  display: flex;
  align-items: center;

  gap: 26px;
}


nav a {
  position: relative;

  padding: 8px 0;

  color: #94a3b8;

  font-size: 0.78rem;
  font-weight: 500;

  text-decoration: none;

  transition:
    color 0.25s ease,
    text-shadow 0.25s ease;
}


/* Línea azul debajo */

nav a::after {
  content: "";

  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  height: 1px;

  background: #00aeff;

  transform: scaleX(0);

  transform-origin: center;

  transition:
    transform 0.25s ease;

  box-shadow:
    0 0 8px rgba(0, 174, 255, 0.8);
}


nav a:hover {
  color: #ffffff;

  text-shadow:
    0 0 10px rgba(0, 174, 255, 0.45);
}


nav a:hover::after {
  transform: scaleX(1);
}


/* =========================================
   LANGUAGE SWITCHER
========================================= */

.language-switcher {
  display: flex;
  align-items: center;

  gap: 6px;

  margin-left: 4px;

  padding-left: 18px;

  border-left: 1px solid rgba(96, 165, 250, 0.16);
}


.language-switcher button {
  border: none;

  padding: 4px 2px;

  background: transparent;

  color: #64748b;

  font-size: 0.72rem;
  font-weight: 800;

  letter-spacing: 0.04em;

  cursor: pointer;

  transition:
    color 0.2s ease,
    text-shadow 0.2s ease,
    transform 0.2s ease;
}


.language-switcher button:hover {
  color: #ffffff;

  transform: translateY(-1px);
}


.language-switcher button.active {
  color: #00aeff;

  text-shadow:
    0 0 8px rgba(0, 174, 255, 0.7),
    0 0 16px rgba(0, 174, 255, 0.3);
}


.language-switcher span {
  color: #334155;

  font-size: 0.7rem;
}


/* =========================================
   MOBILE MENU BUTTON
========================================= */

.menu-button {
  display: none;

  width: 42px;
  height: 42px;

  padding: 0;

  border: 1px solid rgba(96, 165, 250, 0.20);

  border-radius: 10px;

  background: rgba(7, 16, 28, 0.65);

  cursor: pointer;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}


.menu-button:hover {
  border-color: rgba(0, 174, 255, 0.55);

  background: rgba(0, 174, 255, 0.05);

  box-shadow:
    0 0 16px rgba(0, 174, 255, 0.12);
}


.menu-button span {
  display: block;

  width: 18px;
  height: 1px;

  margin: 4px auto;

  background: #cbd5e1;

  transition:
    background 0.2s ease,
    box-shadow 0.2s ease;
}


.menu-button:hover span {
  background: #00aeff;

  box-shadow:
    0 0 6px rgba(0, 174, 255, 0.7);
}


/* =========================================
   HOME EYEBROW
   Lo mantenemos porque pertenece
   al componente actual
========================================= */

.home-eyebrow {
  margin-bottom: 24px;

  color: #60a5fa;

  font-size: 0.75rem;
  font-weight: 800;

  letter-spacing: 0.2em;
}


/* =========================================
   TABLET / MOBILE
========================================= */

@media (max-width: 850px) {

  .menu-button {
    display: block;
  }


  nav {
    position: absolute;

    top: 82px;
    left: 15px;
    right: 15px;

    display: none;

    flex-direction: column;
    align-items: stretch;

    gap: 0;

    padding: 18px;

    border: 1px solid rgba(0, 174, 255, 0.16);

    border-radius: 14px;

    background:
      linear-gradient(
        145deg,
        rgba(7, 16, 28, 0.97),
        rgba(3, 7, 18, 0.97)
      );

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.45),
      0 0 25px rgba(0, 174, 255, 0.07);
  }


  nav.open {
    display: flex;
  }


  nav a {
    padding: 13px 5px;

    border-bottom: 1px solid rgba(96, 165, 250, 0.07);
  }


  nav a:last-of-type {
    border-bottom: none;
  }


  nav a::after {
    display: none;
  }


  nav a:hover {
    padding-left: 10px;

    color: #ffffff;

    text-shadow:
      0 0 10px rgba(0, 174, 255, 0.45);
  }


  .language-switcher {
    justify-content: center;

    margin-top: 14px;
    padding-top: 16px;
    padding-left: 0;

    border-top: 1px solid rgba(96, 165, 250, 0.10);
    border-left: none;
  }
}


/* =========================================
   SMALL PHONES
========================================= */

@media (max-width: 420px) {

  .navbar-container {
    width: calc(100% - 30px);
  }


  .navbar-container {
    height: 68px;
  }


  nav {
    top: 78px;
  }


  .logo-mark {
    font-size: 1.3rem;
  }


  .logo-home {
    font-size: 0.78rem;
  }
}
</style>