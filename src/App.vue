<template>
  <div id="wrap">
    <Header></Header>
    <main>
      <div id="link_wrap">
        <router-link to="/" >About</router-link>
        <router-link to="/portfolio" >Portfolio</router-link>
      </div>
      <div class="show_screen" id="show_screen">
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
  height: 100%;
  

  border: 1px solid #d3d3d3;
}
main #link_wrap{
  padding: 10px;
  border-bottom: 1px solid #d3d3d3;

  display: flex;
  justify-content: center;
}
main #link_wrap a{
  width: 140px;

  padding: 5px 20px;

  text-align: center;
  text-decoration: none;

  font-size: 1.2rem;
  font-weight: 700;

  color: #000;

  box-shadow: 0 0 3px #000;
}
main #link_wrap a:nth-child(1){
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
main #link_wrap a:nth-child(2){
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

main #link_wrap a.router-link-active.router-link-exact-active{
  border: 1px solid #808080;

  box-shadow: inset 0 0 3px #000;
}

main #show_screen{
  height: calc(867.484px - 52.2px);
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
