<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :email-address="friend.email"
        :phone-number="friend.phone"
        :is-favorite="true"
      ></friend-contact>
    </ul>
  </section>
</template>
<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 456789",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "987 6543210",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
</style>
