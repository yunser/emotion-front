<template>
    <my-page title="字幕制作" backable>
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
                    <div class="form-group" v-for="content, index in contents">
                        <input type="text" class="form-control" v-model="inputs['' + index]" data-index="0" :placeholder="content" />
                    </div>

                    <a href="javascript:void(0);" id="make" class="btn btn-success" @click.prevent="make">咻的一下生成</a>
                </div>
            </div>
            <img class="result" :src="result" v-if="result"/>
        </div>

    </my-page>
</template>

<script>
    const SEP = '##$@?$?@$##'

    export default {
        data () {
            return {
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
                let id = this.$route.params.id
                this.$http.get('/gif/category').then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.data = data.d[parseInt(id)]
                        console.log(this.data)
                        this.contents = this.data.contents.split(SEP)
                        for (let idx in this.contents) {
//                            this.inputs[idx] = this.contents[idx]
                            this.inputs[idx] = ''
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            make() {
                for (let idx in this.contents) {
                    this.contents[idx] = this.inputs[idx]
                }
                this.$http.post('/gif/make', this.$qs.stringify({
                    tplid: this.data.tplid,
                    content: this.contents.join(SEP)
                })).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.result = data.d.gifurl
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>
    .result {

    }
</style>
