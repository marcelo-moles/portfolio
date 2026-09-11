<template>
  <footer class="footer">

    <div class="footer-line"></div>

    <div class="container">

      <div class="footer-content">

        <!-- =========================================
             BRAND
        ========================================== -->

        <div class="footer-brand">

          <a href="#home" class="footer-logo">
            <span>MM</span>
          </a>

          <div>
            <strong>Marcelo Molina</strong>

            <p>
              {{ $t('footer.role') }}
            </p>
          </div>

        </div>


        <!-- =========================================
             SOCIAL
        ========================================== -->

        <div class="footer-social">

          <a
            href="https://github.com/marcelo-moles"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" />
          </a>

          <a
            href="https://www.linkedin.com/in/juan-marcelo-molina/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" />
          </a>

        </div>


        <!-- =========================================
             COPYRIGHT
        ========================================== -->

        <div class="footer-copy">

          <span>
            © {{ new Date().getFullYear() }} Marcelo Molina
          </span>

          <span class="footer-separator">
            ·
          </span>

          <span>
            {{ $t('footer.rights') }}
          </span>

        </div>

      </div>

    </div>

  </footer>
</template>


<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>


<style scoped>

/* =========================================
   FOOTER
========================================= */

.footer {
  position: relative;

  padding: 45px 0 30px;

  background: #030712;

  overflow: hidden;
}


/* =========================================
   TOP LINE
========================================= */

.footer-line {
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(0, 174, 255, 0),
    rgba(0, 174, 255, 0.5) 25%,
    rgba(56, 189, 248, 0.7) 50%,
    rgba(0, 174, 255, 0.5) 75%,
    rgba(0, 174, 255, 0)
  );
}


/* =========================================
   CONTENT
========================================= */

.footer-content {
  display: grid;

  grid-template-columns: 1fr auto 1fr;

  align-items: center;

  gap: 30px;
}


/* =========================================
   BRAND
========================================= */

.footer-brand {
  display: flex;

  align-items: center;

  gap: 14px;
}


.footer-logo {
  width: 38px;
  height: 38px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #38bdf8;

  text-decoration: none;

  background: rgba(0, 174, 255, 0.06);

  border: 1px solid rgba(0, 174, 255, 0.25);

  border-radius: 8px;

  font-family: monospace;

  font-size: 0.72rem;
  font-weight: 700;

  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}


.footer-logo:hover {
  border-color: rgba(0, 174, 255, 0.55);

  background: rgba(0, 174, 255, 0.1);

  box-shadow:
    0 0 18px rgba(0, 174, 255, 0.1);
}


.footer-brand strong {
  display: block;

  color: #f8fafc;

  font-size: 0.85rem;

  font-weight: 600;
}


.footer-brand p {
  margin: 3px 0 0;

  color: #64748b;

  font-size: 0.7rem;
}


/* =========================================
   SOCIAL
========================================= */

.footer-social {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;
}


.footer-social a {
  width: 36px;
  height: 36px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #64748b;

  text-decoration: none;

  background: rgba(148, 163, 184, 0.03);

  border: 1px solid rgba(148, 163, 184, 0.1);

  border-radius: 8px;

  font-size: 1.05rem;

  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;
}


.footer-social a:hover {
  color: #38bdf8;

  background: rgba(0, 174, 255, 0.07);

  border-color: rgba(0, 174, 255, 0.3);

  transform: translateY(-2px);
}


/* =========================================
   COPYRIGHT
========================================= */

.footer-copy {
  display: flex;

  justify-content: flex-end;

  align-items: center;

  gap: 8px;

  color: #475569;

  font-size: 0.7rem;

  text-align: right;
}


.footer-separator {
  color: #1e3a5f;
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 768px) {

  .footer {
    padding: 35px 0 25px;
  }

  .footer-content {
    grid-template-columns: 1fr auto;

    gap: 25px;
  }

  .footer-social {
    justify-content: flex-end;
  }

  .footer-copy {
    grid-column: 1 / -1;

    justify-content: flex-start;

    padding-top: 15px;

    border-top: 1px solid rgba(96, 165, 250, 0.08);

    text-align: left;
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 430px) {

  .footer {
    padding: 30px 0 22px;
  }

  .footer-content {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 20px;
  }

  .footer-social {
    justify-content: flex-start;
  }

  .footer-copy {
    width: 100%;

    flex-wrap: wrap;

    justify-content: flex-start;

    gap: 5px;

    padding-top: 16px;
  }

}

</style>