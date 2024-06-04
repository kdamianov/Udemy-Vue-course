const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      isListVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
      console.log(this.isListVisible);
    },
  },
});

app.mount("#assignment");
