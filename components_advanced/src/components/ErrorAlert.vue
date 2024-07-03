<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 30vw;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8 px rgba(0, 0, 0, 0.26);
  padding: 1 rem;
}
</style>
