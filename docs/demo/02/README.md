vue-resource

1. HTPP 

        this.$http({

            url : url,

            method : 'post|get',

            params|data : {},

            method :

            jsonp : callbackname

        }).then(fnsuess(res), fnfailed(res))

2. 生命周期

        created         实例已经创建

        beforeCompile   编译之前

        compiled        编译之后

        ready           插入文档中


        beforeDestroy   销毁之前

        destroyed       销毁之后

3. v-cloak 防止闪烁

    style
    [v-cloak]{ display:none}

    {{msg}} == v-text="msg"

    {{{msg}}} == v-html


4. 计算属性

    computed : {

        b : {

            get : function (){

                // return

            },

            set : function (val){
                //

            }

        },

        c : function (){

            return 值

        }
    }


5.简单的方法

    vm.$el      =>      element

    vm.$data    =>      data

    vm.$mount(element)      手动挂载元素

    vm.$options             获取自定义属性

    vm.$log()               查看现在的数据的状态


6. 循环

    v-for="value in arr"  track-by="$index/uid"     (提高循环的性能) 解决添加重复的数据循环报错

7. 过滤器

    debounce        配合时间，延时进行

    数据配合使用过滤器

        limitBy num     取前几条数据

        limitBy 参数(取几个, 从哪开始)

        filterBy str        取 包含 str 的数据

        orderBy             排序

          orderBy 1/-1/2          1-> 正序 2-> 倒序

    自定义过滤器

        Vue.filter(filtername, callback(){})

    双向过滤器

        Vue.filter(filterName, {

            read : function (str){
                // model -> view
                return
            },

            write : function (val){
                // view => model
                return val;
            }

        })

8. 指令

    v-text
    v-for
    v-html

    自定义指令

        属性指令

            Vue.directive(自定义指令, function (){
                // v- 不需加上 v-  使用的时候必须用 v-自定义指令 来使用
            })

        元素指令

            Vue.elementDirective(元素指令, {

                bind : function (){// 元素指令 名字随便 }

            })

    键盘信息

        @keydown.up

        @keydown.a/b/c....  // 键位

        @keydown.ctrl

        自定义键盘事件

            Vue。directive('on').keyCodes.ctrl = 17

            Vue.directive('on').keyCodes.myenter = 13  =>  @keydown.myenter="show"

9. 监听数据

    $vm.$el/$mount/$options/....

    $vm.watch(name, function (){// 程序})     // 浅度

    $vm.watch(name, fncb, {deep : true})        // 深度































