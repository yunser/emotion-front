<template>
    <my-page title="举牌小人图片生成">
        <div class="common-container container">
            <ui-text-field v-model="text" label="文字内容" multiLine :rows="3" :rowsMax="6" hintText="目前一行为 8 个字" />
            <div class="btns">
                <ui-raised-button primary label="生成" @click="make" />
            </div>
            <img class="result" :src="src" alt="图片" v-if="src">
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                text: '',
                src: null
            }
        },
        mounted() {
            this.src = 'https://up.yunser.com/image.php?text=欢迎使用！|本工具由好工具网免费提供。'
        },
        methods: {
            make() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入文字内容'
                    })
                    return
                }
                this.src = 'https://up.yunser.com/image.php?text=' + this.text.replace(/\n/, '|')
                console.log(this.src)
            }
        }
    }
</script>

<style lang="scss" scoped>
.result {
    display: block;
    max-width: 400px;
}
.btns {
    margin-top: 16px;
    margin-bottom: 16px;
}
</style>
