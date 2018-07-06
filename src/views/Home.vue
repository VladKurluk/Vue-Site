<template>
  <div class="home main-content">
    <div class="lef-content">
      <h1>20 YRS DESIGN</h1>

      <p class="subtxt">Gary has been a full stack developer for 2 decades and an instructor for the last 10 years.</p>
      <p class="subtxt">I've worked with LinkedIn, Lynda, Pluralsight and more.</p>
    </div>

    <div class="right-content img1">
      <button><router-link to="/portfolio/one" />Browse Work</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  }
}
</script>

<style scoped>

  .img1 {
    background: url('../assets/home.jpg');
    background-size: cover;
  }

</style>