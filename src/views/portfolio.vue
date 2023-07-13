<template>
  <div class="portfolio_wrap">
    <div v-for="(item, index) in pf_arr" :key="item.href" >
      <div class="portfolio" 
        :ref="el => tiltElements[index] = el" 
        :style="card_style[index]" 
        @mouseover="handleMouseOver(index)" 
        @mouseout="handleMouseOut(index)"
      >
        <div class="card">
          <a :href="item.href" @focus="handleMouseOver(index)" @focusout="handleMouseOut(index)">{{ item.name }}</a>
          <img :src="img_src[index].src" alt="로고">
          <img :src="img_src[index].sub_img" alt="" v-if="index === 0" class="rotate_img">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VanillaTilt from 'vanilla-tilt';
import { onMounted, ref, reactive } from 'vue';

const pf_arr = [
  {
    name: '우석대 리뉴얼',
    href: 'http://lyd1040.dothome.co.kr/src/view/main/index.html#none',
  },
  {
    name: '할리스 리뉴얼',
    href: 'https://projectteamtwo.github.io/',
  },
];

const img_src = [
  {
    src: 'assets/images/Woosuk/Woosuk_Logo_inline.png',
    sub_img: 'assets/images/Woosuk/Woosuk_Logo_outline.png',
  },
  {
    src: 'assets/images/Hollys/o_logo_img.png',
  },
];

const card_style = [
  {
    background: '#0061c5',
    borderTop: '2px solid #569ce2',
    borderLeft: '3px solid #569ce2',
    backdropFilter: 'blur(3px)',
  },
  {
    background: '#f13c3c',
    borderTop: '2px solid #ff6565',
    borderLeft: '3px solid #ff6565',
    backdropFilter: 'blur(3px)',
  },
];

const tiltElements = reactive([]);

onMounted(() => {
  tiltElements.forEach((el) => {
    VanillaTilt.init(el);
  });
});

function handleMouseOver(index) {
  if(index ==0){
    tiltElements[index].style.background = 'url(assets/images/Woosuk/Woosuk__.gif)';
  }else{
    tiltElements[index].style.background = 'url(assets/images/Hollys/Hollys__.gif)';
  }
}

function handleMouseOut(index) {
  tiltElements[index].style.background = card_style[index].background;
}
</script>

<style scoped>
  .portfolio_wrap{

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5%;
  }
  .portfolio_wrap>div{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .portfolio_wrap .portfolio{
    position: relative;
    width: 240px;
    height: 300px;

    margin: 20px 50px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .portfolio_wrap .portfolio:hover{
    width: 240px;
    height: 300px;

    margin: 20px 50px;
    border-radius: 10px;

    

    box-shadow: 0px 0px 15px 1px #000;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .portfolio .card{
    width: 100%;
    height: 100%;

     color: #fff;
     text-decoration: none;

     transition: 0.3s;

     display: flex;
     justify-content: center;
     align-items: center;
  }
  .portfolio .card img{
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 120px;

    opacity: 0.5;

    z-index: -1;

    transition: 0.3s;
  }
  .portfolio .card img.rotate_img{
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    animation: 30s rotation_animate infinite linear;

  }@keyframes rotation_animate{
    0%{
      transform:translate(-50%, -50%) rotate(0);      
    }
    100%{
      transform:translate(-50%, -50%) rotate(360deg);
    }
  }

  .portfolio:hover .card img,
  .portfolio .card a:focus ~ img{
    opacity: 1;
  }
  .portfolio .card a{
    display: block;
    transition: 0.3s;

    color: #fff;

    font-size: 1.2em;
    font-weight: 700;

    text-decoration: none;
  }
  .portfolio:hover .card a,
  .portfolio .card a:focus{
    transform: translateY(100px);

    background: #2e2e2e80;

    padding: 10px 20px;
    border-radius: 5px;
  }

  .portfolio:hover .card a:hover,
  .portfolio .card a:focus{
    background: #0e71bd;

    box-shadow: 0 0 10px #fff;
  }
</style>