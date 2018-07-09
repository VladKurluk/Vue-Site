<template>
  <div class="home main-content">
    <div class="lef-content slideUp">
      <h1>Crypto Logo</h1>

      <p class="subtxt">Adipisicing labore dolore proident non nostrud sint cupidatat labore.</p>
      <p class="subtxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur culpa itaque ipsa sapiente rem delectus in. Sequi inventore, numquam aut veniam totam, ipsa cumque quisquam sit itaque magni modi vitae.</p>

      <router-link to="/portfolio/two"><img src="../assets/arrow-down.svg" class="arrow arrow-down" alt="Arrow down Link"></router-link>
    </div>

    <div class="right-content img2">
      <img src="../assets/logo.svg" alt="Logo">
    </div>
  </div>
</template>

<script>

export default {
  name: 'one'
}
</script>

<style lang="scss" scoped>

  $page_color: #625B7E;

  .lef-content {

    h1 {
      text-transform: uppercase;
      color: $page_color;
    }
  }

  .img2 {
    background: $page_color;

    img {
      width: 50%;
    }
  }

</style>