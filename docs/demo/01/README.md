Vue 基础

1. 基础数据

    var vm = new Vue({

        el : element(selected),

        data : {

            msg : str/arr/json/...
        }

    })

    element {{msg}}

2. 双向数据绑定

    <input type="text" v-model="" />

3. 循环

    v-for="val in arr"  v-for="(k,v) in json"

     {{var}}, {{index}}

     {{k}} , {{v}}, {{index}}

4. 事件

    v-on:事件名(click) = "fn"

    new Vue({
        ....
        methods : {

            fn : function (){}

        }

    })

5. 事件对象


    $event

    v-on:click=fn($event)

    fn : function (ev, args){}

    阻止事件冒泡

    1. @click.stop = fn

    2. ev.cancelBubble = true

    阻止默认行为

    1. ev.preventDefault();

    2. @contextmenu.prevent

6. 键盘事件

    v-on:keydown == @keydown

    @keyup

    @keyup.enter

    @keyup.down/left/right/up

7. 属性操作

    new Vue({

        ....

        data : {

            url : url,

            width : width,

            height : height,

            json : {

                red : true,

                blue : false

            }

        }

    })

    1. src = {{url}}  会报错 404

    2. v-bind:src="url"

    3. :src 简写

        :src=url  :width=width :height=height

    :class (v-bind:class)

        :class = "red" red 是数据

        :class = "[red, b, c, d]"  red b 是 样式表的 class

        :class = {red:a, blue:false}"  // red blue 为 className

        :class = "json"

    :style (v-bind:style)

        :style = "[red, b, c, d]"  red b 是 样式表的 class

        :style = {red:a, blue:false}"  // red blue 为 className

        :style = "json"

8. 模板字符串

    {{*msg}}     只绑定一次

    {{{msg}}     html 转义

9. 过滤器

    {{msg | filterA}}

    {{msg | filterA|filterB}}

        uppercase

        lowercase

        capitalize

        currency  美元符号

10. resource 交互

    this.$http.get("url", {params : data}).then(fnsuccess(res){}, fnfailed(res){})

    this.$http.post(url[, {params : data}, {emulateJSON : true}]).then(fnsuccess (res){}, fnfailed (res){})

    this.$http.jsonp(url, {params : data}, {jsonp : 'cb'}).then(fnsuccess (res){}, fnfailed (res){})

