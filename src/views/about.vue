<template>
    <div id="about_wrap">
        <section class="skills_wrap">
            <h2 class="skills_text">기술스택</h2>

            <div class="skills_grapy">
                <div class="skills_items" v-for="(skill,index) in skill_list" :key="skill.text">
                    <h3 class="skill_text">{{ skill.text }}</h3>
                    
                    <div class="chart">
                        <div class="chart_color" :style="chart_color[index]"></div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="my_intro_wrap">
            <h2 class="Plan_text">이런 개발자가 되고싶어요!</h2>
            <ul class="my_goal">
                <li>사용자 요구사항을 전부 만족시켜줄 수 있는 개발자</li>
                <li>어떤 환경에서도 잘 동작할 수 있는 웹을 만들 수 있는 개발자</li>
                <li>애니메이션을 활용하여 사람들의 눈을 즐겁게해줄 수 있는 개발자</li>
            </ul>
        </section>

        <section class="my_card_wrap">
            <div class="my_card">
                <div class="card_contents" v-for="card_contents in card_contents_name" :key="card_contents.name">
                    <h2 class="card_contents_name_text">{{ card_contents.name }}</h2>
                    
                    <div class="card_contents_center" v-if="card_contents.name=='contect'">
                        <ul class="contents_item_box" >
                            <li class="contents_item" v-for="item in card_contect_itemList" :key="item.contect_item">
                                <div class="contnets_icon"><i :class="item.icon"></i></div>

                                <div class="contents_texts">{{ item.contect_item }}</div>
                            </li>
                        </ul>
                    </div>

                    <ul class="contents_item_box" v-else>
                        <li class="contents_item" v-for="item in certificate_itemList" :key="item.certificate">
                           <div class="contents_texts">{{ item.certificate }}</div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    </div>

</template>

<script setup>
    import { reactive, onMounted } from 'vue';

    // skills_wrap
    const skill_list =[{text:'html'},{text:'css'},{text:'js'},{text:'jqeury'},{text:'vue'}]
    const chart_color=reactive([
        {width:'0%',background:'#E96228'},
        {width:'0%',background:'#2862E9'},
        {width:'0%',background:'#F7D13D'},
        {width:'0%',background:'#0864A6'},
        {width:'0%',border:'0',borderTop:'10px solid #38475D',background:'#67AC7E'}
    ])

    //my_card_wrap
    const card_contents_name = [{name:'contect'},{name:'certificate'}]
    const card_contect_itemList = [
        {icon:'fas fa-phone',contect_item:'010-2388-0662'},
        {icon:'fas fa-envelope',contect_item:'skswngussla @ naver.com'},
        {icon:'fas fa-map-marked-alt',contect_item:'초월읍'},
        {icon:'fas fa-project-diagram',contect_item:'lyd1040 @ dothome.co.kr'},
    ]
    const certificate_itemList = [{certificate:'정보처리기사'},{certificate:'모스마스터'}];

    onMounted(() => {
        for (let x = 0; x < chart_color.length; x++) {
            let width;
            if(x==0){ //html
                width = '80%'
            }else if(x==1){ //css
                width = '80%'
            }else if(x==2){ //js
                width = '70%'
            }else if(x==3){ //jqeury
                width = '80%'
            }else { // vue
                width = '50%'
            }

            setTimeout(() => {
                chart_color[x].width = width;
            }, (x + 1) * 100);
        }
    });
</script>

