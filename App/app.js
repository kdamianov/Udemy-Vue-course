const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal(){
      const randNum = Math.random();
      if (randNum < 0.5) {
        return "Learn Vue!"
      } else {
        return "Master Vue!"
      }
    }
  },
});
app.mount("#user-goal");
