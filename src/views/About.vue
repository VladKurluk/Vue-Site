<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt">At the moment, for me in the priority development of Web applications using framework Vue.js. My goal is to get work on interesting projects that will benefit the human being. For me it is important to be constantly in the process of improvement and development.</p>

      <router-link class="button-link" to="/portfolio/one">Look at my work</router-link>
    </div>
    <div class="right-content">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt illum laborum, consequatur delectus, facilis, veritatis quo doloribus earum eveniet explicabo sed. Reprehenderit, dolorum! Perspiciatis dignissimos sit ratione libero reiciendis.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt illum laborum, consequatur delectus, facilis, veritatis quo doloribus earum eveniet explicabo sed. Reprehenderit, dolorum! Perspiciatis dignissimos sit ratione libero reiciendis.</p>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

  .left-content {
    background-color: #ffe476;
  }
 
  .right-content {
    background-color: #fff;
    padding: 50px;
    margin-top: 80px;
    display: block;
  }

  .button-link {
    font-size: 1.5em;
  }

  .subtxt {
    font-size: 1.5em;
    line-height: 30px;
    margin-top: 30px;
    margin-bottom: 100px;
  }

</style>