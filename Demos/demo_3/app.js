const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Damyanov";
    // },
    counter(value){
      if(value >50) {
        const that = this
        setTimeout(function () {
          that.counter = 0;
        }, 1000)
      } else if (value < 0) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullName(){
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Damyanov";
    }
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Damyanov";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
