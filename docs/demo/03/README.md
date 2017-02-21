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













































