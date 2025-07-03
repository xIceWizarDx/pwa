<template>
  <div class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Controle Financeiro</h1>

    <form @submit.prevent="addTransaction" class="mb-6 space-y-2">
      <input v-model="newTransaction.description" type="text" placeholder="Descrição" class="border p-2 w-full" />
      <input v-model.number="newTransaction.amount" type="number" placeholder="Valor" class="border p-2 w-full" />
      <button type="submit" class="bg-blue-600 text-white px-4 py-2">Adicionar</button>
    </form>

    <table class="w-full text-left border-collapse mb-4" v-if="transactions.length">
      <thead>
        <tr>
          <th class="border-b p-2">Descrição</th>
          <th class="border-b p-2">Valor</th>
          <th class="border-b p-2 w-10"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in transactions" :key="t.id">
          <td class="border-b p-2">{{ t.description }}</td>
          <td class="border-b p-2" :class="t.amount < 0 ? 'text-red-600' : 'text-green-600'">
            {{ formatCurrency(t.amount) }}
          </td>
          <td class="border-b p-2 text-right">
            <button @click="removeTransaction(t.id)" class="text-red-500">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="font-semibold">
      <p>Total de Entradas: {{ formatCurrency(totalIncome) }}</p>
      <p>Total de Saídas: {{ formatCurrency(totalExpense) }}</p>
      <p>Saldo: {{ formatCurrency(balance) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wellcomee',
  data() {
    return {
      newTransaction: {
        description: '',
        amount: 0
      },
      transactions: []
    };
  },
  computed: {
    totalIncome() {
      return this.transactions
        .filter(t => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0);
    },
    totalExpense() {
      return this.transactions
        .filter(t => t.amount < 0)
        .reduce((sum, t) => sum + t.amount, 0);
    },
    balance() {
      return this.totalIncome + this.totalExpense;
    }
  },
  methods: {
    addTransaction() {
      if (!this.newTransaction.description || !this.newTransaction.amount) return;
      this.transactions.push({
        id: Date.now(),
        description: this.newTransaction.description,
        amount: this.newTransaction.amount
      });
      this.newTransaction.description = '';
      this.newTransaction.amount = 0;
    },
    removeTransaction(id) {
      this.transactions = this.transactions.filter(t => t.id !== id);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value);
    }
  }
};
</script>

<style scoped>
input {
  border-radius: 4px;
}
</style>

