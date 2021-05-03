<template>
  <div class="home">
    <h4>{{$store.state.count}}</h4>
    <v-btn @click="increment">Tambah</v-btn>
    <v-btn @click="changeAddress">Ganti Alamat</v-btn>
     <p>{{$store.state.user.title}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods:{
    increment(){
      this.$store.commit('incr');
    },
    changeAddress(){
      this.$store.commit('a/addressUp');
    }
  },
  async mounted(){
    await this.$store.dispatch('getUser');
  }
}
</script>
