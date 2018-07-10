<template>
  <div class="three main-content">
    <div class="lef-content slideUp">

      <router-link to="/portfolio/two"><img src="../assets/arrow-up.svg" class="arrow arrow-up" alt="Arrow down Link"></router-link>

      <h1>Print</h1>

      <p class="subtxt">Adipisicing labore dolore proident non nostrud sint cupidatat labore.</p>
      <p class="subtxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur culpa itaque ipsa sapiente rem delectus in. Sequi inventore, numquam aut veniam totam, ipsa cumque quisquam sit itaque magni modi vitae.</p>

    </div>

    <div class="right-content img2">

    </div>
  </div>
</template>

<script>

export default {
  name: 'three'
}
</script>

<style lang="scss" scoped>

  $page_color: #5487a8;

  .lef-content {

    h1 {
      text-transform: uppercase;
      color: $page_color;
    }
  }

  .img2 {
    background: url('../assets/card.jpg');
    background-size: cover;
    background-position: 50%;
  }

</style>