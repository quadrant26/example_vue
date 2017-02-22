1. 双向过滤器

    vue.filter(filtername, {

        read : function (){},

        write : function (){}

    })


2. Vue 过滤(动画)

    bower

        npm install bower -g

        bower install <packagename>

        bower uninstall <packagename>

        bower info <packagename>      查看文件信息

    动画

        css3 animation  transition

        <div id="div1" v-show="bSign" transition="fade"></div>

        .fade-transition{}
        .fade-enter{}
        .fade-leave{}


        animate.css

        <div id="div1" v-show="bSign" class="animated" transition="bounce"></div>

            Vue({

                ....

                 transitions : {

                    bounce : {

                        enterClass : "enterClassName",
                        leaveClass : "leaveClassName"

                    }

                 }

            })

3. 组件

    html <aaa></aaa>

    var Aaa = Vue.extend({

        template : '<h3>我是标题</h3>'
    })

    Vue.component('aaa', Aaa)

    *组件里面放数据的时候

        data 必须是一个函数，而且必须返回一个对象(json)

        Aaa = Vue.extend({

            data(){
                return {
                    msg : '我是标题_11'
                };
            },

            template : '<h3>{{msg}}</h3>'
        });

    第二种方式

        Vue.component('my-aaa', {

            template : '<strong>好</strong>'

        })

4. 局部组件

    var Aaa = Vue.extend({

        template : '<h3>Welcome</h3>'

    });

    new Vue({
        ...

        components : {
            aaa : Aaa
        }

    })

    第二种方式

        components : {

            aaa : {

                template : 'str'

            }
        }

5. 组件模板

    1. 第一种

        <script type="x-template" id="aaa">
            <h2 @click="change">标题2 -> {{msg}}</h2>
            <ul>
                <li>1111</li>
                <li>2222</li>
                <li>3333</li>
                <li>4444</li>
            </ul>
        </script>

        new Vue({
            template : '#aaa'
        })

    2. 第二种

        <template id="aaa">
            <h1>标题1</h1>
            <ul>
                <li v-for="val in arr">{{val}}</li>
            </ul>
        </template>


    3. 动态组件

        <component :is="a"></component>

6. vue-devtools 调试工具

    （https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN）

    vue 默认情况下，子组件没法访问父组件的数据

7. 组件数据传递

    1、子组件获取父组件的数据\

        <template id="aaa">
            <bbb :m="msg" :my-msg="msg2"></bbb>
        </template>

        props:[]

            props : ['m', "myMsg"]

            props : {
                'm' : String,
                'myMsg' : Number
            },

    2. 父级获取子级的数据















































