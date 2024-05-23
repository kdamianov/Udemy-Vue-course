const app = Vue.createApp({
  data() {
    return {
      name: "Kalin",
      age: 100,
      imageURL: "https://miro.medium.com/v2/resize:fit:900/1*OrjCKmou1jT4It5so5gvOA.jpeg"
    };
  },
  methods: {
    agePlusFive(){
      return this.age + 5;
    },
    calculateRandom(){
      return Math.random();
    }
  },
});
app.mount("#assignment");
