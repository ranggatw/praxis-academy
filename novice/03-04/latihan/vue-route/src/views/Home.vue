<template>
  <div class="home">
    <h3>Ini Home</h3>
    <button @click="nextPage()">Pindah</button>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue"; */

export default {
  name: "Home",
  components: {
    /* HelloWorld, */
  },
  methods: {
    nextPage(){
      this.$router.push("/about");
    }
  },
};
</script>
