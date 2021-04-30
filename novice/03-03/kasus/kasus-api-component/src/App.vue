<template>
  <div id="app">
    <Kasus />
  </div>
</template>

<script>
import Kasus from "@/components/Kasus";

export default {
  name: "App",
  components: {
    Kasus,
  },
};
</script>

<style>
#app { 
  padding: 2em;
  font-family: sans-serif;
}

</style>
