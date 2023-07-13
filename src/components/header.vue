<template>
  <header id="header" class="header">
    <h1>프로필</h1>
    <section class="photo-name_wrap">
        <div class="photo_wrap">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjZfMjUx%2FMDAxNjc5ODM0MzkxNzg5.SomK3qflKEf0ugQ9HqeikVETiazukyq1aNgj767ZXMMg.d9xeVYIkSi5cL39Zv658_wFaZAWBjQSiApP9Dap3wdgg.PNG.npay1%2F20230326%25A3%25DF213901%25A3%25DF832.png&type=a340" alt="">
        </div>

        <p class="my_name">박주현</p>
    </section>

    <section class="my_hobbites_wrap">
        <h2 class="hobbies_text">Hobbies</h2>

        <div class="my_hobbies">
            <button type="button" v-for="item in my_hobbies_arr" :key="item.hobbies">
                <i :class="item.icon"></i>
                <div class="hoverDiv">{{ item.hobbies }}</div>
            </button>
        </div>
    </section>

    <section class="my_education_wrap">
        <h2 class="education_text">Education</h2>

        <div class="education_log_wrap">
            <div class="education_log" v-for="item in education_year_arr" :key="item.title">
                <h3 class="education_year">{{ item.year }}</h3>

                <div class="education_title">
                    <h4>{{ item.title }}</h4>
                    <p v-if="item.title_content">{{ item.title_content }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="SNS_wrap">
        <h2 class="SNS_text">SNS</h2>

        <div class="SNS_list_wrap">
            <button type="button" v-for="item in SNS_arr" :key="item.SNS_item"><i :class="item.SNS_item"></i></button>
        </div>
    </section>
  </header>
</template>

<script setup>
    const my_hobbies_arr = [{icon:'fas fa-gamepad',hobbies:'게임'},{icon:'fas fa-code',hobbies:'코딩'},{icon:'fas fa-bed',hobbies:'잠'},{icon:'fas fa-plane',hobbies:'여행'}];
    const education_year_arr = 
    [
        {
            year:'2014/03 - 2016/02',
            title: '성남서고등학교',
        },
        {
            year:'2016/03 - 2023/02',
            title:'우석대학교 진천캠퍼스',
        },
        {
            year:'2023/02 - 2023/08',
            title:'그린 컴퓨터 아카데미',
            title_content:'프로젝트기반 프론트엔드(REACT,VUE) 웹&앱 SW개발자 양성과정'
        }
    ];
    const SNS_arr = [{SNS_item:'fab fa-facebook'},{SNS_item:'fab fa-instagram'},{SNS_item:'fab fa-discord'}];

</script>

<style scoped>
    .header{
        width: 360px;

        border: 1px solid #d3d3d3;
    }
    /* 공통 */
    .photo-name_wrap,
    .my_hobbites_wrap,
    .my_education_wrap,
    .SNS_wrap{
        width:100%;

        border-bottom: 1px solid #d3d3d3;
        padding-bottom: 10px;
        margin-top: 10px;
    }

    .my_name,
    .hobbies_text,
    .education_text,
    .SNS_text,h1{
        position: relative;
        width: 80%;

        margin: auto;
        padding: 10px 0;

        font-size: 1.2em;
        font-weight: 700;

        text-transform: uppercase;
        letter-spacing: 1px;

        transition: 0.2s;
    }

    .my_hobbites_wrap:hover .hobbies_text,
    .my_education_wrap:hover .education_text,
    .SNS_wrap:hover .SNS_text{
        letter-spacing: 5px;
    }

    /* 프로필 텍스트 */
    h1{
        text-align: center;
    }
    /* 프로필 사진 */
    .photo-name_wrap .photo_wrap{
        width: 80%;

        margin: auto;

        display: flex;
        justify-content: center;
    }
    .photo-name_wrap .photo_wrap img{
        width: 50%;

    }
    .photo-name_wrap>p{
        width: 80%;
        text-align: center;
    }

    /* 취미 */
    .my_hobbites_wrap .my_hobbies{
        width: 80%;

        margin: auto;

        display: flex;
        flex-wrap: wrap;
    }
    .my_hobbites_wrap .my_hobbies button{ 
        width: 100px;
        height: 100px;

        border-radius: 5px;
        border: 0;
        margin: 10px auto;

        background: #808080;
        color: #fff;

        cursor: pointer;

        transition: 0.3s;
        
        font-size: 1.5rem;
    }
    .my_hobbites_wrap .my_hobbies button:hover{
        box-shadow: 0px 0px 5px #000;

        color: purple;
    }
    .my_hobbites_wrap .my_hobbies button .hoverDiv{
        height: 0;

        overflow: hidden;

        transition: 0.3s;

        font-size: 0.8rem;
    }
    .my_hobbites_wrap .my_hobbies button:hover .hoverDiv{
        height: auto;
        overflow: auto;

    }

    /* 교육 */
    .my_education_wrap .education_log_wrap{
        width: 80%;

        margin: auto;
    }

    .my_education_wrap .education_log_wrap .education_log{
        width: 100%;
        
        margin-bottom: 10px;
    }

    .my_education_wrap .education_log_wrap .education_log .education_year{
        font-weight: 700;
        font-size: 0.9em;

        color: #1ba7df;
    }
    .my_education_wrap .education_log_wrap .education_log .education_year::before{
        content: '*';
    }
    .my_education_wrap .education_log_wrap .education_log .education_title{
        margin-top: 5px;
        padding-left: 10px;
    }
        .my_education_wrap .education_log_wrap .education_log .education_title h4{
            font-size: 0.9em;
        }
        .my_education_wrap .education_log_wrap .education_log .education_title p{
            font-size: 0.8em;
            padding-top: 5px;
        }

    /* SNS */
    .SNS_wrap{
        border: 0;
    }
    .SNS_wrap .SNS_list_wrap{
        width: 80%;

        margin: auto;
        padding-top: 10px;

        display: flex;
        gap: 10px;
    }
    .SNS_wrap .SNS_list_wrap button{
        width: 30px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: 0;
        border: 1px solid;
        border-radius: 50%;

        transition: 0.2s;

        cursor: pointer;
    }
    .SNS_wrap .SNS_list_wrap button:hover{
        background: #e64a16;
        color: #fff;

    }
    @media screen and (max-width:1200px) {
        .header{
            width: 100%;
        }
        /* 공통 */
        .my_name,
        .hobbies_text,
        .education_text,
        .SNS_text{
            width: 80%;

            margin: auto;
            padding: 10px 0;

            text-align: center;
        }
        .my_hobbites_wrap .my_hobbies button{ 
            width: 20%;
            height: 78px;

            margin: 10px auto;
        }
        .my_education_wrap .education_log_wrap{
            display: flex;
        }
        .my_education_wrap .education_log_wrap .education_log .education_title{
            margin-top: 5px;
            padding-left: 0;
        }

        /* SNS */
        .SNS_wrap .SNS_list_wrap{
            display: flex;
            justify-content: center;
        }
    }
</style>