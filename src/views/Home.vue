<template>
    <my-page title="表情" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        // name: '分类',
                        apps: [
                            // {
                            //     name: '文本',
                            //     desc: '',
                            //     icon: '/static/img/text.svg',
                            //     to: 'xxx',
                            //     href: 'https://text.yunser.com/',
                            //     target: '_blank'
                            // },、
                            {
                                name: '表情助手',
                                desc: '',
                                icon: '/static/img/face_1.svg',
                                to: '/emotion'
                            },
                            {
                                name: '表情模板',
                                desc: '',
                                icon: '/static/img/face_1.svg',
                                to: '/emotion_template'
                            },
                            {
                                name: 'GIF 配字幕',
                                desc: '',
                                icon: '/static/img/face_1.svg',
                                to: '/gif'
                            },
                            {
                                name: '小人举牌图生成',
                                desc: '',
                                icon: '/static/img/face_1.svg',
                                to: '/up'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=emotion',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=emotion',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
</style>
