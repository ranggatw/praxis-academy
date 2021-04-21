var app = new Vue({
  el: "#app",
  data: {
    question: "",
    answer: "I cannot give you an answer until you ask a question!",
  },
  watch: {
    question(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing ...";
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a questionmark ;-)";
        return;
      }
      this.answer = "Thinking ....";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function (res) {
          vm.answer = _.capitalize(res.data.answer);
        })
        .catch(function (err) {
          vm.answer = "Error! Could not reach the API" + err;
        });
    },
  },
});
