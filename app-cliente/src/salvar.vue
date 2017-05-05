<script>
  const axios = require('axios');
  
  module.exports ={
    name: "salvacontatos",
    data() {
      return {
        contato: {}
      }
    },
    methods: {
      salvarContato(){
        axios.post('http://10.112.1.102:3000/salvar', this.contato).then((ret) => {
          window.location.href="#/listar";
        });
      }
    }
  }
</script>

<style></style>

<template>
  <form v-on:submit.prevent="salvarContato">
    <p>
    <label>Nome:</label>
    <input v-model="contato.nomecontato" placeholder="Nome" />
    </p><p>
    <label>Telefone:</label>
    <input v-model="contato.telefonecontato" placeholder="Telefone" />
    </p><p>
    <input type="submit" value="Adicionar contato"/>
    </p>
</form>
</template>