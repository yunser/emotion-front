<template>
    <my-page title="字幕制作" backable>
        <div class="page-loading-box" v-if="pageLoading">
            <div class="ui-loading">
                <ui-circular-progress :size="24"/>
            </div>
        </div>
        <div v-if="data">
            <div class="card mt-4">
                <!--<img class="card-img-top img-fluid" src="http://gifmaker.develophelper.com/demo/gif/2.gif" alt="">-->
                <div class="card-body">
                    <p class="card-text">
                        {{ data.name }}
                    </p>
                </div>
            </div>
            <!-- /.card -->

            <div class="card card-outline-secondary my-4">
                <div class="card-header">
                    字幕
                </div>
                <div class="card-body">
                    <ul class="input-list">
                        <li class="item" v-for="content, index in contents">
                            <ui-text-field class="input" v-model="inputs['' + index]" :hintText="content" />
                            <!-- <input type="text" class="input" v-model="inputs['' + index]" data-index="0" :placeholder="content" /> -->
                        </li>
                    </ul>

                    <div class="btns">
                        <ui-raised-button class="btn" label="生成" primary @click.prevent="make"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui-loading" v-if="loading">
            <ui-circular-progress :size="24"/>
        </div>
        <img class="result" :src="result" v-if="result"/>
    </my-page>
</template>

<script>
    // import {apiDomain} from '../config'
    const SEP = '##$@?$?@$##'

    export default {
        data () {
            return {
                pageLoading: false,
                loading: false,
                data: null,
                contents: [],
                inputs: {},
                result: null,
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
                this.pageLoading = true
                let id = this.$route.params.id
                this.$http.get('/gif/category').then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.data = data.d[parseInt(id)]
                        console.log(this.data)
                        this.contents = this.data.contents.split(SEP)
                        for (let idx in this.contents) {
                            this.inputs[idx] = this.contents[idx]
                            // this.inputs[idx] = ''
                        }
                        this.pageLoading = false
                    },
                    response => {
                        this.pageLoading = false
                        console.log(response)
                    })
            },
            make() {
                for (let idx in this.contents) {
                    this.contents[idx] = this.inputs[idx]
                }
                this.loading = true
                this.$http.post('/gif/make', this.$qs.stringify({
                    tplid: this.data.tplid,
                    content: this.contents.join(SEP)
                })).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        // this.result = apiDomain + '/' + data.d.gifurl
                        this.result = data.d.gifurl
                        this.loading = false
                    },
                    response => {
                        console.log(response)
                        this.loading = false
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-list {
        .item {
            margin-bottom: 8px;
        }
        .input {
            width: 240px;

        }
    }
    .result {

    }
    .btns {
        margin-bottom: 16px;
        .btn {
            margin-right: 8px;
        }
    }
</style>
