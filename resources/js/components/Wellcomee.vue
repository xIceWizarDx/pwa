<template>
  <div class="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
    <div class="container">
      <h1 class="h3 fw-bold text-center mb-4">Bem-vindo ao Controle Financeiro</h1>
      <finance-control />
    </div>
  </div>
</template>

<script>
import FinanceControl from './FinanceControl.vue';

export default {
  name: 'Welcome',
  components: { FinanceControl },
};
</script>

