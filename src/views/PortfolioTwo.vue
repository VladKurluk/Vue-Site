<template>
  <div class="two main-content">
    <div class="left-content slideUp">

      <router-link to="/portfolio/one"><img src="../assets/arrow-up.svg" class="arrow arrow-up" alt="Arrow up Link"></router-link>

      <h1>Mobile UI</h1>

      <p class="subtxt">Adipisicing labore dolore proident non nostrud sint cupidatat labore.</p>
      <p class="subtxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur culpa itaque ipsa sapiente rem delectus in. Sequi inventore, numquam aut veniam totam, ipsa cumque quisquam sit itaque magni modi vitae.</p>

      <router-link to="/portfolio/three"><img src="../assets/arrow-down.svg" class="arrow arrow-down" alt="Arrow down Link"></router-link>
    </div>

    <div class="right-content img2">
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'two'
}
</script>

<style lang="scss" scoped>

  $page_color: #48b886;

  .left-content {

    h1 {
      text-transform: uppercase;
      color: $page_color;
    }
  }

  .img2 {
    background: url('../assets/phone.jpg');
    background-size: cover;
    background-position: 50%;
  }


</style>