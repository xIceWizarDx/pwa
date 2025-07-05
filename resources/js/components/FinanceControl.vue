<template>
  <div class="container p-4">
    <div class="bg-white shadow rounded p-4">
      <h1 class="h4 fw-bold mb-4 text-center">Controle Financeiro</h1>

      <form @submit.prevent="addEntry" class="vstack gap-3">
        <div>
          <label class="form-label" for="desc">Descrição</label>
          <input
            id="desc"
            v-model="newEntry.description"
            placeholder="Digite a descrição"
            class="form-control"
          />
        </div>
        <div>
          <label class="form-label" for="amount">Valor</label>
          <input
            id="amount"
            v-model.number="newEntry.amount"
            type="number"
            placeholder="0,00"
            class="form-control"
          />
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-primary">
            Adicionar
          </button>
        </div>
      </form>

      <div class="mt-4" v-if="entries.length">
        <h2 class="h5 fw-semibold mb-2">Movimentações</h2>
        <ul class="list-group list-group-flush">
          <li v-for="(entry, index) in entries" :key="index" class="list-group-item d-flex justify-content-between py-2">
            <span>{{ entry.description }}</span>
            <span :class="{ 'text-success': entry.amount >= 0, 'text-danger': entry.amount < 0 }">
              {{ currency(entry.amount) }}
            </span>
          </li>
        </ul>
      </div>
      <div class="mt-4 text-end fw-bold fs-5">
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
