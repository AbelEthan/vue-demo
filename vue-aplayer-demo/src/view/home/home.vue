<template>
    <div style="margin: 0 auto;width: 40%;">
        <h1 class="demo-title">Vue-APlayer-demo</h1>

        <h2 class="demo-title">默认</h2>
        <aplayer theme="pic" :music="music.info"></aplayer>
        <br>

        <h2 class="demo-title">列表形式</h2>
        <aplayer style="margin: 0;padding: 0;border: 0;"
                 :music="music.list[0]"
                 :list="music.list"
                 theme="pic"
                 showLrc
                 mutex
                 :controls="music.audio.controls"
                 :muted="music.audio.muted"
                 :volume="music.audio.volume"
                 :preload="music.audio.preload"
                 :listMaxHeight="'835px'"
                 ref="player">
        </aplayer>
        <a-form :form="music.audio" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <!--<a-form-item label="preload">-->
            <!--<a-radio-group v-model="music.audio.preload">-->
            <!--<a-radio value="none">none</a-radio>-->
            <!--<a-radio value="metadata">metadata</a-radio>-->
            <!--<a-radio value="auto">auto</a-radio>-->
            <!--</a-radio-group>-->
            <!--</a-form-item>-->
            <a-form-item label="是否静音">
                <a-switch :defaultChecked="!music.audio.muted" @change="onChange">
                </a-switch>
            </a-form-item>
            <a-form-item label="音量">
                <a-slider :min="0" :max="1" v-model="music.audio.volume" :step="0.01"/>
            </a-form-item>
        </a-form>
        <br>

        <h2 class="demo-title">mini模式</h2>
        <aplayer mini float theme="pic" :music="music.list[6]"></aplayer>

        <div style="height: 100px"></div>
    </div>
</template>

<script>
    import aplayer from 'vue-aplayer'

    export default {
        name: 'home.vue',
        components: {
            aplayer
        },
        data() {
            return {
                music: {
                    info: {
                        title: 'Something Just Like This',
                        artist: 'Kurt Hugo Schneider',
                        src: 'https://cdn.jsdelivr.net/gh/abelethan/CDN@1.0/music/Sam%20Tsui,Kurt%20Hugo%20Schneider%20-%20Something%20Just%20Like%20This.mp3',
                        pic: 'http://p1.music.126.net/fECEIn_fjzypG2qKJbT-Gw==/18771962022862207.jpg',
                        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                    },
                    list: [
                        {
                            title: '后来',
                            artist: '刘若英',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/51677db1f7b51f1f1bacd1a2498665ff/190892/190892.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/55a91fc4bd5de45f03400414de7df005/604598174/604598174.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2E/wKgf7F4gLLaAEsrsAFNUPej0e9g303.mp3',
                        },
                        {
                            title: '当爱已成往事',
                            artist: '张国荣',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/545f2743dccb21803342b62fca6c6140/659420738/659420738.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/050c5df2da667382d9920f73af9e9d27/659420756/659420756.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2D/wKgf7F4gLK6ACKwuAEm7rWUpA24605.mp3',
                        },
                        {
                            title: '橄榄树',
                            artist: '齐豫',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/aded5bbceee501f1465924b4c7a0ad5b/70235/70235.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/09231e14fd577e4769d222c71fb596da/603750204/603750204.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2D/wKgf7F4gLK2AbkzyADbAUsfTrb4234.mp3',
                        },
                        {
                            title: '你怎么舍得我难过',
                            artist: '黄品源',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/dea4205c8b4663da41a45f1e9b707e83/67975/67975.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/1b5e5b23b96b4ed333759fd50b567c20/603120507/603120507.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2D/wKgf7F4gLK2AGMIRAEdo0M9HulY094.mp3',
                        },
                        {
                            title: '花心',
                            artist: '周华健',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/977febf5411733e083f7bb3dc72941cf/66786/66786.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/17a38ec9c97174834b89ef8381401051/603128659/603128659.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2D/wKgf7F4gLLGAYlNHADgAUtKv2jc407.mp3',
                        },
                        {
                            title: '勇气',
                            artist: '梁静茹',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/c8011e2241efd6b7ccca028269f7fdc3/68387/68387.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/5c2ab9d5cf35d6309185ff5f54b36a73/603119658/603119658.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2D/wKgf7F4gLKuADfBRADqQpuLj24s954.mp3',
                        },
                        {
                            title: '素颜',
                            artist: '许嵩,何曼婷',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/7113d97b9f3806377f653255b52bb485/672155143/672155143.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/506f1c378ed04d5cd830b4d2f4e7a1fe/672455212/672455212.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2E/wKgf7F4gLMCAHJAbADpMnDc8J-A821.mp3',
                        },
                        {
                            title: '江南',
                            artist: '林俊杰',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/463a1f8be7c83a42195f498974358336/946499/946499.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/dbc64e7ca0ecba7d71334e5c01a7a0e9/603390396/603390396.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2E/wKgf7F4gLLqAU5w0AEFvg6UGDoc390.mp3',
                        },
                        {
                            title: '爱的代价',
                            artist: '张艾嘉',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/cc4987009da9b4fe3467774ea8924858/66549/66549.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/49fad6b94fa51db9ec17e198269a03f3/591241834/591241834.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2E/wKgf7F4gLL6AdKkNAEpCm4vWtaQ604.mp3',
                        },
                        {
                            title: '心太软',
                            artist: '任贤齐',
                            theme: 'pic',
                            pic: 'http://qukufile2.qianqian.com/data2/pic/952264bd4fbf7aed26bf8a607b63a294/69883/69883.jpg',
                            lrc: 'http://qukufile2.qianqian.com/data2/lrc/72da7375018e539ce3fbd231ce2fc649/603678220/603678220.lrc',
                            src: 'http://183.221.116.67:8808/group1/M00/00/2E/wKgf7F4gLLWAMvlHAFWOjlgxQMo165.mp3',
                        },
                    ],
                    audio: {
                        volume: 0.8,
                        preload: 'none',
                        muted: false,
                        controls: false,
                    }
                }
            }
        },
        methods: {
            onChange() {
                this.music.audio.muted = !this.music.audio.muted;
            },
            onChangeVolume(num) {
                this.music.audio.volume = num
            }
        },
    }
</script>

<style scoped>
    .demo-title {
        color: white;
        text-align: center;
    }

</style>
