<template>
<div>
  <router-link :to="{name:'Home'}">Home</router-link> |
  <router-link to="/about">About</router-link>
  <router-link to="/userProfile/1">UserProfile</router-link>
  <a href="" @click.prevent="userPage()">User</a>
</div>
</template>
<script>
export default {
  methods: {
    userPage(){
      this.$router.push('/user');
    }
  },
}
</script>