Vue

1. 生命周期

        beforeCreate

        created

        beforeMount

        mounted

            beforeUpdate

            updated

        boforeDestory

        destoryed

2. 模版语法

    v-bind:href  ==>  :href

    v-on:click  ==> @click

    修饰符

        v-on:click.prevnt  ==> .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()

    过滤器

        {{message | captitalize}}

        v-bind:id = "message | captitalize"

        {{ message | filterA('arg1', arg2) }}

            字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数

3. 计算属性

    computed : {
        methods ...
    }

4. 事件

    v-on:click="count += 1"

    v-on:click="great"

    v-on:click="great(arguments)"

    v-on:click="great(arguments, $event)"

    事件修饰符

        .stop
        .prevent
        .capture
        .self
        .once

        <!-- 阻止单击事件冒泡 -->
        <a v-on:click.stop="doThis"></a>
        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="onSubmit"></form>
        <!-- 修饰符可以串联  -->
        <a v-on:click.stop.prevent="doThat"></a>
        <!-- 只有修饰符 -->
        <form v-on:submit.prevent></form>
        <!-- 添加事件侦听器时使用事件捕获模式 -->
        <div v-on:click.capture="doThis">...</div>
        <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
        <div v-on:click.self="doThat">...</div>

        <!-- 点击事件将只会触发一次 -->
        <a v-on:click.once="doThis"></a>

    按键修饰符

        <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
        <input v-on:keyup.13="submit">
        <!-- 同上 -->
        <input v-on:keyup.enter="submit">
        <!-- 缩写语法 -->
        <input @keyup.enter="submit">

        .enter
        .tab
        .delete (捕获 “删除” 和 “退格” 键)
        .esc
        .space
        .up
        .down
        .left
        .right

        2.1.0 add
        .ctrl
        .alt
        .shift
        .meta

        可以通过全局 config.keyCodes 对象自定义按键修饰符别名
        Vue.config.keyCodes.f1 = 112

        <!-- Alt + C -->
        <input @keyup.alt.67="clear">
        <!-- Ctrl + Click -->
        <div @click.ctrl="doSomething">Do something</div>

6. 表单

    修饰符

        添加一个修饰符 lazy ，从而转变为在 change 事件中同步
        <!-- 在 "change" 而不是 "input" 事件中更新 -->
        <input v-model.lazy="msg" >

        自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值）
        <input v-model.number="age" type="number">

        自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入
        <input v-model.trim="msg">

7. 组件

    全局注册

        Vue.component(tagName, options)

    局部注册

        var child = {
            template : '<div>A component !</div>'
        }
        new Vue({
            el : "#example",
            components : {
                'my-component' : child
            }
        })

        // <my-row> 被认为是无效的内容 变通的方案是使用特殊的 is 属性
        <table>
            <tr is="my-row"></tr>
        </table>

    data  必须是函数

        data: function () {
            return data
        }

    props 父组件向子组件传递数据

        props : data

    事件

        使用 $on(eventName) 监听事件
        使用 $emit(eventName) 触发事件

        给组件绑定原生事件 可以使用 .native 修饰 v-on

        <my-component v-on:click.native="doTheThing"></my-component>

    slot

        <app-layout>
            <h1 slot="header">这里可能是一个页面标题</h1>
            <p>主要内容的一个段落。</p>
            <p>另一个主要段落。</p>
            <p slot="footer">这里有一些联系信息</p>
        </app-layout>

        Vue.component('app-layout', {
          template: '<div class="container">\
              <header>\
                  <slot name="header"></slot>\
              </header>\
              <main>\
                  <slot></slot>\
              </main>\
              <footer>\
                  <slot name="footer"></slot>\
              </footer>\
          </div>'
        })









































1.
