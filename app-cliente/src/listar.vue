<script>
  const axios = require('axios');
  
  module.exports ={
    name: "listacontatos",
    created() {
      axios.get('http://10.112.1.102:3000/listar').then((ret) => this.contatos = ret.data);
    },
    data() {
      return {
        contatos: []
      }
    }
}
</script>

<style></style>

<template>
  <div>
    Oi!
    <ul>
      <li v-for="c in contatos">{{ c.nomecontato }} | {{ c.telefonecontato }}</li>
    </ul>
  </div>
</template>