<template>
  <header class="navbar">
    <div class="navbar-container">

      <div class="logo">
        <span class="logo-mark">MM</span>

        <a href="#home" class="logo-home" @click="closeMenu">
          Home
        </a>
      </div>

      <button class="menu-button" type="button" aria-label="Open navigation menu" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="{ open: menuOpen }">
        <a href="#about" @click="closeMenu">About</a>
        <a href="#experience" @click="closeMenu">Experience</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#architecture" @click="closeMenu">Engineering</a>
        <a href="#education" @click="closeMenu">Education</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </nav>

    </div>
  </header>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 1000;

  top: 0;
  left: 0;
  right: 0;

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  background: rgba(7, 11, 18, 0.78);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.navbar-container {
  width: min(1120px, calc(100% - 40px));
  height: 72px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-mark {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: transparent;
  -webkit-text-stroke: 1.4px #00aeff;
  text-shadow:
    0 0 4px rgba(0, 174, 255, 0.55),
    0 0 10px rgba(0, 174, 255, 0.25);
  transition: all 0.3s ease;
}



.logo-home {
  color: #e5e7eb;

  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;

  text-decoration: none;

  transition: color 0.2s ease;
}

.logo-home:hover {
  color: #ffffff;
}

.logo:hover .logo-mark {
  -webkit-text-stroke-color: #00aeff;
  text-shadow:
    0 0 6px rgba(0, 174, 255, 0.8),
    0 0 16px rgba(0, 174, 255, 0.45);
}

.logo-home {
  color: #60a5fa;
}

nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

nav a {
  position: relative;

  font-size: 0.8rem;
  color: #9ca3af;

  transition: color 0.2s ease;
}

nav a:hover {
  color: #ffffff;
}

.menu-button {
  display: none;

  width: 42px;
  height: 42px;

  border: 1px solid #374151;
  border-radius: 8px;

  background: transparent;

  cursor: pointer;
}

.menu-button span {
  display: block;

  width: 18px;
  height: 1px;

  margin: 4px auto;

  background: #e5e7eb;
}

.home-eyebrow {
  margin-bottom: 24px;

  color: #60a5fa;

  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.2em;
}

@media (max-width: 850px) {
  .menu-button {
    display: block;
  }

  nav {
    position: absolute;

    top: 72px;
    left: 20px;
    right: 20px;

    display: none;
    flex-direction: column;
    align-items: stretch;

    padding: 20px;

    border: 1px solid #1f2937;
    border-radius: 12px;

    background: #0b111c;
  }

  nav.open {
    display: flex;
  }

  nav a {
    padding: 10px 0;
  }
}
</style>