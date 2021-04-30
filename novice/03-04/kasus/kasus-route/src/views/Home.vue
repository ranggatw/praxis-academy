<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="nextPage()">Pindah ke tampilan User Component</button>
  </div>
</template>

<script>
// Menambahkan route menggunakan methods dengan button
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    nextPage() {
      this.$router.push('/user')
    }
  }
}
</script>

