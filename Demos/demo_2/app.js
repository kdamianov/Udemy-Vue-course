const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
