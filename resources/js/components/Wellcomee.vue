<template>
  <div class="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
    <div class="container">
      <h1 class="h3 fw-bold text-center mb-4">Bem-vindo ao Controle Financeiro</h1>
      <finance-control />
    </div>
  </div>
</template>

<script>
if (typeof window !== 'undefined' && !document.getElementById('bootstrap-cdn-js')) {
  const bootstrapScript = document.createElement('script');
  bootstrapScript.id = 'bootstrap-cdn-js';
  bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js';
  document.head.appendChild(bootstrapScript);
}

import FinanceControl from './FinanceControl.vue';

export default {
  name: 'Welcome',
  components: { FinanceControl },
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css');
</style>
