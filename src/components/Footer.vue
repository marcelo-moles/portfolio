<template>
  <footer class="footer">
    <div class="footer-container">
      <p>
        © {{ new Date().getFullYear() }} Marcelo Molina
      </p>

      <p>
        Senior Backend .NET Developer
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #1f2937;
}

.footer-container {
  width: min(1120px, calc(100% - 40px));

  margin: 0 auto;
  padding: 30px 0;

  display: flex;
  justify-content: space-between;

  color: #6b7280;
  font-size: 0.8rem;
}

@media (max-width: 600px) {
  .footer-container {
    flex-direction: column;
    gap: 10px;
  }
}
</style>