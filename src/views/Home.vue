<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>Vue portfolio SPA</h1>
      <p class="subtxt">Gary has been a full stack developer for 2 decades and an instructor for the last 10 years.</p>
      <p class="subtxt">I've worked with LinkedIn, Lynda, Pluralsight and more.</p>
    </div>
    <div class="right-content img1">

      <router-link class="button-link" to="/portfolio/one">Browse Work</router-link>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'home'
  }

</script>
<style scoped>
  .img1 {
    background: url('../assets/home.jpg');
    background-size: cover;
  }

</style>
