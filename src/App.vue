<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Noto+Sans:wght@400;700&display=swap");

#app {
  font-family: "Barlow", sans-serif;

  text-align: center;
  color: #000;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
