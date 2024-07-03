<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
        <!-- defined prop to bind the goal ("v-bind" or ":") -->
        <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn VueJs"],
    };
  },
};
</script>
