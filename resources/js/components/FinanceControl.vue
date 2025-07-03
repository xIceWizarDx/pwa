<template>
  <div class="max-w-md mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Controle Financeiro</h1>

    <form @submit.prevent="addEntry" class="mb-4">
      <div class="flex space-x-2 mb-2">
        <input v-model="newEntry.description" placeholder="Descrição" class="border p-2 flex-1" />
        <input v-model.number="newEntry.amount" type="number" placeholder="Valor" class="border p-2 w-24" />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-1 rounded">Adicionar</button>
    </form>

    <ul>
      <li v-for="(entry, index) in entries" :key="index" class="flex justify-between mb-2">
        <span>{{ entry.description }}</span>
        <span :class="{ 'text-green-600': entry.amount >= 0, 'text-red-600': entry.amount < 0 }">
          {{ currency(entry.amount) }}
        </span>
      </li>
    </ul>

    <div class="mt-4 font-bold">Total: {{ currency(total) }}</div>
  </div>
</template>

<script>
export default {
  name: 'FinanceControl',
  data() {
    return {
      entries: [],
      newEntry: {
        description: '',
        amount: null,
      },
    };
  },
  computed: {
    total() {
      return this.entries.reduce((sum, e) => sum + parseFloat(e.amount), 0);
    },
  },
  methods: {
    addEntry() {
      if (!this.newEntry.description || this.newEntry.amount === null) {
        return;
      }
      this.entries.push({
        description: this.newEntry.description,
        amount: this.newEntry.amount,
      });
      this.newEntry.description = '';
      this.newEntry.amount = null;
    },
    currency(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    },
  },
};
</script>

<style scoped>
</style>