<style scoped>
    
    .skills_wrap,
    .my_card_wrap,
    .my_intro_wrap{
        padding: 30px 0;

        border-bottom: 1px solid #d3d3d3;
    }
    
    .skills_wrap .skills_text,
    .my_intro_wrap .Plan_text{
        width: 80%;

        margin: auto;
        padding-left: 3px;
        padding-bottom: 10px;

        font-size: 1.5em;
        font-weight: 700;

        transition: 0.2s;
    }
    
    .skills_wrap:hover .skills_text,
    .my_intro_wrap:hover .Plan_text{
        letter-spacing: 5px;
    }
    
    /******** Skill ********/
    .skills_items{
        width: 80%;

        margin:10px auto;

        display: flex;
    }
    .skills_items .skill_text{
        width: 15%;

        border-right: 0;
        padding-left: 3px;
        border-bottom: 1px solid #d3d3d3;
    }
    .skills_items .chart{
        width: 85%;

        border: 1px solid #808080;

        overflow: hidden;
    }
    .skills_items .chart .chart_color{

        height: 20px;
        background: rgb(37, 193, 255);

        transition: 0.5s;
        transition-timing-function: ease-out;
    }

    /****** my_intro ******/
    .my_intro_wrap .Plan_text{
        margin-bottom: 10px;
    }
    .my_intro_wrap .my_goal{
        width: 80%;

        margin: auto;
    }

    .my_intro_wrap .my_goal{
        width: 80%;

        margin: auto;

        list-style-type: disc;
    }

    .my_intro_wrap .my_goal li{
        margin: 10px 0;

        transform: translateX(30px);
    }

    /****** my_card ******/
    .my_card_wrap{
        transform: translateY(30px);
        border-bottom: 0;
    }
    .my_card_wrap .my_card{
        width: 60%;

        margin: auto;
        border: 1px solid;
        border-radius: 20px;
        padding: 30px;

        display: flex;
        flex-wrap: wrap;
    }
    .my_card_wrap .card_contents{
        width: 50%;
    }    

    .my_card_wrap .card_contents .card_contents_name_text{
        padding-bottom: 30px;

        font-size: 1.5em;
        font-weight: 700;
        transition: 0.2s;
    }
    .my_card_wrap .card_contents .contents_item_box .contents_item{
        display: flex;
        gap: 20px;

        margin: 10px 0;
    }

    /* my_card -> certificate */
    .my_card_wrap .card_contents:nth-child(2){
        text-align: end;

        border-left: 1px solid ;
    }
    .my_card_wrap .card_contents:nth-child(2) .contents_item_box .contents_item{
        justify-content: end;
    }


    @media screen and (max-width:1200px) {
        
        .skills_wrap .skills_text{
            width: 100%;

            margin: auto;

            text-align: center;
        }
        
        .skills_items{
            width: 80%;

            margin:10px auto;

            display: flex;
        }
        .skills_items .skill_text{
            width: 20%;

            border-right: 0;
            padding-left: 3px;
        }
        /* my_intro */
        .my_card_wrap{
            transform: translateY(0);
        }
        .my_intro_wrap .Plan_text{
            text-align: center;
        }
        .my_intro_wrap .my_goal{
            text-align: center;

            list-style-type: none;
        }
        .my_intro_wrap .my_goal li{
            text-align: center;

            transform: translate(0);
        }

        /* my_card */
        .my_card_wrap .my_card{
            width: 100%;

            justify-content: space-between;
            flex-wrap: wrap;

            border: 0;
            padding: 0;
        }
        .my_card_wrap .card_contents{
            width: 50%;
        } 
        .my_card_wrap .card_contents .card_contents_center{
            width: 50%;
            margin: auto;
        }
        .my_card_wrap .card_contents .card_contents_name_text{
            text-align: center;
        }
        .my_card_wrap .card_contents .contents_item_box .contents_item{
            justify-content: start;
        }

        /* my_card -> certificate */
        .my_card_wrap .card_contents:nth-child(2) .contents_item_box .contents_item{
            justify-content: center;
        }
    }

@media screen and (max-width:500px){
    /* my_intro */
    .my_intro_wrap .my_goal{
            list-style-type: disc;
        }

    /* my_card */
    .my_card_wrap .card_contents{
        width: 100%;

        padding: 30px 0;
        border-bottom: 1px solid #d3d3d3 ;
    } 
    .my_card_wrap .card_contents:nth-child(1){
        padding-top: 0;
    }

    .my_card_wrap .card_contents .card_contents_name_text{
        padding-bottom: 10px;
    }

    .my_card_wrap .card_contents:hover .card_contents_name_text{
        letter-spacing: 5px;
    }

    /* my_card -> certificate */
    .my_card_wrap .card_contents:nth-child(2){
        text-align: end;

        border-left:0;
        border-bottom: 0;
    }

    .my_card_wrap .card_contents .contents_item_box .contents_item{
        font-size: 0.9em;
    }

    /* my_card -> certificate */
}
</style>