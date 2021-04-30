<template>
  <div>
    <h1>Detail Post :</h1>
    <div v-for="(post, index) in posts.slice(0, 5)" :key="index">
      <div class="card">
        <header># {{ post.id }} Title Post : {{ post.title }}</header>
        <p>Content : {{ post.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    posts: "",
  }),
  methods: {
    async getPost() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = res.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style>
.card {
  border: 2px solid gray;
  border-radius: 9px;
  margin-bottom: 10px;
  /* padding: 8px; */
}

.card header {
  display: block;
  border-radius: 8px 8px 0 0;
  background: orange;
  padding: 3px;
  color: white;
  font-size: 1.2em;
}

.card p {
  padding: 0.5em;
}
</style>
