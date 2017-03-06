vue2.0

1. 组件模板，不支持片段代码

    Vue.component('my-aaa', {
        template : '<h3>我是组件</h3><strong>我是strong</strong>'
    })

    // 不支持

    <template id="aaa">
        <div> //
            <h3>我是组件</h3>
            <strong>我是加粗</strong>
        </div>
    </template>

    // 必须要以根元素进行包裹

2.组件定义

    Vue.extend  在2.0中， 有改动，不建议使用

    Vue.component("组件名称", {
        data(){},
        methods : {}
        template
    })

    简洁的定义的方式

    var Home = {
        template : "#aa"   ->  extend
    }

3. 生命周期

    beforeCreate        组件实例刚刚被创建、  没有属性

    created             组件已经创建完成   属性已经绑定

    beforeMount         组件编译之前

    mounted             组件已经编译完成

    beforeUpdate        组件更新之前

    updated             组件更新完毕

    beforeDestory       组件销毁前

    destroyed           组件销毁完毕      -> method this.$destory()

4. 循环

    默认可以添加重复组件  1.0 => track-by="$index"

    去掉了隐式变量

        <li v-for="(val, index) in list" track-by="$index">
            {{val}} {{index}}
        </li>

     track-by="index" => :key="index"

5. 自定义键盘指令

    vue1.0 => Vue.diective('on').keyCodes.f1 = 112;

    vue2.0 => Vue.config.keyCodes.ctrl = 17

6. 过滤器

    {{msg | currency}}

        内置过滤器，全部删除了

        传参 {{msg | todou '12', '4'}}

    vue2.0

        传参 {{msg | todou('12', '5')}}

    lodash 工具库  _.debounce(fn, 2000)  // 延迟

7. 组件通信

    vm.$emit

    vm.$on

    vue 1.0 子组件更改父组件的信息，可以是同步的  :msg.sync="a"

    vue 2.0 不允许更改

        1. 父组件每次传一个对象给子组件 对象之间引用

        2. 只是不报错 mounted(){this.b = this.msg;} -> 中转

    可以单一事件管理组件通信

        var Event= new Vue();

        Event.$emit('事件名称', 数据)

        Event.$on('事件名称', function(data){//...}.bind(this))





