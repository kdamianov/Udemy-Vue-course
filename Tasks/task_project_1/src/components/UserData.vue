<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Name" v-model="enteredName" />
      <input type="text" placeholder="Age" v-model="enteredAge" />
      <button>Set user data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
