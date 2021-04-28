<template>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compileMarkDown"></div>
  </div>
</template>

<script>
import _ from 'lodash';
import marked from 'marked';
import '../assets/componentStyle/markdown.css'


export default {
  name : 'MarkDown',
  data : () => ({
    input : "# hello"
  }),
  computed: {
    compileMarkDown : function() {
      return marked(this.input, { sanitize: true});
      // return console.log('wkwkw')
    }
  },
  methods : {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
}
</script>

<style>

</style>