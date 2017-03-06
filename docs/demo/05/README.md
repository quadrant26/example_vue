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

    created             实例已经创建完成   属性已经绑定

    beforeMount         模板编译之前

    mounted             模板已经编译完成

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








