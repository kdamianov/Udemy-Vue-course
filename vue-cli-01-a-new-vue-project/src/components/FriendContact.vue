<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">
      {{ !friendIsFavorite ? "Set" : "Remove" }} Favorite
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone: </strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email: </strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, // default value when the property is missing
    },
  },
  // defines the events that are emited to the parent vue
  emits: ["toggle-favorite", "delete-friend"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("ID is missing!");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend(){
      this.$emit("delete-friend", this.id)
    }
  },
};
</script>
