const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal(){
      const randNum = Math.random();
      if (randNum < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  },
});
app.mount("#user-goal");
