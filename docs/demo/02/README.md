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