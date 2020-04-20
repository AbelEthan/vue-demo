# vue-aplayer-demo

预览地址

* 安装aplayer
```vue
npm install --save vue-aplayer 
```

* 在main.js里面导入并引用
```js
import vueAplayer from 'vue-aplayer'
```

* 在vue文件里面引入
```js
import aplayer from 'vue-aplayer'
 
export default {
    components: {
      aplayer
    }
}
```

* html部分
```vue
<template>
    <div style="width: 60%">
         <aplayer :music="music"></aplayer>
    </div>
</template>
```
* js部分
```js
export default {
    data() {
        return {
            music: {
               title: '',
               author: '',
               url: '',
               lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
           }
        }
    }
}
```
