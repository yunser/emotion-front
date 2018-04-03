<template>
    <my-page title="首页">
        <ul class="list">
            <li class="item" v-for="item, index in data">
                <router-link :to="'/gif/' + index">{{ item.name }}</router-link>
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

<style scoped>
</style>
