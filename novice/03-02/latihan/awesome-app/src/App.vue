<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>s -->
    <!-- Vbind untuk binding satu arah -->
    <input type="text" placeholder="ini inputan" v-bind:value="pesan" />
    <!-- V-model untuk binding dua arah -->
    <input type="text" placeholder="ini inputan" v-model="pesan" />
    <p v-if="kondisi">{{ pesan }}</p>
    <p v-else>{{ toLarges }}</p>
    <button v-on:click="changeKondisi">Rubah kondisi</button>
    <button v-on:click="changePesan">Rubah Pesan</button>
    <div v-for="people in peoples" :key="people.age">
      <p>nama : {{people.name}}</p>
      <p>age: {{people.age}}</p>
    </div>
    <ComponentBaru />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import ComponentBaru from "./components/ComponentBaru"
import '@/assets/css/styles.css';
import ComponentBaru from './components/ComponentBaru.vue';

export default {
  name: "App",
  data: () => ({
    pesan: "selamat pagi",
    kondisi: true,
    peoples : [
      {
      name: 'jhon',
      age: 21
      },
      {
      name: 'Ani',
      age: 20
      },
      {
      name: 'Bruce',
      age: 24
      },
      ]
  }),
  components: {
    // HelloWorld,
    ComponentBaru
  },
  computed: {
    toLarges() {
      return this.pesan.toUpperCase();
    },
  },
  methods: {
    changePesan() {
      this.pesan = "selamat sore"
    },
    changeKondisi() {
      this.kondisi = !this.kondisi;
    }
  },

};
</script>

<style scope>

</style>
