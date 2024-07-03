<template>
  <div>
    <!-- <TheHeader /> -->
    <the-header></the-header>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <button @click="setSelectedComponent('active-goals')">Active goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage goals</button>
    <!-- Dynamic component -->
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
//register component locally
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    // 'the-header': TheHeader
    TheHeader,
    UserInfo,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
