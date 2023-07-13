<template>
  <div id="wrap">
    <Header></Header>
    <main>
      <div id="link_wrap">
        <router-link to="/">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
      </div>
      <div class="show_screen">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
  import Header from './components/header.vue'
</script>

<style scoped>
#wrap{
  width: 100%;

  margin: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
main{
  width: 840px;

  border: 1px solid #d3d3d3;
}
main #link_wrap{
  padding: 10px;
  border-bottom: 1px solid #d3d3d3;

  display: flex;
  justify-content: center;
}
main #link_wrap a{
  padding: 0 10px;
}
main #link_wrap a:nth-child(1){
  border-right: 1px solid #808080;
}

@media screen and (max-width:1200px) {
  #wrap{
    width: 100%;
  }
  main{
    width: 100%;
  }
}
</style>
