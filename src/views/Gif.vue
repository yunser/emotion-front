<template>
    <my-page title="GIF 配字幕">
        <ul class="demo-list">
            <li class="item" v-for="item, index in data">
                <router-link class="link" :to="'/gif/' + index">
                    <img class="thumb" :src="item.gifDemoUrl" />
                    <div class="title">{{ item.name }}</div>
                </router-link>
            </li>
        </ul>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                data: [],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get('https://gifmaker.develophelper.com/gif/category').then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.data = data.d
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
.demo-list {
    .item {
        float: left;
        width: 320px;
        height: 280px;
        margin-right: 16px;
        border: 1px solid #eee;
        border-radius: 4px;
        margin-bottom: 16px;
    }
    .thumb {
        display: block;
        width: 100%;
        margin-bottom: 16px;
    }
    .link {
        display: block;
        color: #333;
    }
    .title {
        padding: 0 16px;
    }
}
</style>
