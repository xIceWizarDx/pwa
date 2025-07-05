<template>
  <div class="max-w-md mx-auto p-4">
    <div class="bg-white shadow rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-6 text-center">Controle Financeiro</h1>

      <form @submit.prevent="addEntry" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1" for="desc">Descrição</label>
          <input
            id="desc"
            v-model="newEntry.description"
            placeholder="Digite a descrição"
            class="border rounded w-full p-2"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="amount">Valor</label>
          <input
            id="amount"
            v-model.number="newEntry.amount"
            type="number"
            placeholder="0,00"
            class="border rounded w-full p-2"
          />
        </div>
        <div class="text-right">
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Adicionar
          </button>
        </div>
      </form>

      <div class="mt-6" v-if="entries.length">
        <h2 class="text-lg font-semibold mb-2">Movimentações</h2>
        <ul class="divide-y">
          <li v-for="(entry, index) in entries" :key="index" class="flex justify-between py-2">
            <span>{{ entry.description }}</span>
            <span :class="{ 'text-green-600': entry.amount >= 0, 'text-red-600': entry.amount < 0 }">
              {{ currency(entry.amount) }}
            </span>
          </li>
        </ul>
      </div>

      <div class="mt-4 text-right font-bold text-lg">
        Total: {{ currency(total) }}
      </div>
    </div>
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
