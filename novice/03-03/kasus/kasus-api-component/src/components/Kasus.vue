<template>
  <div>
    <h4>Detail Post</h4>
    <div v-for="post in posts.slice(0, 5)" :key="post.userId + Math.random()">
      <p>Ini id dari Post : {{ post.id }}</p>
      <p>Ini title Post : {{ post.title }}</p>
      <p>Ini isi dari Post : {{ post.body }}</p>
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
