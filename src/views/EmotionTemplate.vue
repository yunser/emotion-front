<template>
    <my-page class="page-emotion" title="表情模板" :page="page">
        <ul class="emotion-list">
            <li class="item" v-for="emotion in emotions">
                    <img class="img" :src="emotion.url">
                <!-- <div class="img-box">
                </div> -->
            </li>
        </ul>
        <div class="btns">
            <ui-raised-button label="加载更多" primary @click="loadMore" />
        </div>
    </my-page>
</template>

<script>
    import {imgDomain, emotionDomain} from '@/config'
    console.log('emotionDomain', emotionDomain)

    export default {
        data () {
            return {
                currentPage: 1,
                emotions: [],
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'apps',
                        //     href: 'https://app.yunser.com/',
                        //     target: '_blank',
                        //     title: '应用'
                        // }
                    ]
                }
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            loadMore() {
                this.currentPage++
                this.loadData()
            },
            loadData() {
                this.$http.get(`${emotionDomain}/emotion_templates?page=${this.currentPage}&page_size=40`).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        if (this.currentPage === 1) {
                            this.emotions = data
                        } else {
                            this.emotions = this.emotions.concat(data)
                        }
                        // if (data.code === 200) {
                        // }
                    },
                    response => {
                        console.log(response)
                    })
            },
            getUrl(emotion) {
                function getExt(down) {
                    if (down === 2) {
                        return 'png'
                    } else if (down === 3) {
                        return 'gif'
                    } else {
                        return 'jpg'
                    }
                }
                return `${imgDomain}/emotion/${emotion.bid}.${getExt(emotion.down)}`
            }
        }
    }
</script>

<style lang="scss" scoped>
// .item {
//     padding: 5px;
//     float: left;
//     .img-box {
//         padding:5px;
//         border:1px solid #CCCCCC;
//         box-shadow:0 0 5px #CCCCCC;//阴影效果
//         border-radius:5px;  //图片圆角效果
//     }
//     .img {
//         width:150px;
//         height:auto;  //规定了图片宽度以后，高度自适应，否则可能引起图片变样
//     }
// }
.emotion-list {
    display: flex;/*显示模式设置为弹性盒子*/
    flex-wrap: wrap;/*进行强制换行*/
    &:after{            
        /*对最后一个伪元素进行最大限度伸缩*/            
        content: ' ';            
        flex-grow: 999999999999999999999999999999999999;        
    }
}
.item {
    height: 160px;
    width: auto;            
    margin-right: 8px;         
    margin-bottom: 8px;         
    // flex-grow: 1;/*进行按比例伸缩*/            
    object-fit: cover;
    background-color: #fff;
    .img {
       width: auto;
       height: 100%;
    }
}
.page-emotion {
    height: 100%;
    background-color: #fefefe;
}
.btns {
    margin-top: 16px;
}
</style>
