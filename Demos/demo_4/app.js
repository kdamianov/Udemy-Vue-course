const app = Vue.createApp({
  data() {
    return {
<<<<<<< HEAD
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1)
    }
  },
});

app.mount("#user-goals");
=======
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses(){
        return {active: this.boxASelected}
    },
    boxBClasses(){
        return {active: this.boxBSelected}
    },
    boxCClasses(){
        return {active: this.boxCSelected}
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
>>>>>>> 0168126cb4c3b93d9dac44b2c034dee97f2c311b
