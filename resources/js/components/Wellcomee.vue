<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Bem-vindo ao Controle Financeiro</h1>
    <finance-control />
  </div>
</template>

<script>
import FinanceControl from './FinanceControl.vue';

export default {
  name: 'Welcome',
  components: { FinanceControl },
};
</script>

<style scoped>
</style>
