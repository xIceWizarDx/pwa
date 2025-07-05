<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8">Bem-vindo ao Controle Financeiro</h1>
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

<style scoped>
</style>
